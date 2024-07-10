import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { dietRestrictionsOptions } from "../Options";

const DietFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    register,
    watch,
    setValue,
  } = useFormContext<UserData>();

  const hasDietRestrictions = watch("profile.health.hasDietRestrictions");

  useEffect(() => {
    if (hasDietRestrictions === "нет") {
      setValue("profile.health.dietRestrictions", undefined);
    }
  }, [hasDietRestrictions, setValue]);

  const [showDietRestrictionsDetails, setShowDietRestrictionsDetails] =
    useState(false);

  const [showOtherDietRestrictions, setShowOtherDietRestrictions] =
    useState(false);

  return (
    <>
      <label htmlFor="hasDietRestrictions">
        Особенности питания / Ограничения в диете:
      </label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasDietRestrictions"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasDietRestrictions-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowDietRestrictionsDetails(true);
                }}
              />
              <label htmlFor="hasDietRestrictions-yes">Да</label>
              <input
                type="radio"
                id="hasDietRestrictions-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowDietRestrictionsDetails(false);
                }}
              />
              <label htmlFor="hasDietRestrictions-no">Нет</label>
            </>
          )}
        />
      </div>
      {showDietRestrictionsDetails && (
        <>
          <label htmlFor="dietRestrictions">Ограничения в диете:</label>
          <div className="checkbox-container">
            <Controller
              name="profile.health.dietRestrictions"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  {dietRestrictionsOptions.map((option, index) => (
                    <div key={index}>
                      <input
                        id={`dietRestrictions-${index}`}
                        type="checkbox"
                        {...field}
                        value={option}
                        checked={
                          Array.isArray(field.value) &&
                          field.value.includes(option)
                        }
                        onChange={() => {
                          if (
                            Array.isArray(field.value) &&
                            field.value.includes(option)
                          ) {
                            field.onChange(
                              field.value.filter((val) => val !== option)
                            );
                          } else {
                            field.onChange([
                              ...(Array.isArray(field.value)
                                ? field.value
                                : []),
                              option,
                            ]);
                          }
                        }}
                      />
                      <label htmlFor={`dietRestrictions-${index}`}>
                        {option}
                      </label>
                    </div>
                  ))}
                  <div>
                    <input
                      type="checkbox"
                      id="other-dietRestrictions"
                      {...register("profile.health.dietRestrictions")}
                      value="ваш вариант"
                      checked={showOtherDietRestrictions}
                      onChange={() =>
                        setShowOtherDietRestrictions(!showOtherDietRestrictions)
                      }
                    />
                    <label htmlFor="other-dietRestrictions">ваш вариант</label>
                    {showOtherDietRestrictions && (
                      <Controller
                        name="profile.health.dietRestrictions"
                        control={control}
                        rules={{ required: true }}
                        render={({ field }) => (
                          <textarea
                            {...field}
                            id="other-dietRestrictions"
                            className="textarea-other"
                          />
                        )}
                      />
                    )}
                  </div>
                </div>
              )}
            />
          </div>
          {errors.profile?.health?.dietRestrictions && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default DietFields;
