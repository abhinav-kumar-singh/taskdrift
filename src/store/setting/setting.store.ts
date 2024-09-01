import { create } from "zustand";
import {
  getItem,
  setItem,
} from "../../common/component-lib/storage-manager/storage";
import { StorageKey } from "../../common/component-lib/storage-manager/storage.types";
import {
  ISelectedSettingOption,
  ISettingConfig,
  ISettingStore,
  PricingBucket,
  SETTINGS,
  Theme,
} from "./setting.type";

const userSettings = getItem(StorageKey.SETTING) as ISettingConfig;

const initialState = {
  settingConfig: {
    ...userSettings,
    selectedSettingOption: userSettings?.selectedSettingOption || {
      title: "Pricing",
      value: SETTINGS.PRICING,
      id: 2,
    },
    pricing: {
      ...userSettings?.pricing,
      selectedPriceBucket:
        userSettings?.pricing?.selectedPriceBucket || PricingBucket.FREE,
    },
    personalizations: {
      ...userSettings?.personalizations,
      theme: userSettings?.personalizations?.theme || Theme.LIGHT,
    },
  },
};

const useSettingStore = create<ISettingStore>((set) => ({
  ...initialState,

  setPricing: (selectedPricing: PricingBucket): void => {
    set((state) => {
      state.settingConfig.pricing.selectedPriceBucket = selectedPricing;
      setItem(StorageKey.SETTING, state.settingConfig);
      return { ...state };
    });
  },

  setTheme: (selectedTheme: Theme): void => {
    set((state) => {
      state.settingConfig.personalizations.theme = selectedTheme;
      setItem(StorageKey.SETTING, state.settingConfig);
      return { ...state };
    });
  },

  setSelectedSettingOption: (option: ISelectedSettingOption): void => {
    set((state) => {
      state.settingConfig.selectedSettingOption = option;
      setItem(StorageKey.SETTING, state.settingConfig);
      return { ...state };
    });
  },
}));

export { useSettingStore };
