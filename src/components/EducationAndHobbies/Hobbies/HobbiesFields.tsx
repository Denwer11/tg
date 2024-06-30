import React from "react";
import SkillsFields from "./SkillsFields";
import RestFields from "./RestFields";
import ReadingFields from "./ReadingFields";

const HobbiesFields: React.FC = () => {

  return (
    <>
      <SkillsFields />
      <RestFields />
      <ReadingFields />
    </>
  );
};

export default HobbiesFields;
