// import React, { useState } from "react";
// import { useController, useForm, useFormContext } from "react-hook-form";
// import { FormData } from "../../pages/Form";

// const HealthForm: React.FC = () => {
//   const {
//     control,
//     formState: { errors },
//     setValue,
//   } = useFormContext<FormData>();

//   const {
//     field: { value: height, onChange: onHeightChange },
//   } = useController<FormData>({
//     name: "health.height",
//     defaultValue: 170,
//   });

//   const {
//     field: { value: weight, onChange: onWeightChange },
//   } = useController<FormData>({
//     name: "health.weight",
//     defaultValue: 70,
//   });

//   return (
//     <>
//       <h3>Здоровье</h3>
//       <label htmlFor="height">Рост (см):</label>
//       <input
//         type="range"
//         id="height"
//         min="150"
//         max="210"
//         control={control}
//         rules={{ required: true }}
//         value={height}
//         onChange={onHeightChange}
//       />
//       {errors.health?.height && <span>Поле обязательно для заполнения</span>}
//       <span>{height} см</span>

//       <label htmlFor="weight">Вес (кг):</label>
//       <input
//         type="range"
//         id="weight"
//         min="40"
//         max="150"
//         control={control}
//         rules={{ required: true }}
//         value={weight}
//         onChange={onWeightChange}
//       />
//       {errors.health?.weight && <span>Поле обязательно для заполнения</span>}
//       <span>{weight} кг</span>
//     </>
//   );
// };

// export default HealthForm;
