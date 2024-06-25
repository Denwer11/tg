import React from "react";

const Form: React.FC = () => {
  return (
    <>
      <div className={"form"}>
        <h3>Введите ваши данные</h3>
        <input className={"input"} type="text" placeholder={"Страна"} />
      </div>
      <select>
        <option value={"legal"}>Юр.лицо</option>
        <option value={"legal"}>Физ.лицо</option>
      </select>
    </>
  );
};

export default Form;
