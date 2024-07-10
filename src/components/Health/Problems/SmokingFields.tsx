import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { smokingDynamicOptions } from "../Options";

const SmokingFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showSmokingDetails, setShowSmokingDetails] = useState(false);

  const [showSmokingDynamicCustomField, setShowSmokingDynamicCustomField] =
    useState(false);

  const handleOptionChangeSmokingDynamic = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowSmokingDynamicCustomField(event.target.value === "свой вариант");
    setValue("profile.health.smoking.smokingDynamic", event.target.value);
  };

  const hasSmoking = watch("profile.health.hasSmoking");

  useEffect(() => {
    if (hasSmoking === "нет") {
      setValue("profile.health.smoking", undefined);
    }
  }, [hasSmoking, setValue]);

  return (
    <>
      <label htmlFor="hasSmoking">Курение</label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasSmoking"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasSmoking-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowSmokingDetails(true);
                }}
              />
              <label htmlFor="hasSmoking-yes">Да</label>
              <input
                type="radio"
                id="hasSmoking-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowSmokingDetails(false);
                }}
              />
              <label htmlFor="hasSmoking-no">Нет</label>
            </>
          )}
        />
      </div>
      {showSmokingDetails && (
        <>
          <label htmlFor="smoking.smokingQuantity">
            Сколько сигарет в день:
          </label>
          <div className="form-age">
            <Controller
              name="profile.health.smoking.smokingQuantity"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="number"
                  {...field}
                  id="smoking.smokingQuantity"
                  className="input-age"
                />
              )}
            />
          </div>
          {errors.profile?.health?.smoking?.smokingQuantity && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="smoking.smokingDynamic">
            За последние 5 лет какая динамика количества сигарет:
          </label>
          <Controller
            name="profile.health.smoking.smokingDynamic"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                {...field}
                id="smoking.smokingDynamic"
                onChange={handleOptionChangeSmokingDynamic}
              >
                {smokingDynamicOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showSmokingDynamicCustomField && (
            <>
              <label htmlFor="smoking.smokingDynamic.custom">
                Ваш вариант:
              </label>
              <Controller
                name="profile.health.smoking.smokingDynamic"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    id="smoking.smokingDynamic.custom"
                  />
                )}
              />
              {errors.profile?.health?.smoking?.smokingDynamic && (
                <span>Поле обязательно для заполнения</span>
              )}
            </>
          )}
          {errors.profile?.health?.smoking?.smokingDynamic && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      {errors.profile?.health?.smoking && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default SmokingFields;
