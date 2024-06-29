export type ParentFamily = {
  mother: Mother;
  motherRelationship: MtherRelationship;
  father: Father;
  fatherRelationship: FatherRelationship;
  hasStepmother: string;
  stepmother?: Stepmother;
  hasStepfather: string;
  stepfather?: Stepfather;
  hasDivorce: string;
  divorce?: Divorce;
  hasSiblings: string;
  siblings?: Sibling;
  hasParentalOverprotection: string;
  parentalOverprotection?: string;
  relationshipParentsChildhood: RelationshipParentsChildhood;
  relationshipParentsNow: RelationshipParentsNow;
  communication: string;
  hasDeaths: string;
  deaths?: Deaths;
};

export type Deaths = {
  whoDied: string;
  myAge: number;
  copingWithLoss: string;
};

export type Mother = {
  birthYear: number;
  profession: string;
  ageAtBirth: number;
  totalChildren: number;
  comment?: string;
};

export type MtherRelationship = {
  rating: string;
  comment?: string;
};

export type Father = {
  birthYear: number;
  profession: string;
  ageAtBirth: number;
  comment?: string;
};

export type FatherRelationship = {
  rating: string;
  comment?: string;
};

export type Stepmother = {
  rating: string;
  yearsTogether: number;
  comment?: string;
};

export type Stepfather = {
  rating: string;
  yearsTogether: number;
  comment?: string;
};

export type Divorce = {
  ageAtDivorce: number;
  whoLivedWith: string;
  emotionalState: number;
};

export type Sibling = {
  order: number;
  totalSiblings: number;
  siblingsInfo: SiblingInfo[];
  childhoodRelationship: string;
  currentRelationship: string;
};

export type RelationshipParentsChildhood = {
  relationshipParents: string;
  comment?: string;
};

export type RelationshipParentsNow = {
  relationshipParents: string;
  comment?: string;
};

export type SiblingInfo = {
  relation: "брат" | "сестра";
  ageDifference: number;
  profession: string;
};
