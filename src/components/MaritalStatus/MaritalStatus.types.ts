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
    gender?: string;
    age?: number;
  }>;
  adoptedChildren?: Array<{
    gender?: string;
    age?: number;
    adoptionAge?: number;
  }>;
  relationshipWithChildren?: string;
  livingConditions: string;
  livingConditionsSatisfaction: string;
};
