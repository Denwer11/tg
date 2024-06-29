import React from "react";
import { FormData } from "../../../pages/Form";
import { Controller, useFormContext } from "react-hook-form";
import {
  communicationOptions,
  relationshipParentsChildhoodOprions,
  relationshipParentsNowOptions,
} from "../Options";
import DeathsOfRelativesFields from "./DeathsOfRelativesFields";

const RelationshipWithParentsFields: React.FC = () => {
  const {
    control,
    formState: { errors },
  } = useFormContext<FormData>();
  
  return (
    <>
      <label htmlFor="relationshipParentsChildhood.relationshipParents">
        Как бы Вы в целом оценили в вашем детстве отношения между родителями:
      </label>
      <Controller
        name="parentFamily.relationshipParentsChildhood.relationshipParents"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            id="relationshipParentsChildhood.relationshipParents"
            {...field}
          >
            {relationshipParentsChildhoodOprions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.parentFamily?.relationshipParentsChildhood
        ?.relationshipParents && <span>Поле обязательно для заполнения</span>}

      <label htmlFor="relationshipParentsChildhood.comment">
        Если вы хотите что-то добавить, пожалуйста, опишите это
      </label>
      <Controller
        name="parentFamily.relationshipParentsChildhood.comment"
        control={control}
        render={({ field }) => (
          <input id="relationshipParentsChildhood.comment" {...field} />
        )}
      />

      <label htmlFor="relationshipParentsNow.relationshipParents">
        Какие у меня сейчас отношения с родителями:
      </label>
      <Controller
        name="parentFamily.relationshipParentsNow.relationshipParents"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="relationshipParentsNow.relationshipParents" {...field}>
            {relationshipParentsNowOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.parentFamily?.relationshipParentsNow?.relationshipParents && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="relationshipParentsNow.comment">
        Если вы хотите что-то добавить, пожалуйста, опишите это
      </label>
      <Controller
        name="parentFamily.relationshipParentsNow.comment"
        control={control}
        render={({ field }) => (
          <input id="relationshipParentsNow.comment" {...field} />
        )}
      />

      <label htmlFor="communication">
        Как часто вы общаетесь с родителями?
      </label>
      <Controller
        name="parentFamily.communication"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="communication" {...field}>
            {communicationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.parentFamily?.communication && (
        <span>Поле обязательно для заполнения</span>
      )}
      <DeathsOfRelativesFields />
    </>
  );
};

export default RelationshipWithParentsFields;
