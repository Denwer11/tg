import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { feelingHelplessFrequencyOptions } from "../Options";
import DietFields from "./DietFields";
import MedicatiosFields from "./MedicatiosFields";

const DietAndMedicationsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<UserData>();

  const [
    showFeelingHelplessFrequencyCustomField,
    setShowFeelingHelplessFrequencyCustomField,
  ] = useState(false);

  const handleOptionChangeFeelingHelplessFrequency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowFeelingHelplessFrequencyCustomField(
      event.target.value === "ваш вариант"
    );
    setValue("profile.health.feelingHelplessFrequency", event.target.value);
  };

  return (
    <>
      <label htmlFor="feelingHelplessFrequency">
        Как часто вы испытываете состояние бессилия беспомощности,
        безысходности:
      </label>
      <Controller
        name="profile.health.feelingHelplessFrequency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="feelingHelplessFrequency"
            {...field}
            onChange={handleOptionChangeFeelingHelplessFrequency}
          >
            {feelingHelplessFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showFeelingHelplessFrequencyCustomField && (
        <div>
          <label htmlFor="feelingHelplessFrequency">Ваш вариант:</label>
          <Controller
            name="profile.health.feelingHelplessFrequency"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="feelingHelplessFrequency.custom"
              />
            )}
          />
        </div>
      )}
      {errors.profile?.health?.feelingHelplessFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}

      <DietFields />
      <MedicatiosFields />
    </>
  );
};

export default DietAndMedicationsFields;
