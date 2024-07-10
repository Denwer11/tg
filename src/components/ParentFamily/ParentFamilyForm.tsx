import React from "react";
import MotherField from "./Mother/MotherFields";
import FatherFields from "./Father/FatherFields";
import StepmotherFields from "./Stepmother/StepmotherFields";
import StepfatherFields from "./Stepfather/StepfatherFields";
import Divorce from "./Divorce/Divorce";
import SiblingsFields from "./Siblings/SiblingsFields";
import ParentalOverprotectionFields from "./ParentalOverprotection/ParentalOverprotectionFields";
import RelationshipWithParentsFields from "./RelationshipWithParents/RelationshipWithParentsFields";

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
      <ParentalOverprotectionFields />
      <RelationshipWithParentsFields />
    </>
  );
};

export default ParentFamilyForm;
