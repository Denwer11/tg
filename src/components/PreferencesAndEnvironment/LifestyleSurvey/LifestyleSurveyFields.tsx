import React, { useState } from "react";
import { FormData } from "../../../pages/Form";
import { Controller, useFormContext } from "react-hook-form";
import { regularActivitiesOptions, transportAudioOptions } from "../Options";

const LifestyleSurveyFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    register,
  } = useFormContext<FormData>();

  const [showOtherActivity, setShowOtherActivity] = useState(false);

  const [showAdviceSourceCustomField, setShowwAdviceSourceCustomField] =
    useState(false);

  const handleOptionChangeAdviceSource = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowwAdviceSourceCustomField(event.target.value === "ваш вариант");
    setValue("preferencesAndEnvironment.adviceSource", event.target.value);
  };

  const [showTransportAudioCustomField, setShowTransportAudioCustomField] =
    useState(false);

  const handleOptionChangeTransportAudio = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowTransportAudioCustomField(event.target.value === "ваш вариант");
    setValue("preferencesAndEnvironment.transportAudio", event.target.value);
  };
  return (
    <>
      <label htmlFor="regularActivities">
        Какие из следующих мероприятий вы посещаете регулярно?
      </label>
      <Controller
        name="preferencesAndEnvironment.regularActivities"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <div>
            {regularActivitiesOptions.map((option, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  {...field}
                  value={option}
                  checked={
                    Array.isArray(field.value) && field.value.includes(option)
                  }
                  onChange={() => {
                    if (
                      Array.isArray(field.value) &&
                      field.value.includes(option)
                    ) {
                      field.onChange(
                        field.value.filter((val) => val !== option)
                      );
                    } else {
                      field.onChange([
                        ...(Array.isArray(field.value) ? field.value : []),
                        option,
                      ]);
                    }
                  }}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            ))}
            <input
              type="checkbox"
              {...register("preferencesAndEnvironment.regularActivities")}
              value="ваш вариант"
              checked={showOtherActivity}
              onChange={() => setShowOtherActivity(!showOtherActivity)}
            />
            <label htmlFor="ваш вариант">ваш вариант</label>
            {showOtherActivity && (
              <Controller
                name="preferencesAndEnvironment.regularActivities"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input {...field} id="regularActivities" />
                )}
              />
            )}
          </div>
        )}
      />
      {errors.preferencesAndEnvironment?.regularActivities && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="adviceSource">
        К кому вы чаще всего обращаетесь за советом, когда не знаете, что
        делать?
      </label>
      <Controller
        name="preferencesAndEnvironment.adviceSource"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="adviceSource"
            {...field}
            onChange={handleOptionChangeAdviceSource}
          >
            {regularActivitiesOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showAdviceSourceCustomField && (
        <div>
          <label htmlFor="adviceSource.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.adviceSource"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="adviceSource.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.adviceSource && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="transportAudio">
        Что вы слушаете, когда вы в транспорте или ведете машину?
      </label>
      <Controller
        name="preferencesAndEnvironment.transportAudio"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="transportAudio"
            {...field}
            onChange={handleOptionChangeTransportAudio}
          >
            {transportAudioOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showTransportAudioCustomField && (
        <div>
          <label htmlFor="transportAudio.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.transportAudio"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="transportAudio.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.transportAudio && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default LifestyleSurveyFields;
