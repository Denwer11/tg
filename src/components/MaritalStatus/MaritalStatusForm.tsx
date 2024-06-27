/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PartnerFields from "./PartnerFields/PartnerFields";
import { FormData } from "../../pages/Form";
import RelationshipsFields from "./RelationshipsFields/RelationshipsFields";
import { MaritalStatusOptions } from './Options';

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
      <h3>Актуальное семейное положение</h3>
      <label htmlFor="maritalStatus">Семейное положение: </label>
      <Controller
        name="currentMaritalStatus.maritalStatus"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="maritalStatus"
            {...field}
            onChange={handleMaritalStatusChange}
          >
            {MaritalStatusOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showOtherMaritalStatus && (
        <Controller
          name="currentMaritalStatus.otherMaritalStatus"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="text" id="otherMaritalStatus" {...field} />
          )}
        />
      )}
      {errors.currentMaritalStatus?.maritalStatus && (
        <span>Поле обязательно для заполнения</span>
      )}
      {showPartnerFields && <PartnerFields />}

      <RelationshipsFields />
    </>
  );
};

export default MaritalStatusForm;
