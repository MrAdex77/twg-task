import type { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { Row } from "components/layout/Row/Row";
import { Icons } from "constants/icons";
import React, { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { IconButton } from "@components/IconButton/IconButton";
import { StyledText } from "@components/StyledText/StyledText";
import { View } from "react-native";
import styles from "./Header.styles";
import type { HeaderProps } from "./Header.types";

export const Header = ({
  navigation,
  options: { title, headerRight, headerLeft },
  isBackButton,
  style,
  isTranslucent,
}: NativeStackHeaderProps & HeaderProps) => {
  const { top } = useSafeAreaInsets();

  const headerProps = useMemo(() => ({ canGoBack: navigation.canGoBack(), tintColor: "" }), [navigation]);

  return (
    <View style={styles.bg}>
      <View style={[styles.header, isTranslucent && { ...styles.translucent, top: top }, style]}>
        <Row style={styles.leftHeaderContent}>
          {headerLeft ? (
            headerLeft(headerProps)
          ) : (
            <>
              <Row style={styles.innerLeftHeaderContent}>
                {isBackButton && (
                  <IconButton
                    icon={Icons.CaretLeft}
                    iconStyle={styles.icon}
                    onPress={() => {
                      navigation.goBack();
                    }}
                  />
                )}
                <StyledText style={styles.title}>{title}</StyledText>
              </Row>
            </>
          )}
        </Row>
        <Row style={styles.rightHeaderContent}>{headerRight?.(headerProps)}</Row>
      </View>
    </View>
  );
};
