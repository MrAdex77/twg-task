import { yScale } from "@utils/scale";
import type { TextStyle } from "react-native";

interface Fonts {
  /**
   * * Poppins Regular
   * * font-weight: 400
   * * font-size: 16
   */
  poppinsRegular: TextStyle;
  /**
   * * Poppins Medium
   * * font-weight: 500
   */
  poppinsMedium: TextStyle;
  /**
   * * Poppins SemiBold
   * * font-weight: 600
   */
  poppinsSemiBold: TextStyle;
  /**
   * * Poppins Bold
   * * font-weight: 700
   */
  poppinsBold: TextStyle;
  /**
   * * SF Compact Text Regular
   * * font-weight: 400
   */
  sfCompactTextRegular: TextStyle;
  /**
   * * SF Compact Display Regular
   * * font-weight: 400
   */
  sfCompactDisplayRegular: TextStyle;
  /**
   * * SF Compact Display Bold
   * * font-weight: 700
   */
  sfCompactDisplayBold: TextStyle;
}

export const fonts: Fonts = {
  poppinsRegular: {
    fontFamily: "Poppins-Regular",
    fontWeight: "medium",
  },
  poppinsMedium: {
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
  },
  poppinsBold: {
    fontFamily: "Poppins-Bold",
    fontWeight: "700",
  },
  poppinsSemiBold: {
    fontFamily: "Poppins-SemiBold",
    fontWeight: "600",
  },
  sfCompactTextRegular: {
    fontFamily: "SF-Compact-Text",
    fontWeight: "400",
  },
  sfCompactDisplayRegular: {
    fontFamily: "SF-Compact-Display-Regular",
    fontWeight: "400",
  },
  sfCompactDisplayBold: {
    fontFamily: "SF-Compact-Display-Bold",
    fontWeight: "700",
  },
};

type Styles =
  | "heading1"
  | "heading2"
  | "heading3"
  | "heading4"
  | "buttonText"
  | "label"
  | "titleAndInput"
  | "caption"
  | "bodyText"
  | "caption"
  | "caption2"
  | "specialText";

export const defaultStyles: Record<Styles, TextStyle> = {
  heading1: {
    ...fonts.poppinsBold,
    fontSize: yScale(36),
  },
  heading2: {
    ...fonts.poppinsBold,
    fontSize: yScale(28),
  },
  heading3: {
    ...fonts.poppinsBold,
    fontSize: yScale(22),
  },
  heading4: {
    ...fonts.poppinsSemiBold,
    fontSize: yScale(16),
  },
  buttonText: {
    ...fonts.poppinsSemiBold,
    fontSize: yScale(16),
    letterSpacing: yScale(16) * 0.01,
  },
  label: {
    ...fonts.poppinsMedium,
    fontSize: yScale(16),
  },
  titleAndInput: {
    ...fonts.poppinsMedium,
    fontSize: yScale(15),
    lineHeight: yScale(20),
  },
  caption: {
    ...fonts.poppinsRegular,
    fontSize: yScale(10),
    lineHeight: yScale(10),
  },
  bodyText: {
    ...fonts.sfCompactTextRegular,
    fontSize: yScale(14),
  },
  caption2: {
    ...fonts.sfCompactDisplayBold,
    fontSize: yScale(12),
    lineHeight: yScale(16),
  },
  specialText: {
    ...fonts.sfCompactDisplayRegular,
    fontSize: yScale(12),
    lineHeight: yScale(16),
  },
};
