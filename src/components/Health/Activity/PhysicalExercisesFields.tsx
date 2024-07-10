import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";

const PhysicalExercisesFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<UserData>();
  return (
    <>
      <h4>Физические упражнения: </h4>
      <label htmlFor="physicalExercises.exerciseHours">
        Сумма всех часов в неделю:
      </label>
      <div className="form-age">
        <Controller
          name="profile.health.physicalExercises.exerciseHours"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              id="exerciseHours"
              className="input-age"
            />
          )}
        />
      </div>
      {errors.profile?.health?.physicalExercises?.exerciseHours && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="physicalExercises.walkingHours">
        Сколько часов в неделю вы тратите на прогулки:
      </label>
      <div className="form-age">
        <Controller
          name="profile.health.physicalExercises.walkingHours"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              id="walkingHours"
              className="input-age"
            />
          )}
        />
      </div>
      <label htmlFor="physicalExercises.stepsPerDay">
        либо укажите среднее количество шагов в день, если их измеряете:
      </label>
      <div className="form-age">
        <Controller
          name="profile.health.physicalExercises.stepsPerDay"
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              id="physicalExercises.stepsPerDay"
              className="input-age"
            />
          )}
        />
      </div>
    </>
  );
};

export default PhysicalExercisesFields;
