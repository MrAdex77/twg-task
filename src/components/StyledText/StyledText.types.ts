import type { StyleProp, TextStyle, TextProps as TxtProp } from "react-native";

export interface StyledTextProps extends TxtProp {
  style?: StyleProp<TextStyle>;
}
