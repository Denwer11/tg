import React, { useState } from "react";
import {  UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";
import {
  socialMediaDetoxOptions,
  socialMediaFrequencyOptions,
} from "../Options";

const SocialMediaFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<UserData>();

  const [
    showSocialMediaFrequencyCustomField,
    setShowSocialMediaFrequencyCustomField,
  ] = useState(false);

  const handleOptionChangeSocialMediaFrequency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowSocialMediaFrequencyCustomField(
      event.target.value === "ваш вариант"
    );
    setValue(
      "profile.preferencesAndEnvironment.socialMediaFrequency",
      event.target.value
    );
  };

  const [showSocialMediaDetoxCustomField, setShowSocialMediaDetoxCustomField] =
    useState(false);

  const handleOptionChangeSocialMediaDetox = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowSocialMediaDetoxCustomField(event.target.value === "ваш вариант");
    setValue("profile.preferencesAndEnvironment.socialMediaDetox", event.target.value);
  };

  return (
    <>
      <label htmlFor="socialMediaFrequency">
        Как часто вы пользуетесь социальными сетями?
      </label>
      <Controller
        name="profile.preferencesAndEnvironment.socialMediaFrequency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="socialMediaFrequency"
            {...field}
            onChange={handleOptionChangeSocialMediaFrequency}
          >
            {socialMediaFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showSocialMediaFrequencyCustomField && (
        <div>
          <label htmlFor="socialMediaFrequency.custom">Ваш вариант:</label>
          <Controller
            name="profile.preferencesAndEnvironment.socialMediaFrequency"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="socialMediaFrequency.custom" />
            )}
          />
        </div>
      )}
      {errors.profile?.preferencesAndEnvironment?.socialMediaFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="socialMediaDetox">
        Нужен ли вам отдых от социальных сетей и телефона?
      </label>
      <Controller
        name="profile.preferencesAndEnvironment.socialMediaDetox"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="socialMediaDetox"
            {...field}
            onChange={handleOptionChangeSocialMediaDetox}
          >
            {socialMediaDetoxOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showSocialMediaDetoxCustomField && (
        <div>
          <label htmlFor="socialMediaDetox.custom">Ваш вариант:</label>
          <Controller
            name="profile.preferencesAndEnvironment.socialMediaDetox"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="socialMediaDetox.custom" />
            )}
          />
        </div>
      )}
      {errors.profile?.preferencesAndEnvironment?.socialMediaDetox && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default SocialMediaFields;
