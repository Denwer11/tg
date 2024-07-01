// import React from "react";
// import { Controller, useController, useFormContext } from "react-hook-form";
// import { FormData } from "../../pages/Form";

// const HealthForm: React.FC = () => {
//   const {
//     control,
//     formState: { errors },
//   } = useFormContext<FormData>();

//   const {
//     field: { value: heightValue, onChange: onHeightChange },
//   } = useController<FormData>({
//     name: "health.height",
//     defaultValue: 170,
//   });

//   const height = typeof heightValue === "number" ? heightValue : 170;

//   const {
//     field: { value: weightValue, onChange: onWeightChange },
//   } = useController<FormData>({
//     name: "health.weight",
//     defaultValue: 70,
//   });

//   const weight = typeof weightValue === "number" ? weightValue : 70;

//   return (
//     <>
//       <h3>Здоровье</h3>
//       <label htmlFor="height">Рост (см):</label>
//       <Controller
//         name="health.height"
//         control={control}
//         rules={{ required: true }}
//         render={({ field }) => (
//           <input
//             id="height"
//             type="range"
//             min={140}
//             max={210}
//             {...field}
//             onChange={onHeightChange}
//           ></input>
//         )}
//       />
//       {errors.health?.height && <span>Поле обязательно для заполнения</span>}
//       <span>{height} см</span>

//       <label htmlFor="weight">Вес (кг):</label>
//       <Controller
//         name="health.weight"
//         control={control}
//         rules={{ required: true }}
//         render={({ field }) => (
//           <input
//             id="weight"
//             type="range"
//             min={30}
//             max={150}
//             {...field}
//             onChange={onWeightChange}
//           ></input>
//         )}
//       />
//       {errors.health?.weight && <span>Поле обязательно для заполнения</span>}
//       <span>{weight} кг</span>
//     </>
//   );
// };

// export default HealthForm;
