import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { preferredRestOptions, restFrequencyOptions } from "../Options";

const RestFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    register,
  } = useFormContext<FormData>();

  const [showOtherPreferredRest, setShowOtherPreferredRest] = useState(false);

  const [showRestFrequencyCustomField, setShowRestFrequencyCustomField] =
    useState(false);

  const handleOptionChangeRestFrequency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowRestFrequencyCustomField(event.target.value === "ваш вариант");
    setValue("educationAndHobbies.restFrequency", event.target.value);
  };

  return (
    <>
      <label htmlFor="preferredRest">
        Какой вид отдыха вам наиболее предпочтителен? (Как вы восполняете
        ресурсы и силы):
      </label>
      <Controller
        name="educationAndHobbies.preferredRest"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            {preferredRestOptions.map((option, index) => (
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
            <input
              type="checkbox"
              {...register("educationAndHobbies.preferredRest")}
              value="ваш вариант"
              checked={showOtherPreferredRest}
              onChange={() =>
                setShowOtherPreferredRest(!showOtherPreferredRest)
              }
            />
            <label htmlFor="ваш вариант">ваш вариант</label>
            {showOtherPreferredRest && (
              <Controller
                name="educationAndHobbies.preferredRest"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <textarea {...field} id="preferredRest" />
                )}
              />
            )}
          </div>
        )}
      />
      {errors.educationAndHobbies?.preferredRest && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="restFrequency">
        Как часто вы занимаетесь этими видами отдыха?
      </label>
      <Controller
        name="educationAndHobbies.restFrequency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="restFrequency"
            {...field}
            onChange={handleOptionChangeRestFrequency}
          >
            {restFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showRestFrequencyCustomField && (
        <div>
          <label htmlFor="restFrequency.custom">Ваш вариант:</label>
          <Controller
            name="educationAndHobbies.restFrequency"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="educationAndHobbies.restFrequency.custom"
              />
            )}
          />
        </div>
      )}
      {errors.educationAndHobbies?.restFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default RestFields;
