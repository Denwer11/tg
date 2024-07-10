import React, { useEffect, useState } from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";
import { copingWithLossOptions, whoDiedOptions } from "../Options";

const DeathsOfRelativesFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<UserData>();

  const [showDeathsDetails, setShowDeathsDetails] = useState(false);
  const [showCopingWithLossCustomField, setShowCopingWithLossCustomField] =
    useState(false);

  const handleOptionChangeCopingWithLoss = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowCopingWithLossCustomField(event.target.value === "ваш вариант");
    setValue("profile.parentFamily.deaths.copingWithLoss", event.target.value);
  };

  const hasDeaths = watch("profile.parentFamily.hasDeaths");

  useEffect(() => {
    if (hasDeaths === "нет") {
      setValue("profile.parentFamily.deaths", undefined);
    }
  }, [hasDeaths, setValue]);

  return (
    <>
      <label htmlFor="hasDeaths">Смерти родителей/братьев/сестер:</label>
      <div className="radio-container">
        <Controller
          name="profile.parentFamily.hasDeaths"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasDeaths-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowDeathsDetails(true);
                }}
              />
              <label htmlFor="hasDeaths-yes">Да</label>
              <input
                type="radio"
                id="hasDeaths-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowDeathsDetails(false);
                }}
              />
              <label htmlFor="hasDeaths-no">Нет</label>
            </>
          )}
        />
      </div>

      {showDeathsDetails && (
        <>
          <label htmlFor="deaths.whoDied">Выбор</label>
          <Controller
            name="profile.parentFamily.deaths.whoDied"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select id="deaths.whoDied" {...field}>
                {whoDiedOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.profile?.parentFamily?.deaths?.whoDied && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="deaths.myAge">Умер, когда мне было</label>
          <div className="form-age">
            <Controller
              name="profile.parentFamily.deaths.myAge"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="deaths.myAge"
                  type="number"
                  {...field}
                  className="input-age"
                />
              )}
            />
            <span className="span-age"> лет</span>
          </div>
          {errors.profile?.parentFamily?.deaths?.myAge && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="deaths.copingWithLoss">
            Как вы справлялись с потерей близкого человека?
          </label>
          <Controller
            name="profile.parentFamily.deaths.copingWithLoss"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                id="deaths.copingWithLoss"
                {...field}
                onChange={handleOptionChangeCopingWithLoss}
              >
                {copingWithLossOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />

          {showCopingWithLossCustomField && (
            <div>
              <label htmlFor="deaths.copingWithLoss.custom">Ваш вариант:</label>
              <Controller
                name="profile.parentFamily.deaths.copingWithLoss"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    id="deaths.copingWithLoss.custom"
                  />
                )}
              />
            </div>
          )}
        </>
      )}
      {errors.profile?.parentFamily?.deaths?.copingWithLoss && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default DeathsOfRelativesFields;
