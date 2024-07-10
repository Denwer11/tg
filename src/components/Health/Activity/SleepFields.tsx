import React from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from 'react-hook-form';
import { sleepLatencyOptions } from '../Options';

const SleepFields: React.FC = () => {
      const {
        control,
        formState: { errors },
      } = useFormContext<UserData>();

  return (
    <>
      <h4>Ваш сон:</h4>
      <label htmlFor="sleep.wakeUpTimePreferred">
        Время пробуждения (предпочтительное):
      </label>
      <Controller
        name="profile.health.sleep.wakeUpTimePreferred"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            type="time"
            id="sleep.wakeUpTimePreferred"
            className="input-age"
          />
        )}
      />
      {errors.profile?.health?.sleep?.wakeUpTimePreferred && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.wakeUpTimeActual">
        Время пробуждения (фактическое):
      </label>
      <Controller
        name="profile.health.sleep.wakeUpTimeActual"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            type="time"
            id="sleep.wakeUpTimeActual"
            className="input-age"
          />
        )}
      />
      {errors.profile?.health?.sleep?.wakeUpTimeActual && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.sleepTimePreferred">
        Время засыпания (предпочтительное):
      </label>
      <Controller
        name="profile.health.sleep.sleepTimePreferred"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            type="time"
            id="sleep.sleepTimePreferred"
            className="input-age"
          />
        )}
      />
      {errors.profile?.health?.sleep?.sleepTimePreferred && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.sleepTimeActual">
        Время засыпания (фактическое):
      </label>
      <Controller
        name="profile.health.sleep.sleepTimeActual"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            {...field}
            type="time"
            id="sleep.sleepTimeActual"
            className="input-age"
          />
        )}
      />
      {errors.profile?.health?.sleep?.sleepTimeActual && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="sleep.sleepLatency">
        Среднее время необходимое, чтобы заснуть:
      </label>
      <Controller
        name="profile.health.sleep.sleepLatency"
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
      {errors.profile?.health?.sleep?.sleepLatency && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default SleepFields;
