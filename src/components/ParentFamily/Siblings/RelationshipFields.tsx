import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  siblingsChildhoodRelationshipOptions,
  siblingsCurrentRelationshipOptions,
} from "../Options";
import { UserData } from "../../../pages/UserProfileForm";

const RelationshipFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<UserData>();

  const [
    showChildhoodRelationshipCustomField,
    setShowChildhoodRelationshipCustomField,
  ] = useState(false);
  const [
    showCurrentRelationshipCustomField,
    setShowCurrentRelationshipCustomField,
  ] = useState(false);

  const handleOptionChangeChildhoodRelationship = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowChildhoodRelationshipCustomField(
      event.target.value === "ваш вариант"
    );
    setValue(
      "profile.parentFamily.siblings.childhoodRelationship",
      event.target.value
    );
  };
  const handleOptionChangeCurrentRelationship = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowCurrentRelationshipCustomField(event.target.value === "ваш вариант");
    setValue(
      "profile.parentFamily.siblings.currentRelationship",
      event.target.value
    );
  };

  return (
    <>
      <label htmlFor="siblings.childhoodRelationship">В детстве я был:</label>
      <Controller
        name="profile.parentFamily.siblings.childhoodRelationship"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="siblings.childhoodRelationship"
            {...field}
            onChange={handleOptionChangeChildhoodRelationship}
          >
            {siblingsChildhoodRelationshipOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showChildhoodRelationshipCustomField && (
        <div>
          <label htmlFor="siblings.childhoodRelationship.custom">
            Ваш вариант:
          </label>
          <Controller
            name="profile.parentFamily.siblings.childhoodRelationship"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="siblings.childhoodRelationship.custom"
              />
            )}
          />
        </div>
      )}
      {errors.profile?.parentFamily?.siblings?.childhoodRelationship && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="siblings.currentRelationship">
        Как вы оцениваете свои текущие отношения с братьями и сестрами?
      </label>
      <Controller
        name="profile.parentFamily.siblings.currentRelationship"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="siblings.currentRelationship"
            {...field}
            onChange={handleOptionChangeCurrentRelationship}
          >
            {siblingsCurrentRelationshipOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showCurrentRelationshipCustomField && (
        <div>
          <label htmlFor="siblings.childhoodRelationship.custom">
            Ваш вариант:
          </label>
          <Controller
            name="profile.parentFamily.siblings.currentRelationship"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="siblings.CurrentRelationship.custom"
              />
            )}
          />
        </div>
      )}
      {errors.profile?.parentFamily?.siblings?.currentRelationship && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default RelationshipFields;
