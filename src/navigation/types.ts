import type { RouteProp } from "@react-navigation/native";

import { NativeStackNavigationProp, NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import type { Routes } from "./routes";

export type LogOutStackParamList = {
  [Routes.LoginScreen]: undefined;
};

export type RootStackParamList = {
  [Routes.RoomsScreen]: undefined;
  [Routes.ChatScreen]: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> = NativeStackScreenProps<RootStackParamList, T>;

export type LogOutNavProps<T extends keyof LogOutStackParamList> = NativeStackNavigationProp<LogOutStackParamList, T>;
export type LogOutRouteProps<T extends keyof LogOutStackParamList> = RouteProp<LogOutStackParamList, T>;
