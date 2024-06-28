import React from "react";
import { Controller, useFormContext } from 'react-hook-form';
import { FormData } from '../../../pages/Form';
import { SiblingInfo } from '../ParentFamily.types';

interface AddSiblingsFieldsProps {
  siblings: SiblingInfo[];
  addSibling: () => void;
}

const AddSiblingsFields: React.FC<AddSiblingsFieldsProps> = ({
  siblings,
  addSibling,
}) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();
  return (
    <>
      <h4>Добавить братьев и сестер:</h4>
      {siblings?.map((_sibling, index) => (
        <div key={index}>
          <label htmlFor={`siblingRelation-${index}`}>Пол:</label>
          <Controller
            name={`parentFamily.siblings.siblingsInfo.${index}.relation`}
            control={control}
            render={({ field }) => (
              <select id={`siblingRelation-${index}`} {...field}>
                <option value="brother">Сын</option>
                <option value="sister">Дочь</option>
              </select>
            )}
          />

          <label htmlFor={`siblingAgeDifference-${index}`}>
            Разница в возрасте:
          </label>
          <Controller
            name={`parentFamily.siblings.siblingsInfo.${index}.ageDifference`}
            control={control}
            render={({ field }) => (
              <input
                type="number"
                id={`siblingAgeDifference-${index}`}
                {...field}
                className="input-age"
              />
            )}
          />
          <span className="span-age"> лет</span>

          <label htmlFor={`siblingProfession-${index}`}>Его/ее профессия</label>
          <Controller
            name={`parentFamily.siblings.siblingsInfo.${index}.profession`}
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" id={`siblingProfession-${index}`} {...field} />
            )}
          />
          {errors.parentFamily?.siblings?.siblingsInfo?.[index]?.profession && (
            <span>Поле обязательно для заполнения</span>
          )}
        </div>
      ))}
      <button type="button" onClick={addSibling}>
        Добавить брата/сестру
      </button>
    </>
  );
};

export default AddSiblingsFields;
