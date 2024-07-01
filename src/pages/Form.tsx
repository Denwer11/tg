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
import { PreferencesAndEnvironment } from '../components/PreferencesAndEnvironment/PreferencesAndEnvironment.types';

export type FormData = {
  generalInfo: GeneralInfo;
  currentMaritalStatus: CurrentMaritalStatus;
  parentFamily: ParentFamily;
  educationAndHobbies: EducationAndHobbies;
  preferencesAndEnvironment: PreferencesAndEnvironment;
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
              relation: undefined,
              ageDifference: undefined,
              profession: undefined,
            },
          ],
          childhoodRelationship: "чаще жертвой агрессии братьев/сестер",
          currentRelationship: "не общаемся, в конфликте",
        },
        hasParentalOverprotection: "нет",
        parentalOverprotection:
          "очень негативно, как сильное давление, ограничение свободы",
        relationshipParentsChildhood: {
          relationshipParents: "жили отдельно и не встречались",
          comment: undefined,
        },
        relationshipParentsNow: {
          relationshipParents:
            "Я зависим от их мнения, они активно участвуют в моей жизни (я согласую свои решения, они принимают участие в моих семейных делах, например решениях об отпуске, тратах, детях, я с ними советуюсь по большинству вопросов и нуждаюсь в их одобрении и т.д.)",
          comment: undefined,
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
        education: undefined,
        qualification: undefined,
        currentProfession: undefined,
        currentProfessionSatisfaction: "очень удовлетворен",
        longestProfession: undefined,
        longestProfessionSatisfaction: "очень удовлетворен",
        isCurrentlyLearning: "нет",
        learningField: undefined,
        learningComment: undefined,
        hobbiesBefore16: undefined,
        hobbiesNow: undefined,
        hobbyFrequency: "ежедневно",
        expertise: undefined,
        expertiseFrequency: "ежедневно",
        preferredRest: undefined,
        restFrequency: "ежедневно",
        booksAt10: "0-9",
        readingFrequencyAt10: "ежедневно",
        currentReadingFrequency: "ежедневно",
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
