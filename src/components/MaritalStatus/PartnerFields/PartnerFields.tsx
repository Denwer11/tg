/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { useState } from 'react';

const PartnerFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const [showOtherOccupation, setShowOtherOccupation] = useState(false);

  const handlePartnerOccupationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setShowOtherOccupation(selectedValue === "свой вариант");
    setValue("currentMaritalStatus.partnerOccupation", selectedValue);
  };

  const maritalStatusToPartner = watch("currentMaritalStatus.maritalStatus");

  return (
    <>
      <label htmlFor="partnerAge">Возраст партнера:</label>
      <Controller
        name="currentMaritalStatus.partnerAge"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="number" id="partnerAge" {...field} />
        )}
      />

      {errors.currentMaritalStatus?.partnerAge && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="partnerOccupation">Сфера деятельности партнера:</label>
      <Controller
        name="currentMaritalStatus.partnerOccupation"
        control={control}
        rules={{ required: true }}
        defaultValue={
          maritalStatusToPartner === "живу без партнера"
            ? undefined
            : "не работает"
        }
        render={({ field }) => (
          <select
            id="partnerOccupation"
            {...field}
            onChange={handlePartnerOccupationChange}
          >
            <option value="не работает">Не работает</option>
            <option value="учится">Учится</option>
            <option value="работает">Работает</option>
            <option value="свой вариант">Свой вариант</option>
          </select>
        )}
      />
      {errors.currentMaritalStatus?.partnerOccupation && (
        <span>Поле обязательно для заполнения</span>
      )}

      {showOtherOccupation && (
        <Controller
          name="currentMaritalStatus.otherOccupation"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="text" id="otherOccupation" {...field} />
          )}
        />
      )}

      <Controller
        name="currentMaritalStatus.partnerProfession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" id="partnerProfession" {...field} />
        )}
      />
      {errors.currentMaritalStatus?.partnerProfession && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default PartnerFields;
