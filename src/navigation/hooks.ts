import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { LogOutStackParamList, RootStackParamList } from "./types";

export const useLogOutNavigation = () => useNavigation<NativeStackNavigationProp<LogOutStackParamList>>();
export const useLogInNavigation = () => useNavigation<NativeStackNavigationProp<RootStackParamList>>();
