import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import ReactJson from "react-json-pretty";
import GeneralInfoForm from "../components/GeneralInfo/GeneralInfoForm";
import { GeneralInfo } from "../components/GeneralInfo/GeneralInfo.types";
import { CurrentMaritalStatus } from "../components/MaritalStatus/MaritalStatus.types";
import MaritalStatusForm from "../components/MaritalStatus/MaritalStatusForm";
import { ParentFamily } from "../components/ParentFamily/ParentFamily.types";
import ParentFamilyForm from "../components/ParentFamily/ParentFamilyForm";

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
        countryCity: {
          country: undefined,
          city: undefined,
        },
        contacts: {
          phone: undefined,
          telegram: undefined,
          email: undefined,
        },
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
            gender: undefined,
            age: undefined,
            adoptionAge: undefined,
          },
        ],
        relationshipWithChildren: undefined,
        livingConditions: undefined,
        livingConditionsSatisfaction: undefined,
      },

      parentFamily: {
        mother: {
          birthYear: undefined,
          profession: undefined,
          ageAtBirth: undefined,
          totalChildren: undefined,
          comment: undefined,
        },
        motherRelationship: {
          rating: "не жила со мной, я воспитывался другим человеком",
          comment: undefined,
        },
        father: {
          birthYear: undefined,
          profession: undefined,
          ageAtBirth: undefined,
          comment: undefined,
        },
        fatherRelationship: {
          rating: "не жил со мной, я воспитывался другим человеком",
          comment: undefined,
        },
        hasStepmother: "нет",
        stepmother: {
          rating:
            "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
          yearsTogether: undefined,
          comment: undefined,
        },
        hasStepfather: "нет",
        stepfather: {
          rating: undefined,
          yearsTogether: undefined,
          comment: undefined,
        },
        hasDivorce: "нет",
        divorce: {
          ageAtDivorce: undefined,
          whoLivedWith: undefined,
          emotionalState: undefined,
        },
        hasSiblings: "нет",
        siblings: [
          {
            order: undefined,
            totalSiblings: undefined,
            siblingsInfo: {
              relation: "брат",
              ageDifference: undefined,
              profession: undefined,
            },
            childhoodRelationship: undefined,
            currentRelationship: undefined,
          },
        ],
        hasParentalOverprotection: "нет",
        parentalOverprotection: {
          overprotected: false,
          perception: undefined,
        },
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
