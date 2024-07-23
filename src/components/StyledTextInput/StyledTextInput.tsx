import { IconButton } from "@components/IconButton/IconButton";
import { StyledText } from "@components/StyledText/StyledText";
import { Icons } from "@constants/icons";
import { colors } from "@styles/colors";
import { defaultStyles } from "@styles/typography";
import { xScale, yScale } from "@utils/scale";
import React, { useMemo, useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TextStyle, View, ViewStyle } from "react-native";

export interface StyledTextInputProps extends TextInputProps {
  disabled?: boolean;
  label?: string;
  style?: ViewStyle;
  inputStyles?: ViewStyle;
  labelStyles?: TextStyle;
  error?: string;
  icon?: NodeRequire | string;
  iconColor?: string;
  rightIcon?: React.ReactNode;
}

export const StyledTextInput: React.FC<StyledTextInputProps> = ({
  disabled,
  label,
  style,
  inputStyles,
  labelStyles,
  error,
  icon,
  secureTextEntry,
  iconColor,
  rightIcon,
  ...rest
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(secureTextEntry);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  const textInputStyle = useMemo(
    () => ({
      ...styles.inputStyle,
      ...(!!icon && styles.inputWithIcon),
      ...inputStyles,
      ...(!!error && styles.inputError),
      ...(isFocused && styles.inputFocused),
      ...(disabled && styles.inputDisabled),
    }),
    [icon, error, disabled, inputStyles]
  );

  return (
    <View style={[styles.container, style]}>
      {!!label && <StyledText style={[styles.labelText, labelStyles]}>{label}</StyledText>}
      <View style={styles.inputContainer}>
        <TextInput
          returnKeyType='done'
          numberOfLines={1}
          {...rest}
          style={textInputStyle}
          placeholderTextColor={colors.gray100}
          secureTextEntry={isPasswordVisible}
          selectionColor={colors.black}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {secureTextEntry && (
          <IconButton
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            icon={isPasswordVisible ? Icons.Vision : Icons.VisionLow}
            style={styles.iconButton}
            iconSize={xScale(18)}
            iconStyle={isPasswordVisible && styles.iconPasswordInactive}
          />
        )}
        {!secureTextEntry && rightIcon}
      </View>
      {!!error && (
        <StyledText testID='errorText' data-test='errorText' style={styles.errorText}>
          {error}
        </StyledText>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: xScale(5),
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    backgroundColor: colors.white,
    fontSize: xScale(16),
    paddingVertical: 0,
    color: colors.black,
    paddingLeft: xScale(20),
    paddingRight: xScale(35),
    width: xScale(311),
    height: yScale(47),
    borderRadius: xScale(10),
  },
  inputWithIcon: { paddingLeft: xScale(51) },
  errorText: {
    fontSize: xScale(12),
    lineHeight: xScale(16),
    color: colors.error,
    marginTop: xScale(4),
    alignSelf: "flex-end",
    textAlign: "right",
  },
  labelText: {
    ...defaultStyles.label,
    marginBottom: xScale(3),
    color: colors.blue100,
    alignSelf: "flex-start",
  },
  icon: {
    fontSize: xScale(18),
    lineHeight: xScale(20),
    position: "absolute",
    zIndex: 1,
    left: xScale(20),
    top: "50%",
    transform: [{ translateY: xScale(-9) }],
  },
  inputFocused: {
    borderWidth: xScale(2),
    borderColor: colors.plum500,
  },
  iconButton: {
    position: "absolute",
    height: "100%",
    right: xScale(10),
    justifyContent: "center",
    // backgroundColor: colors.transparent,
  },
  iconPasswordInactive: {
    color: colors.gray100,
  },
  inputError: { borderColor: colors.error, borderWidth: xScale(2) },
  inputDisabled: { backgroundColor: colors.gray100, color: colors.gray300 },
  iconDisabled: { opacity: 0.6 },
  inputContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
});
