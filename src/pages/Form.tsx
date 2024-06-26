import { useState } from "react";
import { useForm } from "react-hook-form";
import ReactJson from "react-json-pretty";
import GeneralInfoForm from "../components/GeneralInfo/GeneralInfoForm";
import { GeneralInfo } from "../components/GeneralInfo/GeneralInfo.types";
import { CurrentMaritalStatus } from "../components/MaritalStatus/MaritalStatus.types";
import MaritalStatusForm from "../components/MaritalStatus/MaritalStatusForm";

type FormData = {
  generalInfo: GeneralInfo;
  currentMaritalStatus: CurrentMaritalStatus;
};

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      generalInfo: { gender: "male" },
      currentMaritalStatus: {
        maritalStatus: "живу без партнера",
      },
    },
  });

  const onSubmit: (data: FormData) => void = (data) => {
    setFormData(data);
  };

  return (
    <>
      <div className="container">
        <h2>Анкета</h2>
        <h3>Инструкция по заполнению Анкеты: </h3>
        <ul>
          <li>
            1) На заполнение Анкеты и Теста понадобится около 20-30 минут.
          </li>
          <li>
            2) Чем точнее вы ответите на вопросы, тем эффективнее будет
            результат (вопрос доформулировать).
          </li>
          <li>
            3) Вместо ФИО вы можете написать псевдоним (имя киногероя, кумира и
            т.п.).
          </li>
        </ul>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <GeneralInfoForm
            control={control}
            register={register}
            errors={errors}
          />
          <MaritalStatusForm control={control} errors={errors} />
          {/* Кнопка отправки */}
          <button type="submit">Отправить</button>
        </form>
        {formData && <div>{<ReactJson data={formData} />}</div>}
      </div>
    </>
  );
};

export default Form;
