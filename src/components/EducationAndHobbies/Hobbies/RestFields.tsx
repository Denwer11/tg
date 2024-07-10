import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { preferredRestOptions, restFrequencyOptions } from "../Options";

const RestFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    register,
  } = useFormContext<UserData>();

  const [showOtherPreferredRest, setShowOtherPreferredRest] = useState(false);

  const [showRestFrequencyCustomField, setShowRestFrequencyCustomField] =
    useState(false);

  const handleOptionChangeRestFrequency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowRestFrequencyCustomField(event.target.value === "ваш вариант");
    setValue("profile.educationAndHobbies.restFrequency", event.target.value);
  };

  return (
    <>
      <label htmlFor="preferredRest">
        Какой вид отдыха вам наиболее предпочтителен? (Как вы восполняете
        ресурсы и силы):
      </label>
      <div className="checkbox-container">
        <Controller
          name="profile.educationAndHobbies.preferredRest"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <div>
              {preferredRestOptions.map((option, index) => (
                <div key={index}>
                  <input
                    id={`preferredRest-${index}`}
                    type="checkbox"
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
                  <label htmlFor={`preferredRest-${index}`}>{option}</label>
                </div>
              ))}
              <div>
                <input
                  type="checkbox"
                  id="other-preferredRest"
                  {...register("profile.educationAndHobbies.preferredRest")}
                  value="ваш вариант"
                  checked={showOtherPreferredRest}
                  onChange={() =>
                    setShowOtherPreferredRest(!showOtherPreferredRest)
                  }
                />
                <label htmlFor="other-preferredRest">ваш вариант</label>
                {showOtherPreferredRest && (
                  <Controller
                    name="profile.educationAndHobbies.preferredRest"
                    control={control}
                    rules={{ required: true }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        id="other-preferredRest"
                        className="textarea-other"
                      />
                    )}
                  />
                )}
              </div>
            </div>
          )}
        />
      </div>
      {errors.profile?.educationAndHobbies?.preferredRest && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="restFrequency">
        Как часто вы занимаетесь этими видами отдыха?
      </label>
      <Controller
        name="profile.educationAndHobbies.restFrequency"
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
            name="profile.educationAndHobbies.restFrequency"
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
      {errors.profile?.educationAndHobbies?.restFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default RestFields;
