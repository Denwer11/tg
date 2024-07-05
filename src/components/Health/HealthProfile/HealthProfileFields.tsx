/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, useController, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import {
  birthConditionsOptions,
  bloodTypeOptions,
  handOptions,
} from "../Options";

const HealthProfileFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const {
    field: { value: heightValue, onChange: onHeightChange },
  } = useController<FormData>({
    name: "health.height",
    defaultValue: 170,
  });

  const {
    field: { value: weightValue, onChange: onWeightChange },
  } = useController<FormData>({
    name: "health.weight",
    defaultValue: 70,
  });

  return (
    <>
      <label htmlFor="height">Рост (см):</label>
      <Controller
        name="health.height"
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
      {errors.health?.height && <span>Поле обязательно для заполнения</span>}
      <span>{heightValue as any} см</span>
      <label htmlFor="weight">Вес (кг):</label>
      <Controller
        name="health.weight"
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
      {errors.health?.weight && <span>Поле обязательно для заполнения</span>}
      <span>{weightValue as any} кг</span>
      <label htmlFor="bloodType">Группа крови:</label>
      <Controller
        name="health.bloodType"
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
      {errors.health?.bloodType && <span>Поле обязательно для заполнения</span>}
      <label htmlFor="hand">Пишете рукой:</label>
      <Controller
        name="health.hand"
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
      {errors.health?.hand && <span>Поле обязательно для заполнения</span>}
      <label htmlFor="birthConditions">Условия рождения:</label>
      <Controller
        name="health.birthConditions"
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
      {errors.health?.birthConditions && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default HealthProfileFields;
