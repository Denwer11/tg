import React, { useEffect, useState } from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";

const LostConsciousnessFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showLostConsciousnessDetails, setShowLostConsciousnessDetails] =
    useState(false);
  const hasLostConsciousness = watch("profile.health.hasLostConsciousness");

  useEffect(() => {
    if (hasLostConsciousness === "нет") {
      setValue("profile.health.lostConsciousness", undefined);
    }
  }, [hasLostConsciousness, setValue]);
  
  return (
    <>
      <label htmlFor="hasLostConsciousness">
        Теряли ли Вы когда-нибудь сознание?
      </label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasLostConsciousness"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasLostConsciousness-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowLostConsciousnessDetails(true);
                }}
              />
              <label htmlFor="hasLostConsciousness-yes">Да</label>
              <input
                type="radio"
                id="hasLostConsciousness-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowLostConsciousnessDetails(false);
                }}
              />
              <label htmlFor="hasLostConsciousness-no">Нет</label>
            </>
          )}
        />
      </div>
      {showLostConsciousnessDetails && (
        <>
          <label htmlFor="lostConsciousness.lostConsciousnessReason">
            Причина потери сознания:
          </label>
          <Controller
            name="profile.health.lostConsciousness.lostConsciousnessReason"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="lostConsciousness.lostConsciousnessReason"
              />
            )}
          />
          {errors.profile?.health?.lostConsciousness
            ?.lostConsciousnessReason && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="lostConsciousness.lostConsciousnessFrequency">
            Сколько раз или как часто:
          </label>
          <div className="form-age">
            <Controller
              name="profile.health.lostConsciousness.lostConsciousnessFrequency"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="lostConsciousness.lostConsciousnessFrequency"
                  type="text"
                  {...field}
                  className="input-age"
                />
              )}
            />
            {errors.profile?.health?.lostConsciousness
              ?.lostConsciousnessFrequency && (
              <span>Поле обязательно для заполнения</span>
            )}
          </div>
          <label htmlFor="lostConsciousness.lostConsciousnessAge">
            Возраст первой потери сознания:
          </label>
          <div className="form-age">
            <Controller
              name="profile.health.lostConsciousness.lostConsciousnessAge"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="lostConsciousness.lostConsciousnessAge"
                  type="number"
                  {...field}
                  className="input-age"
                />
              )}
            />
          </div>
          {errors.profile?.health?.lostConsciousness?.lostConsciousnessAge && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      {errors.profile?.health?.lostConsciousness && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default LostConsciousnessFields;
