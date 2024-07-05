import React, { useEffect, useState } from "react";
import { FormData } from "../../../pages/Form";
import { Controller, useFormContext } from "react-hook-form";

const FamilyHistoryFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const [showFamilyHistoryDetails, setShowFamilyHistoryDetails] =
    useState(false);

  const hasFamilyHistory = watch("health.hasFamilyHistory");

  useEffect(() => {
    if (hasFamilyHistory === "нет") {
      setValue("health.familyHistory", undefined);
    }
  }, [hasFamilyHistory, setValue]);

  return (
    <>
      <label htmlFor="hasFamilyHistory">
        Был ли у Вас случай, когда требовалась помощь психиатра?
      </label>
      <div className="radio-container">
        <Controller
          name="health.hasFamilyHistory"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasFamilyHistory-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowFamilyHistoryDetails(true);
                }}
              />
              <label htmlFor="hasFamilyHistory-yes">Да</label>
              <input
                type="radio"
                id="hasFamilyHistory-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowFamilyHistoryDetails(false);
                }}
              />
              <input
                type="radio"
                id="hasFamilyHistory-dontKnow"
                {...field}
                checked={field.value === "не знаю"}
                value="не знаю"
                onChange={() => {
                  field.onChange("не знаю");
                  setShowFamilyHistoryDetails(true);
                }}
              />
              <label htmlFor="hasFamilyHistory-dontKnow">Не знаю</label>
            </>
          )}
        />
      </div>
      {showFamilyHistoryDetails && (
        <>
          <label htmlFor="familyHistory.fatherDiagnosis">
            Отец, если да, напишете диагноз или то, что знаете:
          </label>
          <Controller
            name="health.familyHistory.fatherDiagnosis"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="familyHistory.fatherDiagnosis"
              />
            )}
          />

          <label htmlFor="familyHistory.motherDiagnosis">
            Mать, если да, напишете диагноз или то, что знаете:
          </label>
          <Controller
            name="health.familyHistory.motherDiagnosis"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="familyHistory.motherDiagnosis"
              />
            )}
          />

          <label htmlFor="familyHistory.siblingsDiagnosis">
            Сестры/Братья, если да, напишете диагноз или то, что знаете:
          </label>
          <Controller
            name="health.familyHistory.siblingsDiagnosis"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="familyHistory.siblingsDiagnosis"
              />
            )}
          />

          <label htmlFor="familyHistory.grandparentsDiagnosis">
            Бабушка/Дедушка, если да, напишете диагноз или то, что знаете:
          </label>
          <Controller
            name="health.familyHistory.grandparentsDiagnosis"
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="familyHistory.grandparentsDiagnosis"
              />
            )}
          />
        </>
      )}
      {errors.health?.familyHistory && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default FamilyHistoryFields;
