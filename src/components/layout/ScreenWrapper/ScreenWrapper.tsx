import React from "react";
import { ActivityIndicator, ImageBackground, ScrollView, View } from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

import { styles } from "./ScreenWrapper.styles";
import type { ScreenWrapperProps } from "./ScreenWrapper.types";

export const ScreenWrapper = ({
  children,
  style,
  isLoading,
  isError,
  isNoPadding,
  isScroll,
  hasBottomSafeArea,
  contentContainerStyle,
  noScrollableContent,
  showHeader,
  bounces,
  safeAreaProps,
  backgroundImg,
}: ScreenWrapperProps) => {
  const { bottom, top } = useSafeAreaInsets();

  // if (isError) {
  //   return <ShowError error={"Error"} />;
  // TODO: Add Error handling
  // }

  return (
    <SafeAreaView {...safeAreaProps} style={styles.safeArea}>
      {isScroll ? (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            bounces={bounces}
            contentContainerStyle={[styles.wrapper, { paddingTop: top }, !isNoPadding && styles.wrapperPadding, contentContainerStyle]}>
            {isLoading ? <ActivityIndicator /> : children}
          </ScrollView>
          {noScrollableContent?.(!isNoPadding ? styles.wrapperPadding : {})}
        </>
      ) : (
        <View style={[styles.wrapper, style]}>{isLoading ? <ActivityIndicator /> : children}</View>
      )}
      {backgroundImg && <ImageBackground source={backgroundImg} resizeMode='cover' style={[styles.fixed, styles.container]} />}
    </SafeAreaView>
  );
};
