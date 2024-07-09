import React, { useEffect, useState } from "react";
import { FormData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";

const MedicatiosFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const hasTakingMedication = watch("health.hasTakingMedication");

  useEffect(() => {
    if (hasTakingMedication === "нет") {
      setValue("health.takingMedication", undefined);
    }
  }, [hasTakingMedication, setValue]);

  const [showTakingMedicationDetails, setShowTakingMedicationDetails] =
    useState(false);

  return (
    <>
      <label htmlFor="hasTakingMedication">
        Принимаемые в настоящее время лекарства:
      </label>
      <div className="radio-container">
        <Controller
          name="health.hasTakingMedication"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasTakingMedication-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowTakingMedicationDetails(true);
                }}
              />
              <label htmlFor="hasTakingMedication-yes">Да</label>
              <input
                type="radio"
                id="hasTakingMedication-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowTakingMedicationDetails(false);
                }}
              />
              <label htmlFor="hasTakingMedication-no">Нет</label>
            </>
          )}
        />
      </div>
      {showTakingMedicationDetails && (
        <>
          <label htmlFor="takingMedication">
            Принимаемые в настоящее время лекарства:
          </label>
          <Controller
            name="health.takingMedication"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <textarea
                {...field}
                id="other-takingMedication"
                className="textarea-other"
              />
            )}
          />
          {errors.health?.takingMedication && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default MedicatiosFields;
