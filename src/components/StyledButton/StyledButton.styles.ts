import { defaultStyles } from "@styles/typography";
import { StyleSheet } from "react-native";
import { colors } from "styles/colors";
import { xScale, yScale } from "utils/scale";

export const styles = StyleSheet.create({
  button: {
    height: yScale(48),
    width: xScale(327),
    borderRadius: xScale(12),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDefault: {
    backgroundColor: colors.plum500,
  },
  pressed: { backgroundColor: colors.plum700 },
  disabled: { backgroundColor: colors.gray300 },
  text: {
    ...defaultStyles.buttonText,
  },
});
