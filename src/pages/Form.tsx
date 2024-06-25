import { useForm } from "react-hook-form";

type FormData = {
  fullName: string;
  gender: "male" | "female";
  dateOfBirth: string;
  country: string;
  city: string;
  phone?: string;
  telegram?: string;
  email?: string;
};
const Form: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      gender: "male",
      country: "Россия",
    },
  });
  const dateOfBirth = watch("dateOfBirth");

  const age = dateOfBirth
    ? Math.floor(
        (new Date().getTime() - new Date(dateOfBirth).getTime()) /
          (1000 * 60 * 60 * 24 * 365.25)
      )
    : null;

  const onSubmit: (data: FormData) => void = (data) => {
    console.log(data);
  };
  return (
    <>
      <h3>Анкета</h3>
      <h4>Инструкция по заполнению Анкеты: </h4>
      <ul>
        <li>1) На заполнение Анкеты и Теста понадобится около 20-30 минут.</li>
        <li>
          2) Чем точнее вы ответите на вопросы, тем эффективнее будет результат
          (вопрос доформулировать).
        </li>
        <li>
          3) Вместо ФИО вы можете написать псевдоним (имя киногероя, кумира и
          т.п.).
        </li>
      </ul>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {/* ФИО */}
        <div>
          <label htmlFor="fullName">ФИО: </label>
          <input
            type="text"
            id="fullName"
            {...register("fullName", { required: true })}
          />
          {errors.fullName && <span>Пожалуйста, введите ФИО</span>}
        </div>

        {/* Пол */}
        <div>
          <label htmlFor="gender">Пол: </label>
          <select id="gender" {...register("gender")}>
            <option value="male">Мужской</option>
            <option value="female">Женский</option>
          </select>
        </div>

        {/* Дата рождения */}
        <div>
          <label htmlFor="dateOfBirth">Дата рождения: </label>
          <input
            type="date"
            id="dateOfBirth"
            {...register("dateOfBirth", { required: true })}
          />
          {errors.dateOfBirth && <span>Пожалуйста, введите дату рождения</span>}
          {dateOfBirth && <span>Возраст: {age} лет</span>}
        </div>

        {/* Страна и город рождения */}
        <div>
          <label htmlFor="country">Страна: </label>
          <input type="text" id="country" {...register("country")} />
        </div>
        <div>
          <label htmlFor="city">Город (регион): </label>
          <input type="text" id="city" {...register("city")} />
        </div>

        {/* Контактные данные */}
        <h4>Контактные данные:</h4>

        {/* Телефон */}
        <div>
          <label htmlFor="phone">Телефон (WhatsApp): </label>
          <input type="tel" id="phone" {...register("phone")} />
        </div>

        {/* Telegram */}
        <div>
          <label htmlFor="telegram">Telegram: </label>
          <input
            type="text"
            id="telegram"
            {...register("telegram")}
            placeholder="@телеграм"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" {...register("email")} />
        </div>

        {/* Кнопка отправки */}
        <button type="submit">Отправить</button>
      </form>
    </>
  );
};

export default Form;
