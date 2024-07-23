import { colors } from "@styles/colors";
import { StyleSheet } from "react-native";
import { xScale, yScale } from "utils/scale";

export const styles = StyleSheet.create({
  wrapper: {
    minHeight: "100%",
    minWidth: "100%",
  },
  safeArea: {
    backgroundColor: colors.blue300,
  },
  loader: {
    paddingVertical: yScale(12),
  },
  container: {
    zIndex: -1,
  },
  wrapperPadding: {
    paddingHorizontal: xScale(16),
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
