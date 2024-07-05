export type Health = {
  height: number;
  weight: number;
  bloodType: string;
  hand: string;
  birthConditions: string;
  hasSurgery: string;
  surgery?: Surgery[];
  hasIlness: string;
  ilness?: Ilness[];
  feelingHelplessFrequency: string;
  hasDietRestrictions: string;
  dietRestrictions?: string;
  hasTakingMedication: string;
  takingMedication?: string;
  hasLostConsciousness: string;
  lostConsciousness?: LostConsciousness;
  hasPsychiatricHelp: string;
  psychiatricHelp?: PsychiatricHelp;
  hasAlcoholConsumption: string;
  alcoholConsumption?: AlcoholConsumption;
  hasSmoking: string;
  smoking?: Smoking;
  hasOtherDrugs: string;
  otherDrugs?: OtherDrugs;
  hasFamilyHistory: string;
  familyHistory?: FamilyHistory;
  physicalExercises: PhysicalExercises;
  sleep: Sleep;
  hasDietRegimen: string;
  dietRegimen?: DietRegimen;
  healthRating: number;
  immunityRating: number;
  pets?: string;
  additionalInfo?: string;
};

export type Surgery = {
  surgeryName: string;
  age: number;
};

export type Ilness = { name: string; score: { value: number; label: string } };

export type LostConsciousness = {
  lostConsciousnessReason: string;
  lostConsciousnessFrequency: string;
  lostConsciousnessAge: number;
};

export type PsychiatricHelp = {
  psychiatricHelpReason: string;
  psychiatricHelpFrequency: string;
  psychiatricHelpAge: number;
  psychiatricDiagnosis: string;
};

export type AlcoholConsumption = {
  alcoholConsumptionYears: number;
  alcoholConsumptionStartAge: number;
  alcoholConsumptionWeekly: number;
  alcoholConsumptionDynamic: string;
};

export type Smoking = {
  smokingQuantity: number;
  smokingDynamic: string;
};

export type OtherDrugs = {
  otherDrugsDetails: string;
  otherDrugsDynamic: string;
};

export type FamilyHistory = {
  fatherDiagnosis?: string;
  motherDiagnosis?: string;
  siblingsDiagnosis?: string;
  grandparentsDiagnosis?: string;
};

export type PhysicalExercises = {
  exerciseHours: number;
  walkingHours?: number;
  stepsPerDay?: number;
};

export type Sleep = {
  wakeUpTimePreferred: string;
  wakeUpTimeActual: string;
  sleepTimePreferred: string;
  sleepTimeActual: string;
  sleepLatency: string;
};

export type DietRegimen = {
  mealTimes: string[];
  biggestMeal: number;
};
