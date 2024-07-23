import type { StyledTextProps } from "components/StyledText/StyledText.types";
import React from "react";
import { Text } from "react-native";
import styles from "./StyledText.styles";

export const StyledText = ({ children, style, ...rest }: StyledTextProps) => {
  return (
    <Text {...rest} style={[styles.text, style]} allowFontScaling={false}>
      {children}
    </Text>
  );
};
