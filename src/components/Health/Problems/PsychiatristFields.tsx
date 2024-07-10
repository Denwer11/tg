import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";

const PsychiatristFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showPsychiatricHelpDetails, setShowPsychiatricHelpDetails] =
    useState(false);

  const hasPsychiatricHelp = watch("profile.health.hasPsychiatricHelp");

  useEffect(() => {
    if (hasPsychiatricHelp === "нет") {
      setValue("profile.health.psychiatricHelp", undefined);
    }
  }, [hasPsychiatricHelp, setValue]);

  return (
    <>
      <label htmlFor="hasPsychiatricHelp">
        Был ли у Вас случай, когда требовалась помощь психиатра?
      </label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasPsychiatricHelp"
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
            name="profile.health.psychiatricHelp.psychiatricHelpReason"
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
          {errors.profile?.health?.psychiatricHelp?.psychiatricHelpReason && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="psychiatricHelp.psychiatricHelpFrequency">
            Сколько раз или как часто:
          </label>
          <div className="form-age">
            <Controller
              name="profile.health.psychiatricHelp.psychiatricHelpFrequency"
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
          {errors.profile?.health?.psychiatricHelp?.psychiatricHelpReason && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="psychiatricHelp.psychiatricHelpAge">Возраст:</label>
          <div className="form-age">
            <Controller
              name="profile.health.psychiatricHelp.psychiatricHelpAge"
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
          {errors.profile?.health?.psychiatricHelp?.psychiatricHelpAge && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="psychiatricHelp.psychiatricDiagnosis">
            Ставились ли вам психиатрические диагнозы и какие?
          </label>
          <Controller
            name="profile.health.psychiatricHelp.psychiatricDiagnosis"
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
          {errors.profile?.health?.psychiatricHelp?.psychiatricDiagnosis && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      {errors.profile?.health?.psychiatricHelp && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default PsychiatristFields;
