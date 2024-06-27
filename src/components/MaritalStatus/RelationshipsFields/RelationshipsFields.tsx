import React, { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../../pages/Form";
import { RelationshipDurationOptions, RelationshipEndReasonOptions, RelationshipQualityOptions } from '../Options';

const RelationshipsFields = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();

  const [relationshipEndReasonOther, setRelationshipEndReasonOther] =
    useState(false);

  const handleRelationshipEndReasonChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    setRelationshipEndReasonOther(selectedValue === "иное");
  };
  return (
    <>
      <label htmlFor="relationshipDuration">
        Как долго в последних отношениях:
      </label>
      <Controller
        name="currentMaritalStatus.relationshipDuration"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="relationshipDuration" {...field}>
            {RelationshipDurationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.currentMaritalStatus?.relationshipDuration && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="relationshipQuality">
        Как вы оцениваете ваши последние отношения?
      </label>
      <Controller
        name="currentMaritalStatus.relationshipQuality"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="relationshipQuality" {...field}>
            {RelationshipQualityOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.currentMaritalStatus?.relationshipQuality && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="longestRelationshipDuration">
        Как долго длились самые долгие отношения (с каким-либо партнером,
        независимо от брака)?
      </label>
      <div className="form-age">
        <Controller
          name="currentMaritalStatus.longestRelationshipDuration"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input
              type="number"
              id="longestRelationshipDuration"
              className="input-age"
              {...field}
            />
          )}
        />
        <span className="span-age"> лет</span>
      </div>
      {errors.currentMaritalStatus?.longestRelationshipDuration && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="relationshipEndReason">
        В случае, если они завершились, то по какой причине?
      </label>
      <Controller
        name="currentMaritalStatus.relationshipEndReason"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="relationshipEndReason"
            {...field}
            onChange={handleRelationshipEndReasonChange}
          >
            {RelationshipEndReasonOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {relationshipEndReasonOther && (
        <Controller
          name="currentMaritalStatus.otherMaritalStatus"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <input type="text" id="otherMaritalStatus" {...field} />
          )}
        />
      )}
      {errors.currentMaritalStatus?.relationshipEndReason && (
        <span>Поле обязательно для заполнения</span>
      )}
      <label htmlFor="numberOfRelationships">
        Количество браков или циклов отношений, которые вы приравниваете к
        браку?
      </label>
      <Controller
        name="currentMaritalStatus.numberOfRelationships"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="number"
            id="numberOfRelationships"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.currentMaritalStatus?.numberOfRelationships && (
        <span>Поле обязательно для заполнения</span>
      )}
    </>
  );
};

export default RelationshipsFields;
