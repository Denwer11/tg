import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/UserProfileForm";

const ChildrenFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<FormData>();

  const [showChildrenDetails, setShowChildrenDetails] = useState(false);
  const [children, setChildren] = useState<
    FormData["currentMaritalStatus"]["children"]
  >([]);
  const [adoptedChildren, setAdoptedChildren] = useState<
    FormData["currentMaritalStatus"]["adoptedChildren"]
  >([]);

  const addChild = () => {
    setChildren(
      children
        ? [...children, { gender: "сын", age: 0 }]
        : [{ gender: "сын", age: 0 }]
    );
  };

  const addAdoptedChild = () => {
    setAdoptedChildren(
      adoptedChildren
        ? [...adoptedChildren, { gender: "сын", age: 0, adoptionAge: 0 }]
        : [{ gender: "сын", age: 0, adoptionAge: 0 }]
    );
  };

  const removeChild = (index: number) => {
    setChildren(children?.filter((_, i) => i !== index));
  };

  const removeAdoptedChild = (index: number) => {
    setAdoptedChildren(adoptedChildren?.filter((_, i) => i !== index));
  };

  const resetChildrenFields = () => {
    setChildren([]);
    setAdoptedChildren([]);
  };

  const hasChildren = watch("currentMaritalStatus.hasChildren");

  useEffect(() => {
    if (hasChildren === "да") {
      setValue("currentMaritalStatus.children", [{ gender: "сын", age: 0 }]);
      setValue("currentMaritalStatus.adoptedChildren", undefined);
    } else if (
      typeof adoptedChildren === "undefined" ||
      adoptedChildren.length === 0
    ) {
      setValue("currentMaritalStatus.adoptedChildren", undefined);
      setValue("currentMaritalStatus.children", undefined);
    } else {
      setValue("currentMaritalStatus.adoptedChildren", undefined);
      setValue("currentMaritalStatus.children", undefined);
    }
  }, [hasChildren, setValue, adoptedChildren]);

  useEffect(() => {
    if (
      hasChildren === "да" &&
      children?.length === 0 &&
      adoptedChildren?.length
    ) {
      setValue("currentMaritalStatus.hasChildren", "нет");
      setShowChildrenDetails(false);
    }
  }, [hasChildren, children, adoptedChildren, setValue]);

  return (
    <>
      <label htmlFor="hasChildren">У вас есть дети или приемные дети?</label>
      <div className="radio-container">
        <Controller
          name="currentMaritalStatus.hasChildren"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasChildren-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowChildrenDetails(true);
                }}
              />
              <label htmlFor="hasChildren-yes">Да</label>
              <input
                type="radio"
                id="hasChildren-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowChildrenDetails(false);
                  resetChildrenFields();
                }}
              />
              <label htmlFor="hasChildren-no">Нет</label>
            </>
          )}
        />
      </div>
      {errors.currentMaritalStatus?.hasChildren && (
        <span>Поле обязательно для заполнения</span>
      )}

      {showChildrenDetails && (
        <>
          <h4>Ваши дети:</h4>
          {children?.map((_child, index) => (
            <div key={index}>
              <label htmlFor={`childGender-${index}`}>Пол:</label>
              <Controller
                name={`currentMaritalStatus.children.${index}.gender`}
                control={control}
                render={({ field }) => (
                  <select id={`childGender-${index}`} {...field}>
                    <option value="male">Сын</option>
                    <option value="female">Дочь</option>
                  </select>
                )}
              />
              <label htmlFor={`childAge-${index}`}>Возраст:</label>
              <Controller
                name={`currentMaritalStatus.children.${index}.age`}
                control={control}
                render={({ field }) => (
                  <input
                    type="number"
                    id={`childAge-${index}`}
                    {...field}
                    className="input-age"
                  />
                )}
              />
              <span className="span-age"> лет</span>
              <button
                type="button"
                className="btn-delete"
                onClick={() => removeChild(index)}
              >
                Удалить
              </button>
            </div>
          ))}
          <button type="button" onClick={addChild}>
            Добавить ребенка
          </button>
          <h4>Приемные дети:</h4>
          {adoptedChildren?.map((_child, index) => (
            <div key={index}>
              <div>
                <label htmlFor={`adoptedChildGender-${index}`}>Пол:</label>
                <Controller
                  name={`currentMaritalStatus.adoptedChildren.${index}.gender`}
                  control={control}
                  render={({ field }) => (
                    <select id={`adoptedChildGender-${index}`} {...field}>
                      <option value="male">Сын</option>
                      <option value="female">Дочь</option>
                    </select>
                  )}
                />
              </div>
              <div className="form-age">
                <label htmlFor={`adoptedChildAge-${index}`}>Возраст:</label>
                <Controller
                  name={`currentMaritalStatus.adoptedChildren.${index}.age`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      id={`adoptedChildAge-${index}`}
                      {...field}
                      className="input-age"
                    />
                  )}
                />
                <span className="span-age"> лет</span>
              </div>
              <div>
                <label htmlFor={`adoptionAge-${index}`}>
                  Сколько вам было лет в момент принятия?
                </label>
                <Controller
                  name={`currentMaritalStatus.adoptedChildren.${index}.adoptionAge`}
                  control={control}
                  render={({ field }) => (
                    <input
                      type="number"
                      id={`adoptionAge-${index}`}
                      {...field}
                      className="input-age"
                    />
                  )}
                />
                <span className="span-age"> лет</span>
              </div>
              <button
                type="button"
                className="btn-delete"
                onClick={() => removeAdoptedChild(index)}
              >
                Удалить
              </button>
            </div>
          ))}
          <button type="button" onClick={addAdoptedChild}>
            Добавить приемного ребенка
          </button>
        </>
      )}
    </>
  );
};

export default ChildrenFields;
