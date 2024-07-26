import React, { useState } from "react";
import {
  LivingConditionsOptions,
  LivingConditionsSatisfactionOptions,
} from "../Options";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";

const LivingConditionsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<UserData>();

  const [showLivingConditionsCustomField, setShowLivingConditionsCustomField] =
    useState(false);

  const handleOptionChangeLivingConditions = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowLivingConditionsCustomField(event.target.value === "ваш вариант");
    setValue(
      "profile.currentMaritalStatus.livingConditions",
      event.target.value
    );
  };

  return (
    <>
      <label htmlFor="livingConditions">Условия проживания:</label>
      <Controller
        name="profile.currentMaritalStatus.livingConditions"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="livingConditions"
            {...field}
            onChange={handleOptionChangeLivingConditions}
          >
            {LivingConditionsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showLivingConditionsCustomField && (
        <div>
          <label htmlFor="livingConditions.custom">Ваш вариант:</label>
          <Controller
            name="profile.currentMaritalStatus.livingConditions"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="livingConditions.custom" />
            )}
          />
        </div>
      )}
      {errors.profile?.currentMaritalStatus?.livingConditions && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="livingConditionsSatisfaction">
        Как вы оцениваете свои условия проживания?
      </label>
      <Controller
        name="profile.currentMaritalStatus.livingConditionsSatisfaction"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="livingConditions" {...field}>
            {LivingConditionsSatisfactionOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.profile?.currentMaritalStatus?.livingConditionsSatisfaction && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default LivingConditionsFields;
