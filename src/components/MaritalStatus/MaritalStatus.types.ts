export type CurrentMaritalStatus = {
  maritalStatus: string;
  partnerAge?: number;
  partnerOccupation?: string;
  partnerProfession?: string;
  otherMaritalStatus?: string;
  otherOccupation?: string;
  relationshipDuration: string;
  relationshipQuality: string;
  longestRelationshipDuration: number;
  relationshipEndReason?: string;
  numberOfRelationships: number;
  hasChildren: string;
  children?: Array<{
    gender: "сын" | "дочь";
    age: number;
  }>;
  adoptedChildren?: Array<{
    gender: "сын" | "дочь";
    age: number;
    adoptionAge: number;
  }>;
  relationshipWithChildren?: string;
  livingConditions: string;
  livingConditionsSatisfaction: string;
};
