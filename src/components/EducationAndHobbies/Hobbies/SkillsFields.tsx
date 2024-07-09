import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/UserProfileForm";
import { frequencyOptions } from "../Options";

const SkillsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <>
      <label htmlFor="hobbiesBefore16">Хобби до 16 лет:</label>
      <Controller
        name="educationAndHobbies.hobbiesBefore16"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" {...field} id="hobbiesBefore16" />
        )}
      />
      {errors.educationAndHobbies?.hobbiesBefore16 && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="hobbiesBefore16">Хобби сейчас:</label>
      <Controller
        name="educationAndHobbies.hobbiesNow"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input type="text" {...field} id="hobbiesNow" />}
      />
      {errors.educationAndHobbies?.hobbiesNow && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="hobbyFrequency">Как часто вы занимаетесь Хобби?</label>
      <Controller
        name="educationAndHobbies.hobbyFrequency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="hobbyFrequency" {...field}>
            {frequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.educationAndHobbies?.hobbyFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="expertise">
        В чем вы считаете себя экспертом, кроме профессии? (кулинар, водитель,
        пою, рисую и т.д. и.т.п.)
      </label>
      <Controller
        name="educationAndHobbies.expertise"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input type="text" {...field} id="expertise" />}
      />
      {errors.educationAndHobbies?.expertise && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="expertiseFrequency">Как часто вы этим занимаетесь?</label>
      <Controller
        name="educationAndHobbies.expertiseFrequency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="expertiseFrequency" {...field}>
            {frequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.educationAndHobbies?.expertiseFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default SkillsFields;
