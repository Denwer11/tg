import React, { useEffect, useState } from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";
import { stepfatherRelationshipRatingOptions } from "../Options";

const StepfatherFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<UserData>();

  const [showStepfatherDetails, setShowStepfatherDetails] = useState(false);
  const [showStepfatherCustomField, setShowStepfatherCustomField] =
    useState(false);

  const handleOptionChangeFather = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowStepfatherCustomField(event.target.value === "ваш вариант");
    setValue("profile.parentFamily.stepfather.rating", event.target.value);
  };

  const hasStepfather = watch("profile.parentFamily.hasStepfather");

  useEffect(() => {
    if (hasStepfather === "да") {
      setValue("profile.parentFamily.stepfather", {
        rating:
          "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
        yearsTogether: 0,
        comment: undefined,
      });
    } else {
      setValue("profile.parentFamily.stepfather", undefined);
    }
  }, [hasStepfather, setValue]);

  return (
    <>
      <label htmlFor="hasStepfather">Был отчим</label>
      <div className="radio-container">
        <Controller
          name="profile.parentFamily.hasStepfather"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasStepfather-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowStepfatherDetails(true);
                }}
              />
              <label htmlFor="hasStepfather-yes">Да</label>
              <input
                type="radio"
                id="hasStepfather-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowStepfatherDetails(false);
                }}
              />
              <label htmlFor="hasStepfather-no">Нет</label>
            </>
          )}
        />
      </div>

      {showStepfatherDetails && (
        <>
          <label htmlFor="stepfather.rating">
            Как бы Вы в целом оценили в детстве отношения между Вами и отчимом
          </label>
          <Controller
            name="profile.parentFamily.stepfather.rating"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                id="stepfather.rating"
                {...field}
                onChange={handleOptionChangeFather}
              >
                {stepfatherRelationshipRatingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showStepfatherCustomField && (
            <div>
              <label htmlFor="stepfather.rating.custom">Ваш вариант:</label>
              <Controller
                name="profile.parentFamily.stepfather.rating"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input type="text" {...field} id="stepfather.rating.custom" />
                )}
              />
            </div>
          )}
          {errors.profile?.parentFamily?.stepfather?.rating && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="stepfather.comment">
            При необходимости Ваш комментарий
          </label>
          <Controller
            name="profile.parentFamily.stepfather.comment"
            control={control}
            render={({ field }) => (
              <textarea id="stepfather.comment" {...field} />
            )}
          />
          <label htmlFor="stepfather.yearsTogether">
            Сколько лет вы жили вместе с отчимом?
          </label>
          <Controller
            name="profile.parentFamily.stepfather.yearsTogether"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                id="stepfather.yearsTogether"
                type="number"
                {...field}
                className="input-age"
              />
            )}
          />
          <span className="span-age"> лет</span>
          {errors.profile?.parentFamily?.stepfather?.yearsTogether && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default StepfatherFields;
