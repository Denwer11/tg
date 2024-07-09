/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { questions } from "./PrinciplesQuestions";
import { UserData } from "../../pages/UserProfileForm";

const PrinciplesForm: React.FC = () => {
  const { control } = useFormContext<UserData>();

  return (
    <>
      <h2>
        Пожалуйста, оцените по шкале от 1 (не важно) до 10 (очень важно)
        важность следующих принципов в Вашей жизни:
      </h2>
      <div className="scale-container">
        {["не важно", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "очень важно"].map(
          (label, index) => (
            <div key={index} className="scale-label">
              {label}
            </div>
          )
        )}
      </div>

      {questions?.map((question, index) => {
        const fieldName = `principlesTest.question-${index + 1}`;
        return (
          <div key={index} className="question-container">
            <label htmlFor={fieldName}>{question}</label>
            <Controller
              name={`principlesTest.question-${index + 1}`}
              control={control}
              defaultValue={1}
              render={({ field }) => (
                <>
                  <input
                    type="range"
                    min={1}
                    max={10}
                    id={fieldName}
                    {...field}
                  />
                  <span>{field.value} из 10</span>
                </>
              )}
            />
          </div>
        );
      })}
    </>
  );
};

export default PrinciplesForm;
