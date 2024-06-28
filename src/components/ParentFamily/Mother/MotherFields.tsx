import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { motherRelationshipRatingOptions } from "../options";
import { useEffect } from "react";

const MotherFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const hasStepmother = watch("parentFamily.hasStepmother");

  useEffect(() => {
    if (hasStepmother === "да") {
      setValue("parentFamily.stepmother", {
        rating:
          "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
        yearsTogether: 0,
        comment: undefined,
      });
    } else {
      setValue("parentFamily.stepmother", undefined);
    }
  }, [hasStepmother, setValue]);

  return (
    <>
      <h4>Мать:</h4>
      <label htmlFor="mother.birthYear">Год рождения: </label>
      <Controller
        name="parentFamily.mother.birthYear"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="number"
            id="mother.birthYear"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.mother?.birthYear && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.profession">Профессия: </label>
      <Controller
        name="parentFamily.mother.profession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input id="mother.profession" {...field} />}
      />
      {errors.parentFamily?.mother?.profession && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.ageAtBirth">
        Возраст, в котором она вас родила:
      </label>
      <Controller
        name="parentFamily.mother.ageAtBirth"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="number"
            id="mother.ageAtBirth"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.mother?.ageAtBirth && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.totalChildren">
        Всего мамой было рождено детей:
      </label>
      <Controller
        name="parentFamily.mother.totalChildren"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="mother.totalChildren"
            type="number"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.mother?.totalChildren && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.comment">При необходимости ваш комментарий:</label>
      <Controller
        name="parentFamily.mother.comment"
        control={control}
        render={({ field }) => <textarea {...field} />}
      />

      <label htmlFor="motherRelationship.rating">
        Как бы Вы в целом оценили в детстве отношения между Вами и мамой
      </label>
      <Controller
        name="parentFamily.motherRelationship.rating"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="motherRelationship.rating" {...field}>
            {motherRelationshipRatingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.parentFamily?.motherRelationship?.rating && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="motherRelationship.comment">
        При необходимости Ваш комментарий
      </label>
      <Controller
        name="parentFamily.motherRelationship.comment"
        control={control}
        render={({ field }) => (
          <textarea id="motherRelationship.comment" {...field} />
        )}
      />
    </>
  );
};

export default MotherFields;
