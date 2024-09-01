enum PricingBucket {
  FREE = "Free",
  PREMIUM = "Premium",
  ENTERPRISE = "Enterprise",
}

enum Language {
  EN = "en",
  HI = "hi",
  FR = "fr",
  ES = "es",
  DE = "de",
}

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface IPricing {
  selectedPriceBucket: PricingBucket;
}

interface IPersonalizations {
  theme: Theme;
}

enum SETTINGS {
  PERSONALIZATIONS = "personalizations",
  PRICING = "pricing",
  ABOUT_US = "about_us",
  CONTACT_US = "contact_us",
}

interface ISelectedSettingOption {
  title: string;
  value: SETTINGS;
  id: number;
}

interface ISettingConfig {
  pricing: IPricing;
  personalizations: IPersonalizations;
  selectedSettingOption: ISelectedSettingOption;
}

interface ISettingStore {
  settingConfig: ISettingConfig;
  setPricing: (bucket: PricingBucket) => void;
  setTheme: (selectedTheme: Theme) => void;
  setSelectedSettingOption: (option: ISelectedSettingOption) => void;
}

export type {
  ISettingConfig,
  ISettingStore,
  ISelectedSettingOption,
  IPersonalizations,
  IPricing,
};

export { SETTINGS, Theme, Language, PricingBucket };
