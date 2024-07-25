import type { StyleProp, ViewStyle } from "react-native";

export type HeaderProps = {
  isSearchButton?: boolean;
  isBackButton?: boolean;
  style?: StyleProp<ViewStyle>;
  isTranslucent?: boolean;
  searchQuery?: string;
  isAdditionalHeaderProps?: boolean;
};
