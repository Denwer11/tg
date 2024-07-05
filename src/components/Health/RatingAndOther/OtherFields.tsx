import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";

const OtherFields: React.FC = () => {
  const { control } = useFormContext<FormData>();

  return (
    <>
      <label htmlFor="pets">Есть ли у вас домашние животные (и какие)?</label>
      <Controller
        name="health.pets"
        control={control}
        render={({ field }) => <input type="text" {...field} id="pets" />}
      />
      <label htmlFor="additionalInfo">
        Если считаете необходимым и важным добавить какую-то информацию,
        напишите ниже:
      </label>
      <Controller
        name="health.additionalInfo"
        control={control}
        render={({ field }) => (
          <textarea {...field} id="additionalInfo" className="textarea-other" />
        )}
      />
    </>
  );
};

export default OtherFields;
