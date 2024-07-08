import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import ReactJson from "react-json-pretty";
import { TestData } from "./Factors.types";
import { cognitive, emotional, physical, social } from "./FactorCategories";

const FactorsForm: React.FC = () => {
  const { handleSubmit, control: control } = useForm<TestData>();

  const [testData, setTestData] = useState<TestData | null>(null);

  const onSubmit = (data: TestData) => {
    const result = {
      emotional: data.emotional.map((val) => Boolean(val)),
      cognitive: data.cognitive.map((val) => Boolean(val)),
      social: data.social.map((val) => Boolean(val)),
      physical: data.physical.map((val) => Boolean(val)),
    };

    setTestData(result);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h2>Мешают ли Вам следующие факторы?</h2>
        <h3>Эмоциональные:</h3>
        <div className="checkbox-container">
          {emotional.map((factor, index) => (
            <div key={`emotional.${index}`}>
              <Controller
                name={`emotional.${index}`}
                control={control}
                render={({ field: { onChange, onBlur, name, ref, value } }) => (
                  <input
                    id={`emotional.${index}`}
                    type="checkbox"
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value}
                    name={name}
                    ref={ref}
                  />
                )}
              />
              <label htmlFor={`emotional.${index}`}>{factor}</label>
            </div>
          ))}

          <h3>Когнитивные:</h3>
          {cognitive.map((factor, index) => (
            <div key={`cognitive.${index}`}>
              <Controller
                name={`cognitive.${index}`}
                control={control}
                render={({ field: { onChange, onBlur, name, ref, value } }) => (
                  <input
                    id={`cognitive.${index}`}
                    type="checkbox"
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value}
                    name={name}
                    ref={ref}
                  />
                )}
              />
              <label htmlFor={`cognitive.${index}`}>{factor}</label>
            </div>
          ))}

          <h3>Социальные:</h3>
          {social.map((factor, index) => (
            <div key={`social.${index}`}>
              <Controller
                name={`social.${index}`}
                control={control}
                render={({ field: { onChange, onBlur, name, ref, value } }) => (
                  <input
                    id={`social.${index}`}
                    type="checkbox"
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value}
                    name={name}
                    ref={ref}
                  />
                )}
              />
              <label htmlFor={`social.${index}`}>{factor}</label>
            </div>
          ))}
          <h3>Физические:</h3>
          {physical.map((factor, index) => (
            <div key={`physical.${index}`}>
              <Controller
                name={`physical.${index}`}
                control={control}
                render={({ field: { onChange, onBlur, name, ref, value } }) => (
                  <input
                    id={`physical.${index}`}
                    type="checkbox"
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={value}
                    name={name}
                    ref={ref}
                  />
                )}
              />
              <label htmlFor={`physical.${index}`}>{factor}</label>
            </div>
          ))}
        </div>

        <button type="submit">Отправить</button>
      </form>
      {testData && <div>{<ReactJson data={testData} />}</div>}
    </>
  );
};

export default FactorsForm;
