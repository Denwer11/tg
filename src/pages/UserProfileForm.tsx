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
  defaultStepfather,
  defaultStepmother,
} from "../defaultValues/parentFamily";
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
import { questions } from '../components/Principles/PrinciplesQuestions';

export type UserData = {
  profile: FormData;
  factorsTest: TestData;
  principlesTest: PrinciplesData;
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
      profile: {
        generalInfo: {
          gender: "мужской",
          countryCity: defaultCountryCity,
          contacts: defaultContacts,
        },

        currentMaritalStatus: {
          maritalStatus: "живу без партнера",
          relationshipDuration: "меньше года",
          relationshipQuality: "очень хорошие",
          relationshipEndReason: "разрыв по инициативе партнера",
          hasChildren: "нет",
          children: [{ gender: "сын" }],
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
            childhoodRelationship: "чаще жертвой агрессии братьев/сестер",
            currentRelationship: "не общаемся, в конфликте",
          },
          hasParentalOverprotection: "нет",
          parentalOverprotection:
            "очень негативно, как сильное давление, ограничение свободы",
          relationshipParentsChildhood: {
            relationshipParents: "жили отдельно и не встречались",
          },
          relationshipParentsNow: {
            relationshipParents:
              "Я зависим от их мнения, они активно участвуют в моей жизни (я согласую свои решения, они принимают участие в моих семейных делах, например решениях об отпуске, тратах, детях, я с ними советуюсь по большинству вопросов и нуждаюсь в их одобрении и т.д.)",
          },
          communication: "ежедневно",
          hasDeaths: "нет",
          deaths: {
            whoDied: "брат",
            myAge: 0,
            copingWithLoss: "получали поддержку от семьи и друзей",
          },
        },

        educationAndHobbies: {
          currentProfessionSatisfaction: "очень удовлетворен",
          longestProfessionSatisfaction: "очень удовлетворен",
          isCurrentlyLearning: "нет",
          hobbyFrequency: "ежедневно",
          expertiseFrequency: "ежедневно",
          restFrequency: "ежедневно",
          booksAt10: "0-9",
          readingFrequencyAt10: "ежедневно",
          currentReadingFrequency: "ежедневно",
        },

        preferencesAndEnvironment: {
          wallDecor: "Искусство (картины, художественные фотографии)",
          preferredFurniture: "Классическую",
          dominantColors: "Яркие и насыщенные",
          adviceSource: "Интернет",
          transportAudio: "Свой плейлист",
          preferredChannels: "Новости",
          aloneTimeActivities:
            "Полежать на диване, принять ванну и т.п. релакс",
          preferredSports: "Индивидуальные виды спорта (бег, плавание)",
          socialMediaFrequency: "Каждый день",
          socialMediaDetox:
            "Это помогает мне быть постоянно на связи и в курсе событий и мне это не мешает",
        },

        health: {
          height: 170,
          weight: 80,
          bloodType: "I",
          hand: "П",
          birthConditions: "естественным путем",
          hasSurgery: "нет",
          hasIlness: "нет",
          feelingHelplessFrequency: "почти никогда",
          hasDietRestrictions: "нет",
          hasTakingMedication: "нет",
          hasLostConsciousness: "нет",
          hasPsychiatricHelp: "нет",
          hasAlcoholConsumption: "нет",
          alcoholConsumption: {
            alcoholConsumptionWeekly: 0,
            alcoholConsumptionDynamic: "увеличилось",
          },
          hasSmoking: "нет",
          smoking: { smokingDynamic: "увеличилось" },
          hasOtherDrugs: "нет",
          otherDrugs: {
            otherDrugsDynamic: "увеличилось / добавилось",
          },
          hasFamilyHistory: "нет",
          physicalExercises: {},
          hasDietRegimen: "нет",
          dietRegimen: { biggestMeal: 0 },
          healthRating: 0,
          immunityRating: 0,
        },
      },
      
      principlesTest: questions.reduce((acc, _question, index) => {
        acc[`question-${index + 1}`] = 1;
        return acc;
      }, {} as PrinciplesData),
    },
  });

  const onSubmit: (data: UserData) => void = (data) => {
    console.log(data.principlesTest);
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
            <button type="submit">Отправить</button>
          </FormProvider>
        </form>

        {userData && <div>{<ReactJson data={userData} />}</div>}
      </div>
    </>
  );
};

export default UserProfileForm;
