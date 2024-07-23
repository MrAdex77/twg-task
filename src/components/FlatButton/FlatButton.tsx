import React, { TouchableOpacity } from "react-native";

import { StyledText } from "@components/StyledText/StyledText";
import type { FlatButtonProps } from "./FlatButton.types";

const FlatButton = ({ onPress, textStyle, label, ...props }: FlatButtonProps) => {
  return (
    <TouchableOpacity
      {...props}
      activeOpacity={0.8}
      hitSlop={{
        top: 16,
        bottom: 16,
        left: 16,
        right: 16,
      }}
      onPress={onPress}>
      <StyledText style={textStyle}>{label}</StyledText>
    </TouchableOpacity>
  );
};

export default FlatButton;
