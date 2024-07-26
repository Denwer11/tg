import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { useState } from "react";
import { stepmotherRelationshipRatingOptions } from "../Options";

const StepmotherFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<UserData>();

  const [showStepmotherDetails, setShowStepmotherDetails] = useState(false);
  const [showStepmotherCustomField, setShowStepmotherCustomField] =
    useState(false);

  const handleOptionChangeMother = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowStepmotherCustomField(event.target.value === "ваш вариант");
    setValue("profile.parentFamily.stepmother.rating", event.target.value);
  };

  return (
    <>
      <label htmlFor="hasStepmother">Была мачеха</label>
      <div className="radio-container">
        <Controller
          name="profile.parentFamily.hasStepmother"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasStepmother-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowStepmotherDetails(true);
                }}
              />
              <label htmlFor="hasStepmother-yes">Да</label>
              <input
                type="radio"
                id="hasStepmother-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowStepmotherDetails(false);
                }}
              />
              <label htmlFor="hasStepmother-no">Нет</label>
            </>
          )}
        />
      </div>
      {showStepmotherDetails && (
        <>
          <label htmlFor="stepmother.rating">
            Как бы Вы в целом оценили в детстве отношения между Вами и мачехой:
          </label>
          <Controller
            name="profile.parentFamily.stepmother.rating"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                id="stepmother.rating"
                {...field}
                onChange={handleOptionChangeMother}
              >
                {stepmotherRelationshipRatingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showStepmotherCustomField && (
            <div>
              <label htmlFor="stepmother.rating.custom">Ваш вариант:</label>
              <Controller
                name="profile.parentFamily.stepmother.rating"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input type="text" {...field} id="stepmother.rating.custom" />
                )}
              />
            </div>
          )}
          {errors.profile?.parentFamily?.stepmother?.rating && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="stepmother.comment">
            При необходимости Ваш комментарий:
          </label>
          <Controller
            name="profile.parentFamily.stepmother.comment"
            control={control}
            render={({ field }) => (
              <textarea id="stepmother.comment" {...field} />
            )}
          />
          <label htmlFor="stepmother.yearsTogether">
            Сколько лет вы жили вместе с мачехой?
          </label>
          <div className="form-age">
            <Controller
              name="profile.parentFamily.stepmother.yearsTogether"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  id="stepmother.yearsTogether"
                  type="number"
                  {...field}
                  className="input-age"
                />
              )}
            />
            <span className="span-age"> лет</span>
          </div>
          {errors.profile?.parentFamily?.stepmother?.yearsTogether && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default StepmotherFields;
