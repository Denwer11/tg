import React from "react";
import { FormData } from "../../../pages/Form";
import { Controller, useFormContext } from "react-hook-form";
import { fatherRelationshipRatingOptions } from "../Options";

const FatherFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  return (
    <>
      <h4>Отец:</h4>
      <label htmlFor="father.birthYear">Год рождения</label>
      <Controller
        name="parentFamily.father.birthYear"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="father.birthYear"
            type="number"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.father?.birthYear && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="father.profession">Профессия</label>
      <Controller
        name="parentFamily.father.profession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input {...field} id="father.profession" />}
      />
      {errors.parentFamily?.father?.profession && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="father.ageAtBirth">Возраст, в котором вы родились</label>
      <div className="form-age">
        <Controller
          name="parentFamily.father.ageAtBirth"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              id="father.ageAtBirth"
              type="number"
              {...field}
              className="input-age"
            />
          )}
        />
        <span className="span-age"> лет</span>
      </div>
      {errors.parentFamily?.father?.ageAtBirth && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="father.comment">При необходимости Ваш комментарий</label>
      <Controller
        name="parentFamily.father.comment"
        control={control}
        render={({ field }) => <textarea id="father.comment" {...field} />}
      />

      <label htmlFor="fatherRelationship.rating">
        Как бы Вы в целом оценили в детстве отношения между Вами и Отцом
      </label>
      <Controller
        name="parentFamily.fatherRelationship.rating"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="fatherRelationship.rating" {...field}>
            {fatherRelationshipRatingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />

      <label htmlFor="fatherRelationship.comment">
        При необходимости Ваш комментарий
      </label>
      <Controller
        name="parentFamily.fatherRelationship.comment"
        control={control}
        render={({ field }) => (
          <textarea id="fatherRelationship.comment" {...field} />
        )}
      />
    </>
  );
};

export default FatherFields;
