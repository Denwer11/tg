/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  useFormContext,
} from "react-hook-form";
import { useState } from "react";

interface PartnerFieldsProps {
  control: Control<any>;
  errors: FieldErrors<any>;
}

const PartnerFields: React.FC<PartnerFieldsProps> = ({
  control,
  errors,
}) => {
  const [showOtherOccupation, setShowOtherOccupation] = useState(false);

  const handlePartnerOccupationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setShowOtherOccupation(selectedValue === "свой вариант");
  };

  const { watch } = useFormContext();
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
      {errors.partnerAge && <span>Поле обязательно для заполнения</span>}

      <label htmlFor="partnerOccupation">Сфера деятельности партнера:</label>
      <Controller
        name="currentMaritalStatus.partnerOccupation"
        control={control}
        rules={{ required: true }}
        defaultValue={
          maritalStatusToPartner !== "живу без партнера" ? "" : undefined
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
      {errors.partnerOccupation && <span>Поле обязательно для заполнения</span>}

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
      {errors.partnerProfession && <span>Поле обязательно для заполнения</span>}
    </>
  );
};

export default PartnerFields;
