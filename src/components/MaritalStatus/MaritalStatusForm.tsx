/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import PartnerFields from "./Partner/PartnerFields";
import { UserData } from "../../pages/UserProfileForm";
import RelationshipsFields from "./Relationships/RelationshipsFields";
import { MaritalStatusOptions } from "./Options";
import ChildrenFields from "./Children/ChildrenFields";
import LivingConditionsFields from "./LivingConditions/LivingConditionsFields";

const MaritalStatusForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<UserData>();

  const [showPartnerFields, setShowPartnerFields] = useState(false);
  const [showOtherMaritalStatus, setShowOtherMaritalStatus] = useState(false);

  const handleMaritalStatusChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setShowPartnerFields(selectedValue !== "живу без партнера");
    setShowOtherMaritalStatus(selectedValue === "иное");
    setValue("profile.currentMaritalStatus.maritalStatus", selectedValue);
  };

  const maritalStatusToPartner = watch(
    "profile.currentMaritalStatus.maritalStatus"
  );

  useEffect(() => {
    if (maritalStatusToPartner === "живу без партнера") {
      setValue("profile.currentMaritalStatus.partnerAge", undefined);
      setValue("profile.currentMaritalStatus.partnerOccupation", undefined);
      setValue("profile.currentMaritalStatus.otherOccupation", undefined);
      setValue("profile.currentMaritalStatus.partnerProfession", undefined);
    }
  }, [maritalStatusToPartner, setValue]);

  return (
    <>
      <h3>Актуальное семейное положение</h3>
      <label htmlFor="maritalStatus">Семейное положение: </label>
      <Controller
        name="profile.currentMaritalStatus.maritalStatus"
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
          name="profile.currentMaritalStatus.otherMaritalStatus"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="text" id="otherMaritalStatus" {...field} />
          )}
        />
      )}
      {errors.profile?.currentMaritalStatus?.maritalStatus && (
        <span>Поле обязательно для заполнения</span>
      )}

      {showPartnerFields && <PartnerFields />}
      <RelationshipsFields />
      <ChildrenFields />
      <LivingConditionsFields />
    </>
  );
};

export default MaritalStatusForm;
