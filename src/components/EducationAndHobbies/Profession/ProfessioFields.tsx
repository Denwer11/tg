import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { educationOptions, professionSatisfactionOptions } from "../Options";
import IsCurrentlyLearningFields from "./IsCurrentlyLearningFields";

const ProfessioFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <label htmlFor="education">Образование:</label>
      <Controller
        name="educationAndHobbies.education"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            {educationOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  {...field}
                  value={option}
                  checked={field.value.includes(option)}
                  onChange={() => {
                    if (field.value.includes(option)) {
                      field.onChange(
                        field.value.filter((val) => val !== option)
                      );
                    } else {
                      field.onChange([...field.value, option]);
                    }
                  }}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
          </div>
        )}
      />
      {errors.educationAndHobbies?.education && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="qualification">
        Квалификация (профессия), специализация:
      </label>
      <Controller
        name="educationAndHobbies.qualification"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="qualification" />
        )}
      />
      {errors.educationAndHobbies?.qualification && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="currentProfession">
        Кем вы работаете (какие ваши профессии приносят доход):
      </label>
      <Controller
        name="educationAndHobbies.currentProfession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="currentProfession" />
        )}
      />
      {errors.educationAndHobbies?.currentProfession && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="currentProfessionSatisfaction">
        Насколько вы удовлетворены своей текущей профессиональной деятельностью?
      </label>
      <Controller
        name="educationAndHobbies.currentProfessionSatisfaction"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="currentProfessionSatisfaction" {...field}>
            {professionSatisfactionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.educationAndHobbies?.currentProfessionSatisfaction && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="longestProfession">
        Независимо от того, кем Вы работаете сейчас, укажите по какой
        специальности Вы работали наиболее долго:
      </label>
      <Controller
        name="educationAndHobbies.longestProfession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="longestProfession" />
        )}
      />
      {errors.educationAndHobbies?.longestProfession && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="longestProfessionSatisfaction">
        Насколько вы удовлетворены своей текущей профессиональной деятельностью?
      </label>
      <Controller
        name="educationAndHobbies.longestProfessionSatisfaction"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="longestProfessionSatisfaction" {...field}>
            {professionSatisfactionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.educationAndHobbies?.longestProfessionSatisfaction && (
        <span>Поле обязательно для заполнения</span>
      )}

      <IsCurrentlyLearningFields />
    </>
  );
};

export default ProfessioFields;
