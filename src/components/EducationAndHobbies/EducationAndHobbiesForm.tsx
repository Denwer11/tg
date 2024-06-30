import React from "react";
import ProfessioFields from "./Profession/ProfessioFields";
import HobbiesFields from "./Hobbies/HobbiesFields";

const EducationAndHobbiesForm: React.FC = () => {
  return (
    <>
      <h3>Образование и хобби</h3>
      <ProfessioFields />
      <HobbiesFields />
    </>
  );
};

export default EducationAndHobbiesForm;
