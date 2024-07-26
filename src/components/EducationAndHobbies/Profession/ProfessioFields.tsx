import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { educationOptions, professionSatisfactionOptions } from "../Options";
import IsCurrentlyLearningFields from "./IsCurrentlyLearningFields";

const ProfessioFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<UserData>();

  return (
    <>
      <label htmlFor="education">Образование:</label>
      <div className="checkbox-container">
        <Controller
          name="profile.educationAndHobbies.education"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              {educationOptions.map((option, index) => (
                <div key={index}>
                  <input
                    type="checkbox"
                    id={`education-${index}`}
                    {...field}
                    value={option}
                    checked={
                      Array.isArray(field.value) && field.value.includes(option)
                    }
                    onChange={() => {
                      if (
                        Array.isArray(field.value) &&
                        field.value.includes(option)
                      ) {
                        field.onChange(
                          field.value.filter((val) => val !== option)
                        );
                      } else {
                        field.onChange([
                          ...(Array.isArray(field.value) ? field.value : []),
                          option,
                        ]);
                      }
                    }}
                  />
                  <label htmlFor={`education-${index}`}>{option}</label>
                </div>
              ))}
            </div>
          )}
        />
      </div>
      {errors.profile?.educationAndHobbies?.education && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="qualification">
        Квалификация (профессия), специализация:
      </label>
      <Controller
        name="profile.educationAndHobbies.qualification"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="qualification" />
        )}
      />
      {errors.profile?.educationAndHobbies?.qualification && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="currentProfession">
        Кем вы работаете (какие ваши профессии приносят доход):
      </label>
      <Controller
        name="profile.educationAndHobbies.currentProfession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="currentProfession" />
        )}
      />
      {errors.profile?.educationAndHobbies?.currentProfession && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="currentProfessionSatisfaction">
        Насколько вы удовлетворены своей текущей профессиональной деятельностью?
      </label>
      <Controller
        name="profile.educationAndHobbies.currentProfessionSatisfaction"
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
      {errors.profile?.educationAndHobbies?.currentProfessionSatisfaction && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="longestProfession">
        Насколько вы были удовлетворены своей самой длительной профессиональной
        деятельностью?
      </label>
      <Controller
        name="profile.educationAndHobbies.longestProfession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="longestProfession" />
        )}
      />
      {errors.profile?.educationAndHobbies?.longestProfession && (
        <span>Поле обязательно для заполнения</span>
      )}

      <IsCurrentlyLearningFields />
    </>
  );
};

export default ProfessioFields;
