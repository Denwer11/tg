import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";

const OtherFields: React.FC = () => {
  const { control } = useFormContext<UserData>();

  return (
    <>
      <label htmlFor="pets">Есть ли у вас домашние животные (и какие)?</label>
      <Controller
        name="profile.health.pets"
        control={control}
        render={({ field }) => <input type="text" {...field} id="pets" />}
      />
      <label htmlFor="additionalInfo">
        Если считаете необходимым и важным добавить какую-то информацию,
        напишите ниже:
      </label>
      <Controller
        name="profile.health.additionalInfo"
        control={control}
        render={({ field }) => (
          <textarea {...field} id="additionalInfo" className="textarea-other" />
        )}
      />
    </>
  );
};

export default OtherFields;
