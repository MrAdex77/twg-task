import { StyleSheet } from "react-native";
import { colors } from "styles/colors";
import { defaultStyles } from "styles/typography";
import { SCREEN_WIDTH, xScale, yScale } from "utils/scale";

const gap = xScale(16);
const HEADER_HEIGHT = yScale(120);

const styles = StyleSheet.create({
  header: {
    height: HEADER_HEIGHT,
    width: SCREEN_WIDTH,
    backgroundColor: colors.blue300,
    borderBottomLeftRadius: xScale(24),
    borderBottomRightRadius: xScale(24),
    flexDirection: "row",
    alignItems: "flex-end",
    paddingVertical: xScale(24),
    justifyContent: "space-between",
  },
  leftHeaderContent: {
    flex: 1,
    left: gap,
    justifyContent: "flex-start",
    alignItems: "center",
    gap,
  },
  innerLeftHeaderContent: {
    flex: 1,
    alignItems: "center",
    gap,
  },
  rightHeaderContent: {
    flex: 1,
    right: gap,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: xScale(24),
  },
  translucent: {
    backgroundColor: "transparent",
    position: "absolute",
  },
  title: {
    ...defaultStyles.heading1,
    color: colors.plum500,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: xScale(32),
    width: xScale(32),
  },
});

export default styles;
