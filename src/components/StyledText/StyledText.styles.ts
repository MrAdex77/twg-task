import { colors } from "@styles/colors";
import { StyleSheet } from "react-native";
import { fonts } from "styles/typography";

const styles = StyleSheet.create({
  text: {
    ...fonts.poppinsMedium,
    color: colors.white,
  },
});

export default styles;
