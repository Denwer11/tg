import React, { useEffect, useState } from "react";
import { FormData } from "../../../pages/Form";
import { Controller, useFormContext } from "react-hook-form";
import { ilnessOptions, scoreOptions } from '../Options';

const IlnessFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const [showIlnessDetails, setShowIlnessDetails] = useState(false);

  const hasIlness = watch("health.hasIlness");

  useEffect(() => {
    if (hasIlness === "нет") {
      setValue("health.ilness", undefined);
    }
  }, [hasIlness, setValue]);

  return (
    <>
      <label htmlFor="hasIlness">Хронические болезни:</label>
      <div className="radio-container">
        <Controller
          name="health.hasIlness"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasIlness-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowIlnessDetails(true);
                }}
              />
              <label htmlFor="hasIlness-yes">Да</label>
              <input
                type="radio"
                id="hasIlness-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowIlnessDetails(false);
                }}
              />
              <label htmlFor="hasIlness-no">Нет</label>
            </>
          )}
        />
      </div>
      {showIlnessDetails && (
        <>
          <div className="checkbox-container">
            <Controller
              name="health.ilness"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <div>
                  {ilnessOptions.map((option, index) => (
                    <div key={index}>
                      <input
                        id={`ilness.name-${index}`}
                        type="checkbox"
                        {...field}
                        value={option}
                        checked={
                          Array.isArray(field.value) &&
                          field.value.some(
                            (item) =>
                              (typeof item === "string" ? item : item.name) ===
                              option
                          )
                        }
                        onChange={() => {
                          const updatedIlness = Array.isArray(field.value)
                            ? field.value.map((item) => ({ ...item }))
                            : [];

                          const existingIndex = updatedIlness.findIndex(
                            (item) =>
                              typeof item === "string"
                                ? item === option
                                : item.name === option
                          );

                          if (existingIndex !== -1) {
                            updatedIlness.splice(existingIndex, 1);
                          } else {
                            updatedIlness.push({
                              name: option,
                              score: { value: 0, label: "Никогда" },
                            });
                          }

                          const filteredIlness = updatedIlness.filter(
                            (ilness) =>
                              ilness.score && ilness.score.value !== undefined
                          );

                          field.onChange(filteredIlness);
                        }}
                      />
                      <label htmlFor={`ilness.name-${index}`}>{option}</label>
                      {Array.isArray(field.value) &&
                        field.value.some((item) =>
                          typeof item === "string"
                            ? item === option
                            : item.name === option
                        ) && (
                          <select
                            value={
                              field.value.find((item) => item.name === option)
                                ?.score.value || 0
                            }
                            onChange={(e) => {
                              const selectedValue = parseInt(
                                e.target.value,
                                10
                              );

                              const selectedLabel =
                                scoreOptions.find(
                                  (option) => option.value === selectedValue
                                )?.label || "";

                              const updatedValue = field.value?.map((item) => {
                                if (item.name === option) {
                                  return {
                                    ...item,
                                    score: {
                                      value: selectedValue,
                                      label: selectedLabel,
                                    },
                                  };
                                }
                                return item;
                              });

                              field.onChange(updatedValue);
                            }}
                          >
                            {scoreOptions.map((option) => (
                              <option key={option.value} value={option.value}>
                                {option.label}
                              </option>
                            ))}
                          </select>
                        )}
                    </div>
                  ))}
                </div>
              )}
            />
          </div>
          {errors.health?.ilness && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default IlnessFields;
