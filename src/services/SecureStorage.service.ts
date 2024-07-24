import * as SecureStore from "expo-secure-store";
import { SecureStoreOptions } from "expo-secure-store";

export enum StorageKeys {
  ACESS_TOKEN = "accessToken",
  REFRESH_TOKEN = "REFRESH_TOKEN",
}

export interface Tokens {
  accessToken: string;
  refreshToken: string;
}

export const SENSITIVE_INFO_CONFIG: SecureStoreOptions = {
  keychainService: "twg-task-1234",
};

const SecureStorageService = {
  saveTokensToLocal: async ({ refreshToken, accessToken }: Tokens) => {
    await SecureStore.setItemAsync(StorageKeys.ACESS_TOKEN, accessToken, SENSITIVE_INFO_CONFIG);
    await SecureStore.setItemAsync(StorageKeys.REFRESH_TOKEN, refreshToken, SENSITIVE_INFO_CONFIG);
  },

  getTokensFromLocal: async (): Promise<Tokens> => {
    const accessToken = await SecureStore.getItemAsync(StorageKeys.ACESS_TOKEN, SENSITIVE_INFO_CONFIG);
    const refreshToken = await SecureStore.getItemAsync(StorageKeys.REFRESH_TOKEN, SENSITIVE_INFO_CONFIG);

    return { accessToken, refreshToken };
  },

  removeTokensFromLocal: async () => {
    await SecureStore.deleteItemAsync(StorageKeys.ACESS_TOKEN, SENSITIVE_INFO_CONFIG);
    await SecureStore.deleteItemAsync(StorageKeys.REFRESH_TOKEN, SENSITIVE_INFO_CONFIG);
  },
};

export default SecureStorageService;
