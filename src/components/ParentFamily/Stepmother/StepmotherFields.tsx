import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { useState } from "react";
import { stepmotherRelationshipRatingOptions } from "../options";

const StepmotherFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<FormData>();

  const [showStepmotherDetails, setShowStepmotherDetails] = useState(false);
  const [showStepmotherCustomField, setShowStepmotherCustomField] =
    useState(false);

  const handleOptionChangeMother = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowStepmotherCustomField(event.target.value === "ваш вариант");
    setValue("parentFamily.stepmother.rating", event.target.value);
  };

  return (
    <>
      <label htmlFor="hasStepmother">Была мачеха</label>
      <div className="radio-container">
        <Controller
          name="parentFamily.hasStepmother"
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
            Как бы Вы в целом оценили в детстве отношения между Вами и мачехой
          </label>
          <Controller
            name="parentFamily.stepmother.rating"
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
                name="parentFamily.stepmother.rating"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input type="text" {...field} id="stepmother.rating.custom" />
                )}
              />
            </div>
          )}
          {errors.parentFamily?.stepmother?.rating && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="stepmother.comment">
            При необходимости Ваш комментарий
          </label>
          <Controller
            name="parentFamily.stepmother.comment"
            control={control}
            render={({ field }) => (
              <textarea id="stepmother.comment" {...field} />
            )}
          />
          <label htmlFor="stepmother.yearsTogether">
            Сколько лет вы жили вместе с мачехой?
          </label>
          <Controller
            name="parentFamily.stepmother.yearsTogether"
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
          {errors.parentFamily?.stepmother?.yearsTogether && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default StepmotherFields;
