import React, { useState } from "react";
import { FormData } from "../../../pages/Form";
import { Controller, useFormContext } from "react-hook-form";
import {
  aloneTimeActivitiesOptions,
  preferredChannelsOptions,
  preferredSportsOptions,
} from "../Options";

const PreferenceFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<FormData>();

  const [
    showPreferredChannelsCustomField,
    setShowPreferredChannelsCustomField,
  ] = useState(false);

  const handleOptionChangePreferredChannels = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowPreferredChannelsCustomField(event.target.value === "ваш вариант");
    setValue("preferencesAndEnvironment.preferredChannels", event.target.value);
  };

  const [
    showAloneTimeActivitiesCustomField,
    setShowAloneTimeActivitiesCustomField,
  ] = useState(false);

  const handleOptionChangeAloneTimeActivities = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowAloneTimeActivitiesCustomField(event.target.value === "ваш вариант");
    setValue(
      "preferencesAndEnvironment.aloneTimeActivities",
      event.target.value
    );
  };

  const [showPreferredSportsCustomField, setShowPreferredSportsCustomField] =
    useState(false);

  const handleOptionChangePreferredSports = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowPreferredSportsCustomField(event.target.value === "ваш вариант");
    setValue("preferencesAndEnvironment.preferredSports", event.target.value);
  };

  return (
    <>
      <label htmlFor="preferredChannels">Какие каналы вы предпочитаете?</label>
      <Controller
        name="preferencesAndEnvironment.preferredChannels"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="preferredChannels"
            {...field}
            onChange={handleOptionChangePreferredChannels}
          >
            {preferredChannelsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showPreferredChannelsCustomField && (
        <div>
          <label htmlFor="preferredChannels.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.preferredChannels"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="preferredChannels.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.preferredChannels && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="aloneTimeActivities">
        Как вы предпочитаете проводить время в одиночестве?
      </label>
      <Controller
        name="preferencesAndEnvironment.aloneTimeActivities"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="aloneTimeActivities"
            {...field}
            onChange={handleOptionChangeAloneTimeActivities}
          >
            {aloneTimeActivitiesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showAloneTimeActivitiesCustomField && (
        <div>
          <label htmlFor="aloneTimeActivities.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.aloneTimeActivities"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="aloneTimeActivities.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.aloneTimeActivities && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="preferredSports">
        Какие спортивные активности вы предпочитаете?
      </label>
      <Controller
        name="preferencesAndEnvironment.preferredSports"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="preferredSports"
            {...field}
            onChange={handleOptionChangePreferredSports}
          >
            {preferredSportsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showPreferredSportsCustomField && (
        <div>
          <label htmlFor="preferredSports.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.preferredSports"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="preferredSports.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.preferredSports && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default PreferenceFields;
