import { defaultDivorce, defaultFather, defaultFatherRelationship, defaultMother, defaultMotherRelationship, defaultStepfather, defaultStepmother } from './parentFamily';

export const defaultContacts = {
  phone: undefined,
  telegram: undefined,
  email: undefined,
};

export const defaultCountryCity = {
  country: undefined,
  city: undefined,
};

export const defaultGeneralInfo = {
  fullName: undefined,
  gender: "мужской",
  dateOfBirth: undefined,
  countryCity: defaultCountryCity,
  contacts: defaultContacts,
};

export const allValues = {
  generalInfo: {
    gender: "мужской" as "мужской" | "женский",
    countryCity: defaultCountryCity,
    contacts: defaultContacts,
  },

  currentMaritalStatus: {
    maritalStatus: "живу без партнера",
    relationshipDuration: "меньше года",
    relationshipQuality: "очень хорошие",
    relationshipEndReason: "разрыв по инициативе партнера",
    hasChildren: "нет",
    children: [{ gender: "сын" as "сын" | "дочь" }],
  },

  parentFamily: {
    mother: defaultMother,
    motherRelationship: defaultMotherRelationship,
    father: defaultFather,
    fatherRelationship: defaultFatherRelationship,
    hasStepmother: "нет",
    stepmother: defaultStepmother,
    hasStepfather: "нет",
    stepfather: defaultStepfather,
    hasDivorce: "нет",
    divorce: defaultDivorce,
    hasSiblings: "нет",
    siblings: {
      childhoodRelationship: "чаще жертвой агрессии братьев/сестер",
      currentRelationship: "не общаемся, в конфликте",
    },
    hasParentalOverprotection: "нет",
    parentalOverprotection:
      "очень негативно, как сильное давление, ограничение свободы",
    relationshipParentsChildhood: {
      relationshipParents: "жили отдельно и не встречались",
    },
    relationshipParentsNow: {
      relationshipParents:
        "Я зависим от их мнения, они активно участвуют в моей жизни (я согласую свои решения, они принимают участие в моих семейных делах, например решениях об отпуске, тратах, детях, я с ними советуюсь по большинству вопросов и нуждаюсь в их одобрении и т.д.)",
    },
    communication: "ежедневно",
    hasDeaths: "нет",
    deaths: {
      whoDied: "брат" as "брат" | "сестра",
      myAge: 0,
      copingWithLoss: "получали поддержку от семьи и друзей",
    },
  },

  educationAndHobbies: {
    currentProfessionSatisfaction: "очень удовлетворен",
    longestProfessionSatisfaction: "очень удовлетворен",
    isCurrentlyLearning: "нет",
    hobbyFrequency: "ежедневно",
    expertiseFrequency: "ежедневно",
    restFrequency: "ежедневно",
    booksAt10: "0-9",
    readingFrequencyAt10: "ежедневно",
    currentReadingFrequency: "ежедневно",
  },

  preferencesAndEnvironment: {
    wallDecor: "Искусство (картины, художественные фотографии)",
    preferredFurniture: "Классическую",
    dominantColors: "Яркие и насыщенные",
    adviceSource: "Интернет",
    transportAudio: "Свой плейлист",
    preferredChannels: "Новости",
    aloneTimeActivities: "Полежать на диване, принять ванну и т.п. релакс",
    preferredSports: "Индивидуальные виды спорта (бег, плавание)",
    socialMediaFrequency: "Каждый день",
    socialMediaDetox:
      "Это помогает мне быть постоянно на связи и в курсе событий и мне это не мешает",
  },

  health: {
    height: 170,
    weight: 80,
    bloodType: "I",
    hand: "П",
    birthConditions: "естественным путем",
    hasSurgery: "нет",
    hasIlness: "нет",
    feelingHelplessFrequency: "почти никогда",
    hasDietRestrictions: "нет",
    hasTakingMedication: "нет",
    hasLostConsciousness: "нет",
    hasPsychiatricHelp: "нет",
    hasAlcoholConsumption: "нет",
    alcoholConsumption: {
      alcoholConsumptionWeekly: 0,
      alcoholConsumptionDynamic: "увеличилось",
    },
    hasSmoking: "нет",
    smoking: { smokingDynamic: "увеличилось" },
    hasOtherDrugs: "нет",
    otherDrugs: {
      otherDrugsDynamic: "увеличилось / добавилось",
    },
    hasFamilyHistory: "нет",
    physicalExercises: {},
    hasDietRegimen: "нет",
    dietRegimen: { biggestMeal: 0 },
    healthRating: 0,
    immunityRating: 0,
  },
};
