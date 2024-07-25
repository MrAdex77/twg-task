import type { PropsWithChildren, ReactNode } from "react";
import type { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";
import type { SafeAreaViewProps } from "react-native-safe-area-context";

export interface ScreenWrapperProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  isScroll?: boolean;
  isFlashList?: boolean;
  isNoPadding?: boolean;
  hasSafeArea?: boolean;
  gradientColors?: string[];
  bounces?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
  noScrollableContent?: (style: ViewStyle) => ReactNode;
  showHeader?: boolean;
  isError?: boolean;
  safeAreaProps?: SafeAreaViewProps;
  backgroundImg?: ImageSourcePropType;
}
