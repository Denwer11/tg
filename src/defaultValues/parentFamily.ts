export const defaultMother = {
  birthYear: undefined,
  profession: undefined,
  ageAtBirth: undefined,
  totalChildren: undefined,
  comment: undefined,
};

export const defaultMotherRelationship = {
  rating: "не жила со мной, я воспитывался другим человеком",
  comment: undefined,
};

export const defaultFather = {
  birthYear: undefined,
  profession: undefined,
  ageAtBirth: undefined,
  comment: undefined,
};

export const defaultFatherRelationship = {
  rating: "не жил со мной, я воспитывался другим человеком",
  comment: undefined,
};

export const defaultStepmother = {
  rating:
    "в моем детстве жили вместе, но громко ругались или имело место эмоциональное или физическое насилие",
  yearsTogether: undefined,
  comment: undefined,
};

export const defaultStepfather = {
  rating: undefined,
  yearsTogether: undefined,
  comment: undefined,
};

export const defaultDivorce = {
  ageAtDivorce: undefined,
  whoLivedWith: "отцом",
  emotionalState: 1,
};

export const defaultSiblingsInfo = {
  relation: "брат",
  ageDifference: undefined,
  profession: undefined,
};

export const defaultSiblings = {
  order: undefined,
  totalSiblings: undefined,
  siblingsInfo: [defaultSiblingsInfo],
  childhoodRelationship: "чаще жертвой агрессии братьев/сестер",
  currentRelationship: "не общаемся, в конфликте",
};

export const defaultParentalOverprotection = {
  overprotected: false,
  perception: undefined,
};
