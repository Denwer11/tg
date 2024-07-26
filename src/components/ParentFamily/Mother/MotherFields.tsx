import { Controller, useFormContext } from "react-hook-form";
import { UserData } from "../../../pages/UserProfileForm";
import { motherRelationshipRatingOptions } from "../Options";
import { useEffect } from "react";

const MotherFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<UserData>();

  const hasStepmother = watch("profile.parentFamily.hasStepmother");

  useEffect(() => {
    if (hasStepmother === "да") {
      setValue("profile.parentFamily.stepmother", {
        rating:
          "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
        yearsTogether: 0,
        comment: undefined,
      });
    } else {
      setValue("profile.parentFamily.stepmother", undefined);
    }
  }, [hasStepmother, setValue]);

  return (
    <>
      <h4>Мать:</h4>
      <label htmlFor="mother.birthYear">Год рождения: </label>
      <Controller
        name="profile.parentFamily.mother.birthYear"
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
      {errors.profile?.parentFamily?.mother?.birthYear && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.profession">Профессия: </label>
      <Controller
        name="profile.parentFamily.mother.profession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input id="mother.profession" {...field} />}
      />
      {errors.profile?.parentFamily?.mother?.profession && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.ageAtBirth">
        Возраст, в котором она вас родила:
      </label>
      <div className="form-age">
        <Controller
          name="profile.parentFamily.mother.ageAtBirth"
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
        <span className="span-age"> лет</span>
      </div>
      {errors.profile?.parentFamily?.mother?.ageAtBirth && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.totalChildren">
        Всего мамой было рождено детей:
      </label>
      <Controller
        name="profile.parentFamily.mother.totalChildren"
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
      {errors.profile?.parentFamily?.mother?.totalChildren && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.comment">При необходимости ваш комментарий:</label>
      <Controller
        name="profile.parentFamily.mother.comment"
        control={control}
        render={({ field }) => <textarea {...field} />}
      />

      <label htmlFor="motherRelationship.rating">
        Как бы Вы в целом оценили в детстве отношения между Вами и мамой:
      </label>
      <Controller
        name="profile.parentFamily.motherRelationship.rating"
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
      {errors.profile?.parentFamily?.motherRelationship?.rating && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="motherRelationship.comment">
        При необходимости Ваш комментарий:
      </label>
      <Controller
        name="profile.parentFamily.motherRelationship.comment"
        control={control}
        render={({ field }) => (
          <textarea id="motherRelationship.comment" {...field} />
        )}
      />
    </>
  );
};

export default MotherFields;
