import React, { useEffect, useState } from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";
import { otherDrugsDynamicOptions } from '../Options';

const DrugsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showOtherDrugsDetails, setShowOtherDrugsDetails] = useState(false);

  const [
    showOtherDrugsDynamicCustomField,
    setShowOtherDrugsDynamicCustomField,
  ] = useState(false);

  const handleOptionChangeOtherDrugsDynamic = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowOtherDrugsDynamicCustomField(event.target.value === "свой вариант");
    setValue("profile.health.otherDrugs.otherDrugsDynamic", event.target.value);
  };

  const hasOtherDrugs = watch("profile.health.hasOtherDrugs");

  useEffect(() => {
    if (hasOtherDrugs === "нет") {
      setValue("profile.health.otherDrugs", undefined);
    }
  }, [hasOtherDrugs, setValue]);

  return (
    <>
      <label htmlFor="hasOtherDrugs">Другие наркотики и зависимости</label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasOtherDrugs"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasOtherDrugs-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowOtherDrugsDetails(true);
                }}
              />
              <label htmlFor="hasOtherDrugs-yes">Да</label>
              <input
                type="radio"
                id="hasOtherDrugs-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowOtherDrugsDetails(false);
                }}
              />
              <label htmlFor="hasOtherDrugs-no">Нет</label>
            </>
          )}
        />
      </div>
      {showOtherDrugsDetails && (
        <div>
          <label htmlFor="otherDrugs.otherDrugsDetails">
            Другие наркотики (что, когда):
          </label>
          <Controller
            name="profile.health.otherDrugs.otherDrugsDetails"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <input type="text" {...field} id="otherDrugs.otherDrugsDetails" />
            )}
          />

          <label htmlFor="otherDrugs.otherDrugsDynamic">
            За последние 5 лет какая динамика?:
          </label>
          <Controller
            name="profile.health.otherDrugs.otherDrugsDynamic"
            rules={{ required: true }}
            control={control}
            render={({ field }) => (
              <select
                {...field}
                id="otherDrugs.otherDrugsDynamic"
                onChange={handleOptionChangeOtherDrugsDynamic}
              >
                {otherDrugsDynamicOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showOtherDrugsDynamicCustomField && (
            <>
              <label htmlFor="otherDrugs.otherDrugsDynamic.custom">
                Ваш вариант:
              </label>
              <Controller
                name="profile.health.otherDrugs.otherDrugsDynamic"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    id="otherDrugs.otherDrugsDynamic.custom"
                  />
                )}
              />
              {errors.profile?.health?.otherDrugs?.otherDrugsDynamic && (
                <span>Поле обязательно для заполнения</span>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
};

export default DrugsFields;
