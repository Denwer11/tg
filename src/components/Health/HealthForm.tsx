import React from "react";
import HealthProfileFields from "./HealthProfile/HealthProfileFields";
import SurgeryFields from "./Surgery/SurgeryFields";
import DietAndMedicationsFields from "./DietAndMedications/DietAndMedicationsFields";
import ProblemsFields from "./Problems/ProblemsFields";
import ActivityFields from "./Activity/ActivityFields";
import RatingAndOtherFields from "./RatingAndOther/RatingAndOtherFields";
const HealthForm: React.FC = () => {
  return (
    <>
      <h3>Здоровье</h3>
      <HealthProfileFields />
      <SurgeryFields />
      <DietAndMedicationsFields />
      <ProblemsFields />
      <ActivityFields />
      <RatingAndOtherFields />
    </>
  );
};

export default HealthForm;
