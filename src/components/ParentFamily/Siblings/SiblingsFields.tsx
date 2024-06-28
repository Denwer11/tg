import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { SiblingInfo } from "../ParentFamily.types";
import AddSiblingsFields from "./AddSiblingsFields";
import RelationshipFields from "./RelationshipFields";

const SiblingsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const [showSiblings, setShowSiblings] = useState(false);
  const [siblings, setSiblings] = useState<SiblingInfo[]>([]);

  const addSibling = () => {
    setSiblings(
      siblings
        ? [
            ...siblings,
            {
              relation: "брат",
              ageDifference: 0,
              profession: "",
            },
          ]
        : [
            {
              relation: "брат",
              ageDifference: 0,
              profession: "",
            },
          ]
    );
  };

  const resetSiblingsFields = () => {
    setSiblings([]);
  };
  return (
    <>
      <label htmlFor="hasSiblings">Были ли у вас братья и сестры?</label>
      <div className="radio-container">
        <Controller
          name="parentFamily.hasSiblings"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasSiblings-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowSiblings(true);
                }}
              />
              <label htmlFor="hasSiblings-yes">Да</label>
              <input
                type="radio"
                id="hasSiblings-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowSiblings(false);
                  resetSiblingsFields();
                }}
              />
              <label htmlFor="hasSiblings-no">Нет</label>
            </>
          )}
        />
      </div>
      {errors.parentFamily?.hasSiblings && (
        <span>Поле обязательно для заполнения</span>
      )}
      {showSiblings && (
        <>
          <AddSiblingsFields siblings={siblings} addSibling={addSibling} />
          <RelationshipFields />
        </>
      )}
    </>
  );
};

export default SiblingsFields;
