import React, { useState } from "react";
import { UserData } from "../../../pages/UserProfileForm";
import { Controller, useFormContext } from "react-hook-form";
import { booksAt10Options, currentReadingFrequencyOptions, readingFrequencyAt10Options } from '../Options';

const ReadingFields: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
  } = useFormContext<UserData>();

  const [
    showReadingFrequencyAt10CustomField,
    setShowReadingFrequencyAt10CustomField,
  ] = useState(false);

  const handleOptionChangeReadingFrequencyAt10 = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowReadingFrequencyAt10CustomField(
      event.target.value === "ваш вариант"
    );
    setValue(
      "profile.educationAndHobbies.readingFrequencyAt10",
      event.target.value
    );
  };

  const [
    showCurrentReadingFrequencyCustomField,
    setShowCurrentReadingFrequencyCustomField,
  ] = useState(false);

  const handleOptionChangeCurrentReadingFrequency = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowCurrentReadingFrequencyCustomField(
      event.target.value === "ваш вариант"
    );
    setValue(
      "profile.educationAndHobbies.currentReadingFrequency",
      event.target.value
    );
  };
  return (
    <>
      <label htmlFor="booksAt10">
        Сколько книг было в Вашем доме, когда Вам было 10 лет:
      </label>
      <Controller
        name="profile.educationAndHobbies.booksAt10"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="booksAt10" {...field}>
            {booksAt10Options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.profile?.educationAndHobbies?.booksAt10 && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="readingFrequencyAt10">
        Как вы читали книги в 10-16 лет?
      </label>
      <Controller
        name="profile.educationAndHobbies.readingFrequencyAt10"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="readingFrequencyAt10"
            {...field}
            onChange={handleOptionChangeReadingFrequencyAt10}
          >
            {readingFrequencyAt10Options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showReadingFrequencyAt10CustomField && (
        <div>
          <label htmlFor="readingFrequencyAt10.custom">Ваш вариант:</label>
          <Controller
            name="profile.educationAndHobbies.readingFrequencyAt10"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input type="text" {...field} id="readingFrequencyAt10.custom" />
            )}
          />
        </div>
      )}
      {errors.profile?.educationAndHobbies?.readingFrequencyAt10 && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="currentReadingFrequency">
        Сейчас как часто вы читаете?
      </label>
      <Controller
        name="profile.educationAndHobbies.currentReadingFrequency"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="currentReadingFrequency"
            {...field}
            onChange={handleOptionChangeCurrentReadingFrequency}
          >
            {currentReadingFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {showCurrentReadingFrequencyCustomField && (
        <div>
          <label htmlFor="currentReadingFrequency.custom">Ваш вариант:</label>
          <Controller
            name="profile.educationAndHobbies.currentReadingFrequency"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                {...field}
                id="educationAndHobbies.currentReadingFrequency.custom"
              />
            )}
          />
        </div>
      )}
      {errors.profile?.educationAndHobbies?.currentReadingFrequency && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default ReadingFields;
