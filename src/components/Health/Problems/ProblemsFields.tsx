import React from "react";
import LostConsciousnessFields from "./LostConsciousnessFields";
import PsychiatristFields from "./PsychiatristFields";
import AlcoholFields from "./AlcoholFields";
import SmokingFields from "./SmokingFields";
import DrugsFields from "./DrugsFields";
import FamilyHistoryFields from "./FamilyHistoryFields";

const ProblemsFields: React.FC = () => {
  return (
    <>
      <LostConsciousnessFields />
      <PsychiatristFields />
      <AlcoholFields />
      <SmokingFields />
      <DrugsFields />
      <FamilyHistoryFields />
    </>
  );
};

export default ProblemsFields;
