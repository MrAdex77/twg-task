import type { StyleProp, TextStyle, TouchableOpacity } from "react-native";

export interface FlatButtonProps extends Partial<TouchableOpacity> {
  textStyle?: StyleProp<TextStyle>;
  label: string;
  onPress: () => void;
}
