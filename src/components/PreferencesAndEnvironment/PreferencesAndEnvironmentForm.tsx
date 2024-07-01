import React from "react";
import HouseFields from "./House/HouseFields";
import LifestyleSurveyFields from "./LifestyleSurvey/LifestyleSurveyFields";
import PreferenceFields from "./Preference/PreferenceFields";
import SocialMediaFields from "./SocialMedia/SocialMediaFields";

const PreferencesAndEnvironmentForm: React.FC = () => {
  return (
    <>
      <h3>Личные предпочтения и организация среды</h3>
      <HouseFields />
      <LifestyleSurveyFields />
      <PreferenceFields />
      <SocialMediaFields />
    </>
  );
};

export default PreferencesAndEnvironmentForm;
