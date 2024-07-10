/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import {
  birthConditionsOptions,
  bloodTypeOptions,
  handOptions,
} from "../Options";

const HealthProfileFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<UserData>();

  const {
    field: { value: heightValue, onChange: onHeightChange },
  } = useController<UserData>({
    name: "profile.health.height",
    defaultValue: 170,
  });

  const {
    field: { value: weightValue, onChange: onWeightChange },
  } = useController<UserData>({
    name: "profile.health.weight",
    defaultValue: 70,
  });

  return (
    <>
      <label htmlFor="height">Рост (см):</label>
      <Controller
        name="profile.health.height"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="height"
            type="range"
            min={140}
            max={210}
            {...field}
            onChange={(e) => onHeightChange(e)}
          ></input>
        )}
      />
      {errors.profile?.health?.height && (
        <span>Поле обязательно для заполнения</span>
      )}
      <span>{heightValue as any} см</span>
      <label htmlFor="weight">Вес (кг):</label>
      <Controller
        name="profile.health.weight"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="weight"
            type="range"
            min={30}
            max={150}
            {...field}
            onChange={(e) => onWeightChange(e)}
          ></input>
        )}
      />
      {errors.profile?.health?.weight && (
        <span>Поле обязательно для заполнения</span>
      )}
      <span>{weightValue as any} кг</span>
      <label htmlFor="bloodType">Группа крови:</label>
      <Controller
        name="profile.health.bloodType"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="bloodType" {...field}>
            {bloodTypeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.profile?.health?.bloodType && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="hand">Пишете рукой:</label>
      <Controller
        name="profile.health.hand"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="hand" {...field}>
            {handOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.profile?.health?.hand && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="birthConditions">Условия рождения:</label>
      <Controller
        name="profile.health.birthConditions"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="hand" {...field}>
            {birthConditionsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.profile?.health?.birthConditions && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default HealthProfileFields;
