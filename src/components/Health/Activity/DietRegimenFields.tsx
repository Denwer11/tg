import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { mealSizeOptions } from "../Options";

const DietRegimenFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<UserData>();

  const [showDietRegimenDetails, setShowDietRegimenDetails] = useState(false);

  const [mealTimes, setMealTimes] = useState([""]);

  const handleTimeChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newMealTimes = [...mealTimes];
    newMealTimes[index] = event.target.value;
    setMealTimes(newMealTimes);
  };

  const addMealTime = () => {
    setMealTimes([...mealTimes, ""]);
  };

  const hasDietRegimen = watch("profile.health.hasDietRegimen");

  useEffect(() => {
    if (hasDietRegimen === "нет") {
      setValue("profile.health.dietRegimen", undefined);
    }
  }, [hasDietRegimen, setValue]);

  return (
    <>
      <label htmlFor="hasDietRegimen">
        Вы придерживаетесь какого-либо режима питания?
      </label>
      <div className="radio-container">
        <Controller
          name="profile.health.hasDietRegimen"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasDietRegimen-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowDietRegimenDetails(true);
                }}
              />
              <label htmlFor="hasDietRegimen-yes">Да</label>
              <input
                type="radio"
                id="hasDietRegimen-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowDietRegimenDetails(false);
                }}
              />
              <label htmlFor="hasDietRegimen-no">Нет</label>
              <input
                type="radio"
                id="hasDietRegimen-chaotically"
                {...field}
                checked={field.value === "питаюсь хаотично"}
                value="питаюсь хаотично"
                onChange={() => {
                  field.onChange("питаюсь хаотично");
                  setShowDietRegimenDetails(false);
                }}
              />
              <label htmlFor="hasDietRegimen-chaotically">
                Питаюсь хаотично
              </label>
              <input
                type="radio"
                id="hasDietRegimen-whenAndHow"
                {...field}
                checked={field.value === "когда как"}
                value="когда как"
                onChange={() => {
                  field.onChange("когда как");
                  setShowDietRegimenDetails(false);
                }}
              />
              <label htmlFor="hasDietRegimen-whenAndHow">Когда как</label>
            </>
          )}
        />
      </div>
      {showDietRegimenDetails && (
        <>
          <label htmlFor="dietRegimen.mealTimes">
            Обычное время приема пищи:
          </label>
          <div className="form-age">
            {mealTimes.map((time, index) => (
              <div key={index}>
                <label>
                  {index + 1}) Время приема пищи:
                  <input
                    type="time"
                    value={time}
                    onChange={(event) => handleTimeChange(index, event)}
                  />
                </label>
              </div>
            ))}
            <button type="button" onClick={addMealTime}>
              Добавить
            </button>
            <span className="span-age"></span>
          </div>
          {errors.profile?.health?.dietRegimen?.mealTimes && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="dietRegimen.biggestMeal">
            Выбрать цифру самого большого приема пищи:
          </label>
          <Controller
            name="profile.health.dietRegimen.biggestMeal"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select {...field} id="dietRegimen.biggestMeal">
                {mealSizeOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.profile?.health?.dietRegimen?.biggestMeal && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default DietRegimenFields;
