import React, { useState } from "react";
import { FormData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";

const IsCurrentlyLearningFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const [showIsCurrentlyLearningDetails, setShowIsCurrentlyLearningDetails] =
    useState(false);

  const [showLearningComment, setShowLearningComment] = useState(false);
  return (
    <>
      <label htmlFor="isCurrentlyLearning">
        Проходите ли вы в настоящее время какое-либо обучение или курсы
        повышения квалификации?
      </label>
      <div className="radio-container">
        <Controller
          name="educationAndHobbies.isCurrentlyLearning"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="isCurrentlyLearning-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowIsCurrentlyLearningDetails(true);
                }}
              />
              <label htmlFor="isCurrentlyLearning-yes">Да</label>
              <input
                type="radio"
                id="isCurrentlyLearning-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowIsCurrentlyLearningDetails(false);
                }}
              />
              <label htmlFor="isCurrentlyLearning-no">Нет</label>
            </>
          )}
        />
      </div>
      {showIsCurrentlyLearningDetails && (
        <>
          <label htmlFor="learningField">В какой сфере?</label>
          <Controller
            name="educationAndHobbies.learningField"
            control={control}
            render={({ field }) => (
              <div>
                <input
                  type="radio"
                  {...field}
                  value="в своей профессиональной сфере"
                  checked={field.value === "в своей профессиональной сфере"}
                  onChange={() => {
                    field.onChange("в своей профессиональной сфере");
                    setShowLearningComment(false);
                  }}
                />
                <label htmlFor="в своей профессиональной сфере">
                  в своей профессиональной сфере
                </label>
                <input
                  type="radio"
                  {...field}
                  value="в иной сфере"
                  checked={field.value === "в иной сфере"}
                  onChange={() => {
                    field.onChange("в иной сфере");
                    setShowLearningComment(true);
                  }}
                />
                <label htmlFor="в иной сфере">в иной сфере</label>
              </div>
            )}
          />
          {showLearningComment && (
            <>
              <label htmlFor="learningComment">
                Если в иной сфере, напишите Ваш комментарий (что за сфера, и
                ваша мотивация):
              </label>
              <Controller
                name="educationAndHobbies.learningComment"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <textarea {...field} id="longestProfession" />
                )}
              />
              {errors.educationAndHobbies?.learningComment && (
                <span>Поле обязательно для заполнения</span>
              )}
            </>
          )}
          {errors.educationAndHobbies?.learningField && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
    </>
  );
};

export default IsCurrentlyLearningFields;
