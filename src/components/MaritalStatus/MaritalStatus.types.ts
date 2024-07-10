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
  relationshipEndReason: string;
  numberOfRelationships: number;
  hasChildren: string;
  children?: Child[];
  adoptedChildren?: AdoptedChild[];
  relationshipWithChildren?: string;
  livingConditions: string;
  livingConditionsSatisfaction: string;
};

export type Child = {
  gender: "сын" | "дочь";
  age: number;
};

export type AdoptedChild = {
  gender: "сын" | "дочь";
  age: number;
  adoptionAge: number;
};
