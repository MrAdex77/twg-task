import { NativeStackScreenProps } from "@react-navigation/native-stack";
import type { Routes } from "./routes";

export type LogOutStackParamList = {
  [Routes.SignUp]: undefined;
  [Routes.SignIn]: undefined;
};

export type RootStackParamList = {
  [Routes.Rooms]: undefined;
  [Routes.Chat]: { id: string };
  [Routes.Dev]: undefined;
};

export type SignUpScreenProps = NativeStackScreenProps<LogOutStackParamList, Routes.SignUp>;
export type SignInScreenProps = NativeStackScreenProps<LogOutStackParamList, Routes.SignIn>;
export type RoomsScreenProps = NativeStackScreenProps<RootStackParamList, Routes.Rooms>;
export type ChatScreenProps = NativeStackScreenProps<RootStackParamList, Routes.Chat>;
