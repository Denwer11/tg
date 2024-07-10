import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { Surgery } from "../Health.types";
import IlnessFields from "./IlnessFields";

const SurgeryFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const hasSurgery = watch("profile.health.hasSurgery");

  useEffect(() => {
    if (hasSurgery === "нет") {
      setValue("profile.health.surgery", undefined);
    }
  }, [hasSurgery, setValue]);

  const [showSurgeryDetails, setShowSurgeryDetails] = useState(false);

  const [surgeries, setSurgeries] = useState<Surgery[]>([]);

  useEffect(() => {
    if (hasSurgery === "да") {
      setValue("profile.health.surgery", [
        {
          surgeryName: "",
          age: 0,
        },
      ]);
    }
  }, [hasSurgery, setValue]);

  const removeSurgery = (index: number) => {
    setSurgeries(surgeries?.filter((_, i) => i !== index));
  };

  const addSurgery = () => {
    setSurgeries(
      surgeries
        ? [
            ...surgeries,
            {
              surgeryName: "",
              age: 0,
            },
          ]
        : [
            {
              surgeryName: "",
              age: 0,
            },
          ]
    );
  };

  const resetSurgeriesFields = () => {
    setSurgeries([]);
  };

  return (
    <>
      <label htmlFor="hasSurgery">
        Хирургические операции и возраст операции:
      </label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasSurgery"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasSurgery-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowSurgeryDetails(true);
                }}
              />
              <label htmlFor="hasSurgery-yes">Да</label>
              <input
                type="radio"
                id="hasSurgery-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowSurgeryDetails(false);
                  resetSurgeriesFields();
                }}
              />
              <label htmlFor="hasSurgery-no">Нет</label>
            </>
          )}
        />
      </div>
      {showSurgeryDetails && (
        <>
          <label htmlFor="surgery.surgeryName">Хирургические операции:</label>
          {surgeries?.map((_surgery, index) => (
            <div key={index}>
              <label htmlFor={`surgeryName-${index}`}>Пол:</label>
              <Controller
                name={`profile.health.surgery.${index}.surgeryName`}
                control={control}
                render={({ field }) => (
                  <input
                    id={`surgeryName-${index}`}
                    type="text"
                    {...field}
                  ></input>
                )}
              />
              {errors.profile?.health?.surgery?.[index]?.surgeryName && (
                <span>Поле обязательно для заполнения</span>
              )}
              <label htmlFor={`surgery.age-${index}`}>Возраст:</label>
              <Controller
                name={`profile.health.surgery.${index}.age`}
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    id={`surgery.age-${index}`}
                    {...field}
                    className="input-age"
                  />
                )}
              />
              <span className="span-age"> лет</span>
              {errors.profile?.health?.surgery?.[index]?.age && (
                <span>Поле обязательно для заполнения</span>
              )}
              <button
                className="btn-delete"
                type="button"
                onClick={() => removeSurgery(index)}
              >
                Удалить
              </button>
            </div>
          ))}
          <button type="button" onClick={addSurgery}>
            Добавить операцию
          </button>
          {errors.profile?.parentFamily?.siblings?.siblingsInfo && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      <IlnessFields />
    </>
  );
};

export default SurgeryFields;
