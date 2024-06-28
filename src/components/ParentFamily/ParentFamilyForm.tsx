import React from "react";
import MotherField from "./Mother/MotherFields";
import FatherFields from "./Father/FatherFields";
import StepmotherFields from "./Stepmother/StepmotherFields";
import StepfatherFields from "./Stepfather/StepfatherFields";
import Divorce from "./Divorce/Divorce";
import SiblingsFields from "./Siblings/SiblingsFields";

const ParentFamilyForm: React.FC = () => {
  return (
    <>
      <h3>Родительская семья</h3>

      <MotherField />
      <FatherFields />
      <StepmotherFields />
      <StepfatherFields />
      <Divorce />
      <SiblingsFields />

      {/*

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
