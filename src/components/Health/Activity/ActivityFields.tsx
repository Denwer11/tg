import React from "react";
import PhysicalExercisesFields from "./PhysicalExercisesFields";
import SleepFields from "./SleepFields";
import DietRegimenFields from "./DietRegimenFields";

const ActivityFields: React.FC = () => {
  return (
    <>
      <PhysicalExercisesFields />
      <SleepFields />
      <DietRegimenFields />
    </>
  );
};

export default ActivityFields;
