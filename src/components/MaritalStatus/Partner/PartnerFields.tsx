/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { useState } from 'react';
import { PartnerOccupationOptions } from '../Options';

const PartnerFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showOtherOccupation, setShowOtherOccupation] = useState(false);

  const handlePartnerOccupationChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setShowOtherOccupation(selectedValue === "свой вариант");
    setValue("profile.currentMaritalStatus.partnerOccupation", selectedValue);
  };

  const maritalStatusToPartner = watch(
    "profile.currentMaritalStatus.maritalStatus"
  );

  return (
    <>
      <label htmlFor="partnerAge">Возраст партнера:</label>
      <div className="form-age">
        <Controller
          name="profile.currentMaritalStatus.partnerAge"
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
      {errors.profile?.currentMaritalStatus?.partnerAge && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="partnerOccupation">Сфера деятельности партнера:</label>
      <Controller
        name="profile.currentMaritalStatus.partnerOccupation"
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
      {errors.profile?.currentMaritalStatus?.partnerOccupation && (
        <span>Поле обязательно для заполнения</span>
      )}

      {showOtherOccupation && (
        <Controller
          name="profile.currentMaritalStatus.otherOccupation"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="text" id="otherOccupation" {...field} />
          )}
        />
      )}

      <label htmlFor="partnerProfession">Профессия партнера:</label>
      <Controller
        name="profile.currentMaritalStatus.partnerProfession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input type="text" id="partnerProfession" {...field} />
        )}
      />
      {errors.profile?.currentMaritalStatus?.partnerProfession && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default PartnerFields;
