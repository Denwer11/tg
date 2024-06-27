import React, { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { FormData } from "../../pages/Form";
import {
  fatherRelationshipRatingOptions,
  motherRelationshipRatingOptions,
  stepfatherRelationshipRatingOptions,
  stepmotherRelationshipRatingOptions,
} from "./Options";

const ParentFamilyForm: React.FC = () => {
  const {
    control,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext<FormData>();

  const [showStepmotherDetails, setShowStepmotherDetails] = useState(false);
  const [showStepmotherCustomField, setShowStepmotherCustomField] =
    useState(false);
  const [showStepfatherDetails, setShowStepfatherDetails] = useState(false);
  const [showStepfatherCustomField, setShowStepfatherCustomField] =
    useState(false);
  //   const [showStepfather, setShowStepfather] = useState(false);
  //   const [showSiblings, setShowSiblings] = useState(false);
  //   const [showDivorce, setShowDivorce] = useState(false);
  //   const [showOverprotection, setShowOverprotection] = useState(false);

  const handleOptionChangeMother = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowStepmotherCustomField(event.target.value === "ваш вариант");
    setValue("parentFamily.stepmother.rating", event.target.value);
  };

  const handleOptionChangeFather = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setShowStepfatherCustomField(event.target.value === "ваш вариант");
    setValue("parentFamily.stepfather.rating", event.target.value);
  };

  const hasStepmother = watch("parentFamily.hasStepmother");

  useEffect(() => {
    if (hasStepmother === "да") {
      setValue("parentFamily.stepmother", {
        rating:
          "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
        yearsTogether: 0,
        comment: undefined,
      });
    } else {
      setValue("parentFamily.stepmother", undefined);
    }
  }, [hasStepmother, setValue]);

  const hasStepfather = watch("parentFamily.hasStepfather");

  useEffect(() => {
    if (hasStepfather === "да") {
      setValue("parentFamily.stepfather", {
        rating:
          "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
        yearsTogether: 0,
        comment: undefined,
      });
    } else {
      setValue("parentFamily.stepfather", undefined);
    }
  }, [hasStepfather, setValue]);

  return (
    <>
      <h3>Родительская семья</h3>
      <h4>Мать:</h4>
      <label htmlFor="mother.birthYear">Год рождения: </label>
      <Controller
        name="parentFamily.mother.birthYear"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="number"
            id="mother.birthYear"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.mother?.birthYear && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.profession">Профессия: </label>
      <Controller
        name="parentFamily.mother.profession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input id="mother.profession" {...field} />}
      />
      {errors.parentFamily?.mother?.profession && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.ageAtBirth">
        Возраст, в котором она вас родила:
      </label>
      <Controller
        name="parentFamily.mother.ageAtBirth"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            type="number"
            id="mother.ageAtBirth"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.mother?.ageAtBirth && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.totalChildren">
        Всего мамой было рождено детей:
      </label>
      <Controller
        name="parentFamily.mother.totalChildren"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="mother.totalChildren"
            type="number"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.mother?.totalChildren && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="mother.comment">При необходимости ваш комментарий:</label>
      <Controller
        name="parentFamily.mother.comment"
        control={control}
        render={({ field }) => <textarea {...field} />}
      />

      <label htmlFor="motherRelationship.rating">
        Как бы Вы в целом оценили в детстве отношения между Вами и мамой
      </label>
      <Controller
        name="parentFamily.motherRelationship.rating"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="motherRelationship.rating" {...field}>
            {motherRelationshipRatingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />
      {errors.parentFamily?.motherRelationship?.rating && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="motherRelationship.comment">
        При необходимости Ваш комментарий
      </label>
      <Controller
        name="parentFamily.motherRelationship.comment"
        control={control}
        render={({ field }) => (
          <textarea id="motherRelationship.comment" {...field} />
        )}
      />

      <h4>Отец:</h4>
      <label htmlFor="father.birthYear">Год рождения</label>
      <Controller
        name="parentFamily.father.birthYear"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="father.birthYear"
            type="number"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.father?.birthYear && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="father.profession">Профессия</label>
      <Controller
        name="parentFamily.father.profession"
        control={control}
        rules={{ required: true }}
        render={({ field }) => <input {...field} id="father.profession" />}
      />
      {errors.parentFamily?.father?.profession && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="father.ageAtBirth">Возраст, в котором вы родились</label>
      <Controller
        name="parentFamily.father.ageAtBirth"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <input
            id="father.ageAtBirth"
            type="number"
            {...field}
            className="input-age"
          />
        )}
      />
      {errors.parentFamily?.father?.ageAtBirth && (
        <span>Поле обязательно для заполнения</span>
      )}

      <label htmlFor="father.comment">При необходимости Ваш комментарий</label>
      <Controller
        name="parentFamily.father.comment"
        control={control}
        render={({ field }) => <textarea id="father.comment" {...field} />}
      />

      <label htmlFor="fatherRelationship.rating">
        Как бы Вы в целом оценили в детстве отношения между Вами и Отцом
      </label>
      <Controller
        name="parentFamily.fatherRelationship.rating"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select id="fatherRelationship.rating" {...field}>
            {fatherRelationshipRatingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        )}
      />

      <label htmlFor="fatherRelationship.comment">
        При необходимости Ваш комментарий
      </label>
      <Controller
        name="parentFamily.fatherRelationship.comment"
        control={control}
        render={({ field }) => (
          <input id="fatherRelationship.comment" {...field} />
        )}
      />

      <label htmlFor="hasStepmother">Была мачеха</label>
      <div className="radio-container">
        <Controller
          name="parentFamily.hasStepmother"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasStepmother-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowStepmotherDetails(true);
                }}
              />
              <label htmlFor="hasStepmother-yes">Да</label>
              <input
                type="radio"
                id="hasStepmother-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowStepmotherDetails(false);
                }}
              />
              <label htmlFor="hasStepmother-no">Нет</label>
            </>
          )}
        />
      </div>

      {showStepmotherDetails && (
        <>
          <label htmlFor="stepmother.rating">
            Как бы Вы в целом оценили в детстве отношения между Вами и мачехой
          </label>
          <Controller
            name="parentFamily.stepmother.rating"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                id="stepmother.rating"
                {...field}
                onChange={handleOptionChangeMother}
              >
                {stepmotherRelationshipRatingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showStepmotherCustomField && (
            <div>
              <label htmlFor="stepmother.rating.custom">Ваш вариант:</label>
              <Controller
                name="parentFamily.stepmother.rating"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input type="text" {...field} id="stepmother.rating.custom" />
                )}
              />
            </div>
          )}
          {errors.parentFamily?.stepmother?.rating && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="stepmother.comment">
            При необходимости Ваш комментарий
          </label>
          <Controller
            name="parentFamily.stepmother.comment"
            control={control}
            render={({ field }) => (
              <textarea id="stepmother.comment" {...field} />
            )}
          />
          <label htmlFor="stepmother.yearsTogether">
            Сколько лет вы жили вместе с мачехой?
          </label>
          <Controller
            name="parentFamily.stepmother.yearsTogether"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                id="stepmother.yearsTogether"
                type="number"
                {...field}
                className="input-age"
              />
            )}
          />
          {errors.parentFamily?.stepmother?.yearsTogether && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}

      <label htmlFor="hasStepfather">Был отчим</label>
      <div className="radio-container">
        <Controller
          name="parentFamily.hasStepfather"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <>
              <input
                type="radio"
                id="hasStepfather-yes"
                {...field}
                checked={field.value === "да"}
                value="да"
                onChange={() => {
                  field.onChange("да");
                  setShowStepfatherDetails(true);
                }}
              />
              <label htmlFor="hasStepfather-yes">Да</label>
              <input
                type="radio"
                id="hasStepfather-no"
                {...field}
                checked={field.value === "нет"}
                value="нет"
                onChange={() => {
                  field.onChange("нет");
                  setShowStepfatherDetails(false);
                }}
              />
              <label htmlFor="hasStepfather-no">Нет</label>
            </>
          )}
        />
      </div>

      {showStepfatherDetails && (
        <>
          <label htmlFor="stepfather.rating">
            Как бы Вы в целом оценили в детстве отношения между Вами и отчимом
          </label>
          <Controller
            name="parentFamily.stepfather.rating"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select
                id="stepfather.rating"
                {...field}
                onChange={handleOptionChangeFather}
              >
                {stepfatherRelationshipRatingOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {showStepfatherCustomField && (
            <div>
              <label htmlFor="stepfather.rating.custom">Ваш вариант:</label>
              <Controller
                name="parentFamily.stepfather.rating"
                control={control}
                rules={{ required: true }}
                render={({ field }) => (
                  <input type="text" {...field} id="stepfather.rating.custom" />
                )}
              />
            </div>
          )}
          {errors.parentFamily?.stepfather?.rating && (
            <span>Поле обязательно для заполнения</span>
          )}

          <label htmlFor="stepfather.comment">
            При необходимости Ваш комментарий
          </label>
          <Controller
            name="parentFamily.stepfather.comment"
            control={control}
            render={({ field }) => (
              <textarea id="stepfather.comment" {...field} />
            )}
          />
          <label htmlFor="stepfather.yearsTogether">
            Сколько лет вы жили вместе с отчимом?
          </label>
          <Controller
            name="parentFamily.stepfather.yearsTogether"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <input
                id="stepfather.yearsTogether"
                type="number"
                {...field}
                className="input-age"
              />
            )}
          />
          {errors.parentFamily?.stepfather?.yearsTogether && (
            <span>Поле обязательно для заполнения</span>
          )}
        </>
      )}
      {/*
        <FormControlLabel
          control={<Checkbox checked={showDivorce} onChange={handleDivorceChange} />}
          label="Разводы родителей"
        />
        {showDivorce && (
          <>
            <Controller
              name="parentFamily.divorce.ageAtDivorce"
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  label="Ваш возраст на момент развода"
                  type="number"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="parentFamily.divorce.whoLivedWith"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="who-lived-with-label">После развода вы жили с:</InputLabel>
                  <Select
                    labelId="who-lived-with-label"
                    id="who-lived-with"
                    value={value}
                    onChange={onChange}
                  >
                    <MenuItem value="отцом">Отцом</MenuItem>
                    <MenuItem value="матерью">Матерью</MenuItem>
                    <MenuItem value="свой вариант">Свой вариант</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="divorce.emotionalState"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="emotional-state-label">Оцените свое эмоциональное состояние при разводе родителей по шкале от 1 до 10, где 1 это «нейтрально, спокойно», а 10 «максимально болезненно»</InputLabel>
                  <Select
                    labelId="emotional-state-label"
                    id="emotional-state"
                    value={value}
                    onChange={onChange}
                  >
                    {Array.from({ length: 10 }, (_, i) => i + 1).map((number) => (
                      <MenuItem key={number} value={number}>{number}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </>
        )}

        <FormControlLabel
          control={<Checkbox checked={showSiblings} onChange={handleSiblingsChange} />}
          label="Были ли у вас братья и сестры"
        />
        {showSiblings && (
          <>
            <Controller
              name="parentFamily.siblings.order"
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  label="По порядку рождения Вы были №"
                  type="number"
                  onChange={onChange}
                  value={value}
                />
              )}
            />
            <Controller
              name="parentFamily.siblings.totalSiblings"
              control={control}
              render={({ field: { onChange, value } }) => (
                <input
                  label="из"
                  type="number"
                  onChange={onChange}
                  value={value}
                />
              )}
            />

            <SiblingForm />

            <Controller
              name="parentFamily.siblings.childhoodRelationship"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="childhood-relationship-label">В детстве я был:</InputLabel>
                  <Select
                    labelId="childhood-relationship-label"
                    id="childhood-relationship"
                    value={value}
                    onChange={onChange}
                  >
                    <MenuItem value="чаще жертвой агрессии братьев/сестер">Чаще жертвой агрессии братьев/сестер</MenuItem>
                    <MenuItem value="чаще агрессором по отношению к ним">Чаще агрессором по отношению к ним</MenuItem>
                    <MenuItem value="в хороших дружеских отношениях">В хороших дружеских отношениях</MenuItem>
                    <MenuItem value="практически не общались">Практически не общались</MenuItem>
                    <MenuItem value="жили раздельно / в разных семьях">Жили раздельно / в разных семьях</MenuItem>
                    <MenuItem value="ваш вариант">Ваш вариант</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
            <Controller
              name="parentFamily.siblings.currentRelationship"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="current-relationship-label">Как вы оцениваете свои текущие отношения с братьями и сестрами?</InputLabel>
                  <Select
                    labelId="current-relationship-label"
                    id="current-relationship"
                    value={value}
                    onChange={onChange}
                  >
                    <MenuItem value="не общаемся, в конфликте">Не общаемся, в конфликте</MenuItem>
                    <MenuItem value="не общаемся, равнодушен">Не общаемся, равнодушен</MenuItem>
                    <MenuItem value="общаемся по поводу и праздникам">Общаемся по поводу и праздникам</MenuItem>
                    <MenuItem value="в хороших дружеских отношениях">В хороших дружеских отношениях</MenuItem>
                    <MenuItem value="ваш вариант">Ваш вариант</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </>
        )}

        <FormControlLabel
          control={<Checkbox checked={showOverprotection} onChange={handleOverprotectionChange} />}
          label="В детстве родители меня гиперопекали (принимали решения за меня, активно вмешивались в повседневную жизнь, указывали мне что есть, носить, каким спортом заниматься, с кем дружить и т.д.)"
        />
        {showOverprotection && (
          <>
            <Controller
              name="parentFamily.parentalOverprotection.perception"
              control={control}
              render={({ field: { onChange, value } }) => (
                <FormControl fullWidth>
                  <InputLabel id="overprotection-perception-label">Как вы воспринимали гиперопеку родителей?</InputLabel>
                  <Select
                    labelId="overprotection-perception-label"
                    id="overprotection-perception"
                    value={value}
                    onChange={onChange}
                  >
                    <MenuItem value="очень негативно, как сильное давление, ограничение свободы">Очень негативно, как сильное давление, ограничение свободы</MenuItem>
                    <MenuItem value="скорее негативно">Скорее негативно</MenuItem>
                    <MenuItem value="нейтрально">Нейтрально</MenuItem>
                    <MenuItem value="скорее положительно">Скорее положительно</MenuItem>
                    <MenuItem value="очень положительно, как любовь и заботу">Очень положительно, как любовь и заботу</MenuItem>
                  </Select>
                </FormControl>
              )}
            />
          </>
        )}

        <Button type="submit">Отправить</Button>
      </form>
    </FormProvider>
  );
};

interface SiblingFormProps {
  control: any;
}

const SiblingForm = ({ control }: SiblingFormProps) => {
  const { control: parentControl, register, setValue } = useFormContext();

  const handleSiblingAdd = () => {
    setValue('siblings.siblingsInfo', [
      ...parentControl.getValues('siblings.siblingsInfo'),
      { relation: 'brother', ageDifference: '', profession: '' },
    ]);
  };

  const handleSiblingRemove = (index: number) => {
    setValue('siblings.siblingsInfo', parentControl.getValues('siblings.siblingsInfo').filter((_, i) => i !== index));
  };

  return (
    <>
      <h3>Добавить братьев и сестер:</h3>
      {parentControl.getValues('siblings.siblingsInfo').map((sibling, index) => (
        <div key={index}>
          <Controller
            name={`siblings.siblingsInfo.${index}.relation`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth>
                <InputLabel id="sibling-relation-label">Сестра/брат</InputLabel>
                <Select
                  labelId="sibling-relation-label"
                  id="sibling-relation"
                  value={value}
                  onChange={onChange}
                >
                  <MenuItem value="brother">Брат</MenuItem>
                  <MenuItem value="sister">Сестра</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name={`siblings.siblingsInfo.${index}.ageDifference`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <FormControl fullWidth>
                <InputLabel id="sibling-age-difference-label">Разница в возрасте</InputLabel>
                <Select
                  labelId="sibling-age-difference-label"
                  id="sibling-age-difference"
                  value={value}
                  onChange={onChange}
                >
                  <MenuItem value="младше меня на">Младше меня на</MenuItem>
                  <MenuItem value="старше меня на">Старше меня на</MenuItem>
                </Select>
              </FormControl>
            )}
          />
          <Controller
            name={`siblings.siblingsInfo.${index}.ageDifference`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                label="лет"
                type="number"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Controller
            name={`siblings.siblingsInfo.${index}.profession`}
            control={control}
            render={({ field: { onChange, value } }) => (
              <input
                label="Его/ее профессия"
                onChange={onChange}
                value={value}
              />
            )}
          />
          <Button variant="outlined" onClick={() => handleSiblingRemove(index)}>Удалить</Button>
        </div>
      ))}
      <Button variant="contained" onClick={handleSiblingAdd}>Добавить</Button> */}
    </>
  );
};

export default ParentFamilyForm;
