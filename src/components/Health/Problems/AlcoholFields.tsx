import React, { useEffect, useState } from "react";
import { FormData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";
import { alcoholConsumptionDynamicOptions, alcoholConsumptionWeeklyOptions } from '../Options';

const AlcoholFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const [showAlcoholDetails, setShowAlcoholDetails] = useState(false);

  const [
    showAlcoholConsumptionDynamicCustomField,
    setShowAlcoholConsumptionDynamicCustomField,
  ] = useState(false);

  const handleOptionChangeAlcoholConsumptionDynamic = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowAlcoholConsumptionDynamicCustomField(
      event.target.value === "свой вариант"
    );
    setValue(
      "health.alcoholConsumption.alcoholConsumptionDynamic",
      event.target.value
    );
  };

  const hasAlcoholConsumption = watch("health.hasAlcoholConsumption");

  useEffect(() => {
    if (hasAlcoholConsumption === "нет") {
      setValue("health.alcoholConsumption", undefined);
    }
  }, [hasAlcoholConsumption, setValue]);

  return (
    <>
      <label htmlFor="hasAlcoholConsumption">Употребление алкоголя</label>
      <div className="radio-container">
        <Controller
          name="health.hasAlcoholConsumption"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasAlcoholConsumption-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowAlcoholDetails(true);
                }}
              />
              <label htmlFor="hasAlcoholConsumption-yes">Да</label>
              <input
                type="radio"
                id="hasAlcoholConsumption-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowAlcoholDetails(false);
                }}
              />
              <label htmlFor="hasAlcoholConsumption-no">Нет</label>
            </>
          )}
        />
      </div>
      {showAlcoholDetails && (
        <>
          <label htmlFor="alcoholConsumption.alcoholConsumptionYears">
            Сколько лет вы пьете алкоголь?
          </label>
          <div className="form-age">
            <Controller
              name="health.alcoholConsumption.alcoholConsumptionYears"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  id="alcoholConsumption.alcoholConsumptionYears"
                  className="input-age"
                />
              )}
            />
            <span className="span-age"></span>
          </div>
          {errors.health?.alcoholConsumption?.alcoholConsumptionYears && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="alcoholConsumption.alcoholConsumptionStartAge">
            Со скольки лет вы начали пить алкоголь?
          </label>
          <div className="form-age">
            <Controller
              name="health.alcoholConsumption.alcoholConsumptionStartAge"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  id="alcoholConsumption.alcoholConsumptionStartAge"
                  className="input-age"
                />
              )}
            />
          </div>
          {errors.health?.alcoholConsumption?.alcoholConsumptionStartAge && (
            <span>Поле обязательно для заполнения</span>
          )}

          <div>
            Потребление алкоголя измеряется в условных единицах — стандартной
            дозе / порции алкоголя, равной 10 г чистого спирта (25 граммам 40%-й
            водки, 100 граммам 9-11%-го сухого вина или 200 граммам 3–5%-го
            пива).
          </div>
          <label htmlFor="alcoholConsumption.alcoholConsumptionWeekly">
            Сколько порций в неделю в среднем вы принимаете:
          </label>
          <Controller
            name="health.alcoholConsumption.alcoholConsumptionWeekly"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                {...field}
                id="alcoholConsumption.alcoholConsumptionWeekly"
              >
                {alcoholConsumptionWeeklyOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.health?.alcoholConsumption?.alcoholConsumptionWeekly && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="alcoholConsumption.alcoholConsumptionDynamic">
            За последние 5 лет какая динамика количества порций:
          </label>
          <Controller
            name="health.alcoholConsumption.alcoholConsumptionDynamic"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                {...field}
                id="alcoholConsumption.alcoholConsumptionDynamic"
                onChange={handleOptionChangeAlcoholConsumptionDynamic}
              >
                {alcoholConsumptionDynamicOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showAlcoholConsumptionDynamicCustomField && (
            <>
              <label htmlFor="alcoholConsumption.alcoholConsumptionDynamic.custom">
                Ваш вариант:
              </label>
              <Controller
                name="health.alcoholConsumption.alcoholConsumptionDynamic"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    id="alcoholConsumption.alcoholConsumptionDynamic.custom"
                  />
                )}
              />
              {errors.health?.alcoholConsumption?.alcoholConsumptionDynamic && (
                <span>Поле обязательно для заполнения</span>
              )}
            </>
          )}

          {errors.health?.alcoholConsumption?.alcoholConsumptionDynamic && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      {errors.health?.alcoholConsumption && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default AlcoholFields;
