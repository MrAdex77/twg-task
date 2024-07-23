import { StyledText } from "@components/StyledText/StyledText";
import { colors } from "@styles/colors";
import { ActivityIndicator, Pressable } from "react-native";
import { styles } from "./StyledButton.styles";
import { StyledButtonProps } from "./StyledButton.types";

export const StyledButton = ({ disabled, label, onPress, style, labelStyles, isLoading }: StyledButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, styles.buttonDefault, pressed && styles.pressed, disabled && styles.disabled, style]}
      disabled={disabled}
      onPress={onPress}>
      <>
        {isLoading ? (
          <ActivityIndicator color={colors.gray100} size='large' />
        ) : label ? (
          <StyledText style={[styles.text, labelStyles]}>{label}</StyledText>
        ) : null}
      </>
    </Pressable>
  );
};
