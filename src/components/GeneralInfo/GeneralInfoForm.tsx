/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Control,
  Controller,
  FieldErrors,
  UseFormRegister,
} from "react-hook-form";

interface GeneralInfoFormProps {
  control: Control<any>;
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
}

const GeneralInfoForm: React.FC<GeneralInfoFormProps> = ({
  control,
  errors,
}) => {
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
        {errors.fullName && <div> Пожалуйста, введите ФИО</div>}
      </div>

      {/* Пол */}
      <div>
        <label htmlFor="gender">Пол: </label>
        <select id="gender">
          <option value="male">Мужской</option>
          <option value="female">Женский</option>
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
        {errors.dateOfBirth && <div>Пожалуйста, введите дату рождения</div>}
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
        {errors.country && <div>Пожалуйста, введите страну</div>}
      </div>

      <div>
        <label htmlFor="city">Город (регион): </label>
        <Controller
          name="generalInfo.countryCity.city"
          control={control}
          rules={{ required: true }}
          render={({ field }) => <input type="text" id="city" {...field} />}
        />
        {errors.city && <div>Пожалуйста, введите город</div>}
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
