/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { useState } from 'react';
import { PartnerOccupationOptions } from '../options';

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
      <div className="form-age">
        <Controller
          name="currentMaritalStatus.partnerAge"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type="number"
              id="partnerAge"
              {...field}
              className="input-age"
            />
          )}
        />
        <span className="span-age"> лет</span>
      </div>
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
            {PartnerOccupationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
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
