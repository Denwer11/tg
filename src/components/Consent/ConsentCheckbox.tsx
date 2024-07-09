import React from "react";
import { Controller, useFormContext } from 'react-hook-form';
import { UserData } from "../../pages/UserProfileForm";

const ConsentCheckbox: React.FC = () => {
      const {
        control,
        formState: { errors },
      } = useFormContext<UserData>();
      
  return (
    <>
      <div className="checkbox-container">
        <Controller
          control={control}
          name="consentForPersonalDataProcessing"
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="checkbox"
                id="consentForPersonalDataProcessing"
                {...field}
                value={String(field.value)}
                required
              />
              <label htmlFor="consentForPersonalDataProcessing">
                Согласие на обработку персональных данных
              </label>
            </>
          )}
        />
        {errors.consentForPersonalDataProcessing && (
          <span>Вы должны дать согласие на обработку персональных данных</span>
        )}
      </div>
      <div className="checkbox-container">
        <Controller
          control={control}
          name="consentForResearchUse"
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="checkbox"
                id="consentForResearchUse"
                {...field}
                value={String(field.value)}
                required
              />
              <label htmlFor="consentForResearchUse">
                Согласие на использование этой информации для исследовательских
                целей
              </label>
            </>
          )}
        />
        {errors.consentForResearchUse && (
          <span>
            Вы должны дать согласие на использование этой информации для
            исследовательских целей
          </span>
        )}
      </div>
    </>
  );
};

export default ConsentCheckbox;
