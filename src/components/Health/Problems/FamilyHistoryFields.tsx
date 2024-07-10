import React, { useEffect, useState } from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";

const FamilyHistoryFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showFamilyHistoryDetails, setShowFamilyHistoryDetails] =
    useState(false);

  const hasFamilyHistory = watch("profile.health.hasFamilyHistory");

  useEffect(() => {
    if (hasFamilyHistory === "нет") {
      setValue("profile.health.familyHistory", undefined);
    }
  }, [hasFamilyHistory, setValue]);

  return (
    <>
      <label htmlFor="hasFamilyHistory">
        Хронические болезни и психиатрические расстройства у ближайших членов
        семьи:
      </label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasFamilyHistory"
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
              <label htmlFor="hasFamilyHistory-no">Нет</label>
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
            name="profile.health.familyHistory.fatherDiagnosis"
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
            name="profile.health.familyHistory.motherDiagnosis"
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
            name="profile.health.familyHistory.siblingsDiagnosis"
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
            name="profile.health.familyHistory.grandparentsDiagnosis"
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
      {errors.profile?.health?.familyHistory && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default FamilyHistoryFields;
