export type ParentFamily = {
  mother: {
    birthYear: number;
    profession: string;
    ageAtBirth: number;
    totalChildren: number;
    comment?: string;
  };
  motherRelationship: {
    rating: string;
    comment?: string;
  };
  father: {
    birthYear: number;
    profession: string;
    ageAtBirth: number;
    comment?: string;
  };
  fatherRelationship: {
    rating: string;
    comment?: string;
  };
  hasStepmother: string;
  stepmother?: {
    rating: string;
    yearsTogether: number;
    comment?: string;
  };
  hasStepfather: string;
  stepfather?: {
    rating: string;
    yearsTogether: number;
    comment?: string;
  };
  hasDivorce: string;
  divorce: {
    ageAtDivorce: number;
    whoLivedWith: string;
    emotionalState: number;
  };
  hasSiblings: string;
  siblings?: Array<{
    order: number;
    totalSiblings: number;
    siblingsInfo: {
      relation: "брат" | "сестра";
      ageDifference: number;
      profession: string;
    };
    childhoodRelationship: string;
    currentRelationship: string;
  }>;
  hasParentalOverprotection: string;
  parentalOverprotection: {
    overprotected: boolean;
    perception: string;
  };
};
