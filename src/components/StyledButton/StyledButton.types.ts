import type { StyleProp, TextStyle, TouchableOpacityProps } from "react-native";

interface StyledButtonProps extends TouchableOpacityProps {
  label: string;
  onPress: () => void;
  disabled?: boolean;
  labelStyles?: StyleProp<TextStyle>;
  isLoading?: boolean;
}

export type { StyledButtonProps };
