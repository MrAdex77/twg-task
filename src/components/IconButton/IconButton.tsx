import { colors } from "@styles/colors";
import { xScale } from "@utils/scale";
import { Image, ImageSource, ImageStyle } from "expo-image";
import React from "react";
import { ActivityIndicator, StyleProp, StyleSheet, TouchableOpacity, ViewStyle } from "react-native";

export interface IconButtonProps {
  icon?: string | number | string[] | ImageSource | ImageSource[] | NodeRequire;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<ImageStyle>;
  onPress?: () => void;
  onLongPress?: () => void;
  size?: number;
  borderRadius?: number;
  loading?: boolean;
}

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  style,
  iconStyle,
  onPress,
  onLongPress,
  size = xScale(28),
  borderRadius = size / 2,
  loading,
}) => {
  return (
    <TouchableOpacity
      delayLongPress={3000}
      onPress={onPress}
      onLongPress={onLongPress}
      style={[
        styles.container,
        {
          width: size,
          height: size,
          borderRadius: borderRadius,
        },
        style,
      ]}
      disabled={loading}>
      {loading ? <ActivityIndicator color={colors.white} /> : <Image source={icon as ImageSource} style={[styles.icon, iconStyle]} />}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
  },
  icon: {
    color: colors.black,
    zIndex: 2,
    textAlignVertical: "center",
    height: xScale(18),
    width: xScale(18),
  },
  gradientWrapper: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 5,
    zIndex: 1,
  },
});
