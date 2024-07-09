/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../pages/UserProfileForm";
import { useEffect } from "react";

const GeneralInfoForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    watch,
    setValue,
  } = useFormContext<FormData>();

  const dateOfBirth = watch("generalInfo.dateOfBirth");
  const age = dateOfBirth
    ? Math.floor(
        (new Date().getTime() - new Date(dateOfBirth).getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
      )
    : null;
  const contacts = watch("generalInfo.contacts");

  useEffect(() => {
    const allFieldsUndefined =
      contacts && Object.values(contacts).every((value) => value === undefined);
    if (allFieldsUndefined) {
      setValue("generalInfo.contacts", undefined);
    }
  }, [contacts, setValue]);
  
  return (
    <>
      <h3>Общие данные</h3>
      <div>
        <label htmlFor="fullName">ФИО: </label>
        <Controller
          name="generalInfo.fullName"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" id="fullName" {...field} />}
        />
        {errors.generalInfo?.fullName && <div> Пожалуйста, введите ФИО</div>}
      </div>

      {/* Пол */}
      <div>
        <label htmlFor="gender">Пол: </label>
        <select id="gender">
          <option value="мужской">Мужской</option>
          <option value="женский">Женский</option>
        </select>
      </div>

      {/* Дата рождения */}
      <div>
        <label htmlFor="dateOfBirth">Дата рождения: </label>
        <Controller
          name="generalInfo.dateOfBirth"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="date" id="dateOfBirth" {...field} />
          )}
        />
        {errors.generalInfo?.dateOfBirth && (
          <div>Пожалуйста, введите дату рождения</div>
        )}
        {dateOfBirth && <div>Возраст: {age} лет</div>}
      </div>

      {/* Страна и город рождения */}
      <div>
        <label htmlFor="country">Страна: </label>
        <Controller
          name="generalInfo.countryCity.country"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" id="country" {...field} />}
        />
        {errors.generalInfo?.countryCity?.country && (
          <div>Пожалуйста, введите страну</div>
        )}
      </div>

      <div>
        <label htmlFor="city">Город (регион): </label>
        <Controller
          name="generalInfo.countryCity.city"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" id="city" {...field} />}
        />
        {errors.generalInfo?.countryCity?.city && (
          <div>Пожалуйста, введите город</div>
        )}
      </div>

      {/* Контактные данные */}
      <h4>Контактные данные:</h4>

      {/* Телефон */}
      <div>
        <label htmlFor="phone">Телефон (WhatsApp): </label>
        <Controller
          name="generalInfo.contacts.phone"
          control={control}
          render={({ field }) => (
            <input
              type="tel"
              id="phone"
              placeholder="+79999999999"
              {...field}
            />
          )}
        />
      </div>

      {/* Telegram */}
      <div>
        <label htmlFor="telegram">Telegram: </label>
        <Controller
          name="generalInfo.contacts.telegram"
          control={control}
          render={({ field }) => (
            <input
              type="text"
              id="telegram"
              {...field}
              placeholder="@телеграм"
            />
          )}
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email">Email: </label>
        <Controller
          name="generalInfo.contacts.email"
          control={control}
          render={({ field }) => (
            <input
              type="email"
              id="email"
              placeholder="email@email.com"
              {...field}
            />
          )}
        />
      </div>
    </>
  );
};

export default GeneralInfoForm;
