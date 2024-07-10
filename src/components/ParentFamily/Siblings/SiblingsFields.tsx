import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import AddSiblingsFields from "./AddSiblingsFields";
import RelationshipFields from "./RelationshipFields";
import { SiblingInfo } from "../ParentFamily.types";

const SiblingsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const [showSiblings, setShowSiblings] = useState(false);
  const [siblings, setSiblings] = useState<SiblingInfo[]>([]);

  const removeSibling = (index: number) => {
    setSiblings(siblings?.filter((_, i) => i !== index));
  };

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

  const hasSiblings = watch("profile.parentFamily.hasSiblings");

  useEffect(() => {
    if (hasSiblings === "нет") {
      setValue("profile.parentFamily.siblings", undefined);
    }
  }, [hasSiblings, setValue]);

  return (
    <>
      <label htmlFor="hasSiblings">Были ли у вас братья и сестры?</label>
      <div className="radio-container">
        <Controller
          name="profile.parentFamily.hasSiblings"
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
      {errors.profile?.parentFamily?.hasSiblings && (
        <span>Поле обязательно для заполнения</span>
      )}
      {showSiblings && (
        <>
          <label htmlFor="siblings.order">По порядку рождения Вы были №</label>
          <div className="form-age">
            <Controller
              name="profile.parentFamily.siblings.order"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="number"
                  id="siblings.order"
                  className="input-number"
                  {...field}
                />
              )}
            />
            <span className="span-age">из</span>
            <Controller
              name="profile.parentFamily.siblings.totalSiblings"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <input
                  type="number"
                  id="siblings.totalSiblings"
                  className="input-number"
                  {...field}
                />
              )}
            />
            <span className="span-age">детей в семье.</span>
          </div>
          <AddSiblingsFields
            siblings={siblings}
            addSibling={addSibling}
            removeSibling={removeSibling}
          />
          <RelationshipFields />
        </>
      )}
    </>
  );
};

export default SiblingsFields;
