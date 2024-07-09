import { Controller, useFormContext } from "react-hook-form";
import { cognitive, emotional, physical, social } from "./FactorCategories";
import { UserData } from '../../pages/UserProfileForm';

const FactorsForm: React.FC = () => {
  const { control: control } = useFormContext<UserData>();

  return (
    <>
      <h2>Мешают ли Вам следующие факторы?</h2>
      <h3>Эмоциональные:</h3>
      <div className="checkbox-container">
        {emotional.map((factor, index) => (
          <div key={`emotional.${index}`}>
            <Controller
              name={`factorsTest.emotional.${index}`}
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
              name={`factorsTest.cognitive.${index}`}
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
              name={`factorsTest.social.${index}`}
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
              name={`factorsTest.physical.${index}`}
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
    </>
  );
};

export default FactorsForm;
