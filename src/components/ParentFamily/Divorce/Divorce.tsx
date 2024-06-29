import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { divorceWhoLivedWithOptions } from "../Options";

const Divorce: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<FormData>();

  const [showDivorceDetails, setShowDivorceDetails] = useState(false);
  const [showDivorceCustomField, setShowDivorceCustomField] = useState(false);

  const handleOptionChangeDivorce = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowDivorceCustomField(event.target.value === "ваш вариант");
    setValue("parentFamily.divorce.whoLivedWith", event.target.value);
  };

  const hasDivorce = watch("parentFamily.hasDivorce");

  useEffect(() => {
    if (hasDivorce === "да") {
      setValue("parentFamily.divorce", {
        ageAtDivorce: 0,
        whoLivedWith: "отцом",
        emotionalState: 1,
      });
    } else {
      setValue("parentFamily.divorce", undefined);
    }
  }, [hasDivorce, setValue]);

  return (
    <>
      <label htmlFor="hasDivorce">Разводы родителей</label>
      <div className="radio-container">
        <Controller
          name="parentFamily.hasDivorce"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasDivorce-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowDivorceDetails(true);
                }}
              />
              <label htmlFor="hasDivorce-yes">Да</label>
              <input
                type="radio"
                id="hasDivorce-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowDivorceDetails(false);
                }}
              />
              <label htmlFor="hasDivorce-no">Нет</label>
            </>
          )}
        />
      </div>
      {showDivorceDetails && (
        <>
          <label htmlFor="divorce.ageAtDivorce">
            Ваш возраст на момент развода
          </label>
          <Controller
            name="parentFamily.divorce.ageAtDivorce"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                id="divorce.ageAtDivorce"
                type="number"
                {...field}
                className="input-age"
              />
            )}
          />
          {errors.parentFamily?.divorce?.ageAtDivorce && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="divorce.whoLivedWith">После развода вы жили с:</label>
          <Controller
            name="parentFamily.divorce.whoLivedWith"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                id="divorce.whoLivedWith"
                {...field}
                onChange={handleOptionChangeDivorce}
              >
                {divorceWhoLivedWithOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showDivorceCustomField && (
            <div>
              <label htmlFor="divorce.whoLivedWith.custom">Ваш вариант:</label>
              <Controller
                name="parentFamily.divorce.whoLivedWith"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input
                    type="text"
                    {...field}
                    id="divorce.whoLivedWith.custom"
                  />
                )}
              />
            </div>
          )}
          {errors.parentFamily?.divorce?.whoLivedWith && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="divorce.emotionalState">
            Оцените свое эмоциональное состояние при разводе родителей по шкале
            от 1 до 10, где 1 это «нейтрально, спокойно», а 10 «максимально
            болезненно»
          </label>
          <Controller
            name="parentFamily.divorce.emotionalState"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select id="divorce.emotionalState" {...field}>
                {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                  <option key={number} value={number}>
                    {number}
                  </option>
                ))}
              </select>
            )}
          />
        </>
      )}
    </>
  );
};

export default Divorce;
