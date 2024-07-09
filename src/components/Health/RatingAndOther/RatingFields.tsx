import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/UserProfileForm";

const RatingFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <label htmlFor="healthRating">
        Вы считаете себя здоровым человеком? Оцените свое здоровье по шкале от 1
        до 10, где 1 это почти полное отсутствие здоровья, а 10 - здоровый
        человек:
      </label>
      <div className="form-age">
        <Controller
          name="health.healthRating"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              id="healthRating"
              min="1"
              max="10"
              className="input-age"
            />
          )}
        />
      </div>
      {errors.health?.healthRating && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="immunityRating">
        Как вы считаете, какой у вас иммунитет? Оцените свой иммунитет по шкале
        от 1 до 10, где 1 это очень слабый иммунитет, а 10 - сильный иммунитет
        (редко болею и быстро выздоравливаю):
      </label>
      <div className="form-age">
        <Controller
          name="health.immunityRating"
          rules={{ required: true }}
          control={control}
          render={({ field }) => (
            <input
              type="number"
              {...field}
              id="immunityRating"
              min="1"
              max="10"
              className="input-age"
            />
          )}
        />
      </div>
      {errors.health?.immunityRating && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default RatingFields;
