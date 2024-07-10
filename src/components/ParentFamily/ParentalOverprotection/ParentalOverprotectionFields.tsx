import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { parentalOverprotectionOptions } from "../Options";

const ParentalOverprotectionFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<UserData>();

  const [
    showParentalOverprotectionDetails,
    setShowParentalOverprotectionDetails,
  ] = useState(false);

  const hasParentalOverprotection = watch(
    "profile.parentFamily.hasParentalOverprotection"
  );

  useEffect(() => {
    if (hasParentalOverprotection === "да") {
      setValue(
        "profile.parentFamily.parentalOverprotection",
        "очень негативно, как сильное давление, ограничение свободы"
      );
    } else {
      setValue("profile.parentFamily.parentalOverprotection", undefined);
    }
  }, [hasParentalOverprotection, setValue]);

  return (
    <>
      <label htmlFor="parentalOverprotection.hasParentalOverprotection">
        В детстве родители меня гиперопекали (принимали решения за меня, активно
        вмешивались в повседневную жизнь, указывали мне что есть, носить, каким
        спортом заниматься, с кем дружить и т.д.).
      </label>
      <div className="radio-container">
        <Controller
          name="profile.parentFamily.hasParentalOverprotection"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasParentalOverprotection-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowParentalOverprotectionDetails(true);
                }}
              />
              <label htmlFor="hasParentalOverprotection-yes">Да</label>
              <input
                type="radio"
                id="hasParentalOverprotection-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowParentalOverprotectionDetails(false);
                }}
              />
              <label htmlFor="hasParentalOverprotection-no">Нет</label>
            </>
          )}
        />
      </div>

      {showParentalOverprotectionDetails && (
        <>
          <label htmlFor="parentalOverprotection">
            Как вы воспринимали гиперопеку родителей?
          </label>
          <Controller
            name="profile.parentFamily.parentalOverprotection"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select id="parentalOverprotection" {...field}>
                {parentalOverprotectionOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.profile?.parentFamily?.parentalOverprotection && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default ParentalOverprotectionFields;
