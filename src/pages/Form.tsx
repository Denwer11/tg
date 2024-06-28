import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactJson from "react-json-pretty";
import GeneralInfoForm from "../components/GeneralInfo/GeneralInfoForm";
import { GeneralInfo } from "../components/GeneralInfo/GeneralInfo.types";
import { CurrentMaritalStatus } from "../components/MaritalStatus/MaritalStatus.types";
import MaritalStatusForm from "../components/MaritalStatus/MaritalStatusForm";
import { ParentFamily } from "../components/ParentFamily/ParentFamily.types";
import ParentFamilyForm from "../components/ParentFamily/ParentFamilyForm";
import {
  defaultContacts,
  defaultCountryCity,
} from "../defaultValues/generalInfo";
import {
  defaultDivorce,
  defaultFather,
  defaultFatherRelationship,
  defaultMother,
  defaultMotherRelationship,
  defaultParentalOverprotection,
  defaultStepfather,
  defaultStepmother,
} from "../defaultValues/parentFamily";

export type FormData = {
  generalInfo: GeneralInfo;
  currentMaritalStatus: CurrentMaritalStatus;
  parentFamily: ParentFamily;
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const methods = useForm<FormData>({
    defaultValues: {
      generalInfo: {
        fullName: undefined,
        gender: "мужской",
        dateOfBirth: undefined,
        countryCity: defaultCountryCity,
        contacts: defaultContacts,
      },

      currentMaritalStatus: {
        maritalStatus: "живу без партнера",
        otherMaritalStatus: undefined,
        partnerAge: undefined,
        partnerOccupation: undefined,
        partnerProfession: undefined,
        otherOccupation: undefined,
        relationshipDuration: "меньше года",
        relationshipQuality: "очень хорошие",
        longestRelationshipDuration: undefined,
        relationshipEndReason: "разрыв по инициативе партнера",
        numberOfRelationships: undefined,
        hasChildren: "нет",
        children: [{ gender: "сын", age: undefined }],
        adoptedChildren: [
          {
            gender: "сын",
            age: undefined,
            adoptionAge: undefined,
          },
        ],
        relationshipWithChildren: undefined,
        livingConditions: undefined,
        livingConditionsSatisfaction: undefined,
      },

      parentFamily: {
        mother: defaultMother,
        motherRelationship: defaultMotherRelationship,
        father: defaultFather,
        fatherRelationship: defaultFatherRelationship,
        hasStepmother: "нет",
        stepmother: defaultStepmother,
        hasStepfather: "нет",
        stepfather: defaultStepfather,
        hasDivorce: "нет",
        divorce: defaultDivorce,
        hasSiblings: "нет",
        siblings: {
          order: undefined,
          totalSiblings: undefined,
          siblingsInfo: [
            {
              relation: "брат",
              ageDifference: undefined,
              profession: undefined,
            },
          ],
          childhoodRelationship: "чаще жертвой агрессии братьев/сестер",
          currentRelationship: "не общаемся, в конфликте",
        },
        hasParentalOverprotection: "нет",
        parentalOverprotection: defaultParentalOverprotection,
      },
    },
  });

  const onSubmit: (data: FormData) => void = (data) => {
    setFormData(data);
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
            <button type="submit">Отправить</button>
          </FormProvider>
        </form>
        {formData && <div>{<ReactJson data={formData} />}</div>}
      </div>
    </>
  );
};

export default Form;
