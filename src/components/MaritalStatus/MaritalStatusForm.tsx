/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PartnerFields from "./PartnerFields/PartnerFields";
import { FormData } from "../../pages/Form";

const MaritalStatusForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<FormData>();

  const [showPartnerFields, setShowPartnerFields] = useState(false);
  const [showOtherMaritalStatus, setShowOtherMaritalStatus] = useState(false);

  const handleMaritalStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setShowPartnerFields(selectedValue !== "живу без партнера");
    setShowOtherMaritalStatus(selectedValue === "иное");
    setValue("currentMaritalStatus.maritalStatus", selectedValue);
  };

  const maritalStatusToPartner = watch("currentMaritalStatus.maritalStatus");

  useEffect(() => {
    if (maritalStatusToPartner === "живу без партнера") {
      setValue("currentMaritalStatus.partnerAge", undefined);
      setValue("currentMaritalStatus.partnerOccupation", undefined);
      setValue("currentMaritalStatus.otherOccupation", undefined);
      setValue("currentMaritalStatus.partnerProfession", undefined);
    }
  }, [maritalStatusToPartner, setValue]);
  
  return (
    <>
      <h4>Актуальное семейное положение:</h4>
      <label htmlFor="maritalStatus">Семейное положение: </label>
      <Controller
        name="currentMaritalStatus.maritalStatus"
        control={control}
        render={({ field }) => (
          <select
            id="maritalStatus"
            {...field}
            onChange={handleMaritalStatusChange}
          >
            <option value="живу без партнера">Живу без партнера</option>
            <option value="в гражданском браке">В гражданском браке</option>
            <option value="в браке, но вместе не живем">
              В браке, но вместе не живем
            </option>
            <option value="в разводе">В разводе</option>
            <option value="вдова(ец)">Вдова(ец)</option>
            <option value="в браке">В браке</option>
            <option value="иное">Иное</option>
          </select>
        )}
      />
      {showOtherMaritalStatus && (
        <Controller
          name="currentMaritalStatus.otherMaritalStatus"
          control={control}
          render={({ field }) => (
            <input type="text" id="otherMaritalStatus" {...field} />
          )}
        />
      )}

      {errors.currentMaritalStatus?.maritalStatus && (
        <span>Поле обязательно для заполнения</span>
      )}

      {showPartnerFields && <PartnerFields />}
    </>
  );
};

export default MaritalStatusForm;
