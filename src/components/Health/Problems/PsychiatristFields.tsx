import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";

const PsychiatristFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const [showPsychiatricHelpDetails, setShowPsychiatricHelpDetails] =
    useState(false);

  const hasPsychiatricHelp = watch("health.hasPsychiatricHelp");

  useEffect(() => {
    if (hasPsychiatricHelp === "нет") {
      setValue("health.psychiatricHelp", undefined);
    }
  }, [hasPsychiatricHelp, setValue]);

  return (
    <>
      <label htmlFor="hasPsychiatricHelp">
        Был ли у Вас случай, когда требовалась помощь психиатра?
      </label>
      <div className="radio-container">
        <Controller
          name="health.hasPsychiatricHelp"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasPsychiatricHelp-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowPsychiatricHelpDetails(true);
                }}
              />
              <label htmlFor="hasPsychiatricHelp-yes">Да</label>
              <input
                type="radio"
                id="hasPsychiatricHelp-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowPsychiatricHelpDetails(false);
                }}
              />
              <label htmlFor="hasPsychiatricHelp-no">Нет</label>
            </>
          )}
        />
      </div>
      {showPsychiatricHelpDetails && (
        <>
          <label htmlFor="psychiatricHelp.psychiatricHelpReason">
            Причина оказания помощи:
          </label>
          <Controller
            name="health.psychiatricHelp.psychiatricHelpReason"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="psychiatricHelp.psychiatricHelpReason"
              />
            )}
          />
          {errors.health?.psychiatricHelp?.psychiatricHelpReason && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="psychiatricHelp.psychiatricHelpFrequency">
            Сколько раз или как часто:
          </label>
          <div className="form-age">
            <Controller
              name="health.psychiatricHelp.psychiatricHelpFrequency"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="text"
                  {...field}
                  id="psychiatricHelp.psychiatricHelpFrequency"
                  className="input-age"
                />
              )}
            />
          </div>
          {errors.health?.psychiatricHelp?.psychiatricHelpReason && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="psychiatricHelp.psychiatricHelpAge">Возраст:</label>
          <div className="form-age">
            <Controller
              name="health.psychiatricHelp.psychiatricHelpAge"
              control={control}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  id="psychiatricHelp.psychiatricHelpAge"
                  className="input-age"
                />
              )}
            />
          </div>
          {errors.health?.psychiatricHelp?.psychiatricHelpAge && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="psychiatricHelp.psychiatricDiagnosis">
            Ставились ли вам психиатрические диагнозы и какие?
          </label>
          <Controller
            name="health.psychiatricHelp.psychiatricDiagnosis"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="psychiatricHelp.psychiatricDiagnosis"
              />
            )}
          />
          {errors.health?.psychiatricHelp?.psychiatricDiagnosis && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      {errors.health?.psychiatricHelp && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default PsychiatristFields;
