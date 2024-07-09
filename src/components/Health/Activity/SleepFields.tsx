import React from "react";
import { FormData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from 'react-hook-form';
import { sleepLatencyOptions, timeOptions } from '../Options';

const SleepFields: React.FC = () => {
      const {
        control,
        formState: { errors },
      } = useFormContext<FormData>();

  return (
    <>
      <h4>Ваш сон:</h4>
      <label htmlFor="sleep.wakeUpTimePreferred">
        Время пробуждения (предпочтительное):
      </label>
      <Controller
        name="health.sleep.wakeUpTimePreferred"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select {...field} id="sleep.wakeUpTimePreferred">
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        )}
      />
      {errors.health?.sleep?.wakeUpTimePreferred && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.wakeUpTimeActual">
        Время пробуждения (фактическое):
      </label>
      <Controller
        name="health.sleep.wakeUpTimeActual"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select {...field} id="sleep.wakeUpTimeActual">
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        )}
      />
      {errors.health?.sleep?.wakeUpTimeActual && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.sleepTimePreferred">
        Время засыпания (предпочтительное):
      </label>
      <Controller
        name="health.sleep.sleepTimePreferred"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select {...field} id="sleep.sleepTimePreferred">
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        )}
      />
      {errors.health?.sleep?.sleepTimePreferred && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.sleepTimeActual">
        Время засыпания (фактическое):
      </label>
      <Controller
        name="health.sleep.sleepTimeActual"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select {...field} id="sleep.sleepTimeActual">
            {timeOptions.map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        )}
      />
      {errors.health?.sleep?.sleepTimeActual && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.sleepLatency">
        Среднее время необходимое, чтобы заснуть:
      </label>
      <Controller
        name="health.sleep.sleepLatency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select {...field} id="sleep.sleepLatency">
            {sleepLatencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.health?.sleep?.sleepLatency && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default SleepFields;
