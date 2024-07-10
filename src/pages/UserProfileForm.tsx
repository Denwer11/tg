import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactJson from "react-json-pretty";
import GeneralInfoForm from "../components/GeneralInfo/GeneralInfoForm";
import { GeneralInfo } from "../components/GeneralInfo/GeneralInfo.types";
import { CurrentMaritalStatus } from "../components/MaritalStatus/MaritalStatus.types";
import MaritalStatusForm from "../components/MaritalStatus/MaritalStatusForm";
import { ParentFamily } from "../components/ParentFamily/ParentFamily.types";
import ParentFamilyForm from "../components/ParentFamily/ParentFamilyForm";
import { allValues } from "../defaultValues/defaultValues";
import { EducationAndHobbies } from "../components/EducationAndHobbies/EducationAndHobbies.types";
import { PreferencesAndEnvironment } from "../components/PreferencesAndEnvironment/PreferencesAndEnvironment.types";
import PreferencesAndEnvironmentForm from "../components/PreferencesAndEnvironment/PreferencesAndEnvironmentForm";
import EducationAndHobbiesForm from "../components/EducationAndHobbies/EducationAndHobbiesForm";
import { Health } from "../components/Health/Health.types";
import HealthForm from "../components/Health/HealthForm";
import FactorsForm from "../components/Factors/FactorsForm";
import PrinciplesForm from "../components/Principles/PrinciplesForm";
import { TestData } from "../components/Factors/Factors.types";
import { PrinciplesData } from "../components/Principles/Principles.types";
import { questions } from "../components/Principles/PrinciplesQuestions";
import ConsentCheckbox from "../components/Consent/ConsentCheckbox";

export type UserData = {
  profile: FormData;
  factorsTest: TestData;
  principlesTest: PrinciplesData;
  consentForPersonalDataProcessing: boolean;
  consentForResearchUse: boolean;
};

export type FormData = {
  generalInfo: GeneralInfo;
  currentMaritalStatus: CurrentMaritalStatus;
  parentFamily: ParentFamily;
  educationAndHobbies: EducationAndHobbies;
  preferencesAndEnvironment: PreferencesAndEnvironment;
  health: Health;
};

const UserProfileForm: React.FC = () => {
  const [userData, setUserData] = useState<UserData>({} as UserData);
  const methods = useForm<UserData>({
    defaultValues: {
      profile: allValues,

      principlesTest: questions.reduce((acc, _question, index) => {
        acc[`question-${index + 1}`] = 1;
        return acc;
      }, {} as PrinciplesData),

      consentForPersonalDataProcessing: false,
      consentForResearchUse: false,
    },
  });

  const onSubmit: (data: UserData) => void = (data) => {
    const result = {
      emotional: data.factorsTest?.emotional.map((val) => Boolean(val)),
      cognitive: data.factorsTest?.cognitive.map((val) => Boolean(val)),
      social: data.factorsTest?.social.map((val) => Boolean(val)),
      physical: data.factorsTest?.physical.map((val) => Boolean(val)),
    };

    setUserData({
      profile: { ...data.profile },
      factorsTest: result,
      principlesTest: data.principlesTest,
      consentForPersonalDataProcessing: data.consentForPersonalDataProcessing,
      consentForResearchUse: data.consentForResearchUse,
    });
  };

  return (
    <>
      <div className="container">
        <h2>Анкета</h2>
        <h3>Инструкция по заполнению Анкеты: </h3>
        <ul>
          <li>
            1) На заполнение Анкеты и Теста понадобится около 25-35 минут.
          </li>
          <li>
            2) Вам предстоит ответить на 80 основных вопросов и ряд
            дополнительных, убедитесь, что вы будете это делать в спокойной
            атмосфере.
          </li>
          <li>
            3) Чем точнее вы ответите на вопросы, тем эффективнее будет
            результат (вопрос доформулировать).
          </li>
          <li>
            4) Вместо ФИО вы можете написать псевдоним (имя киногероя, кумира и
            т.п.).
          </li>
        </ul>
        <form className="form" onSubmit={methods.handleSubmit(onSubmit)}>
          <FormProvider {...methods}>
            <GeneralInfoForm />
            <MaritalStatusForm />
            <ParentFamilyForm />
            <EducationAndHobbiesForm />
            <PreferencesAndEnvironmentForm />
            <HealthForm />
            <FactorsForm />
            <PrinciplesForm />
            <ConsentCheckbox />
            <button type="submit">Отправить</button>
          </FormProvider>
        </form>

        {userData && <div>{<ReactJson data={userData} />}</div>}
      </div>
    </>
  );
};

export default UserProfileForm;
