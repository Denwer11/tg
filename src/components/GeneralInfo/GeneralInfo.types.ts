export type GeneralInfo = {
  fullName: string;
  gender: "male" | "female";
  dateOfBirth: string;
  countryCity: CountryCity;
  contacts: Contacts;
};

export type CountryCity = {
  country: string;
  city: string;
};

export type Contacts = {
  phone?: string;
  telegram?: string;
  email?: string;
};
