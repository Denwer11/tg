import React, { useState } from "react";
import { Controller, useFormContext } from 'react-hook-form';
import { FormData } from "../../../pages/UserProfileForm";
import { dominantColorsOptions, preferredFurnitureOptions, wallDecorOptions } from '../Options';

const HouseFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<FormData>();

  const [showWallDecorCustomField, setShowWallDecorCustomField] =
    useState(false);

  const handleOptionChangeWallDecor = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowWallDecorCustomField(event.target.value === "ваш вариант");
    setValue("preferencesAndEnvironment.wallDecor", event.target.value);
  };

  const [
    showPreferredFurnitureCustomField,
    setShowPreferredFurnitureCustomField,
  ] = useState(false);

  const handleOptionChangePreferredFurniture = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowPreferredFurnitureCustomField(event.target.value === "ваш вариант");
    setValue(
      "preferencesAndEnvironment.preferredFurniture",
      event.target.value
    );
  };

  const [showDominantColorsCustomField, setShowDominantColorsCustomField] =
    useState(false);

  const handleOptionChangeDominantColors = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowDominantColorsCustomField(event.target.value === "ваш вариант");
    setValue("preferencesAndEnvironment.dominantColors", event.target.value);
  };
  return (
    <>
      <label htmlFor="wallDecor">Что висит на стенах у вас дома?</label>
      <Controller
        name="preferencesAndEnvironment.wallDecor"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="wallDecor"
            {...field}
            onChange={handleOptionChangeWallDecor}
          >
            {wallDecorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showWallDecorCustomField && (
        <div>
          <label htmlFor="wallDecor.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.wallDecor"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="wallDecor.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.wallDecor && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="preferredFurniture">Какую мебель вы предпочитаете?</label>
      <Controller
        name="preferencesAndEnvironment.preferredFurniture"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="preferredFurniture"
            {...field}
            onChange={handleOptionChangePreferredFurniture}
          >
            {preferredFurnitureOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showPreferredFurnitureCustomField && (
        <div>
          <label htmlFor="preferredFurniture.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.preferredFurniture"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="preferredFurniture.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.preferredFurniture && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="dominantColors">
        Какие цвета преобладают в вашем доме?
      </label>
      <Controller
        name="preferencesAndEnvironment.dominantColors"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="dominantColors"
            {...field}
            onChange={handleOptionChangeDominantColors}
          >
            {dominantColorsOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showDominantColorsCustomField && (
        <div>
          <label htmlFor="dominantColors.custom">Ваш вариант:</label>
          <Controller
            name="preferencesAndEnvironment.dominantColors"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="dominantColors.custom" />
            )}
          />
        </div>
      )}
      {errors.preferencesAndEnvironment?.dominantColors && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default HouseFields;
