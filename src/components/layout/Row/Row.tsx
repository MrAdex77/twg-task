import styles from 'components/layout/Row/Row.styles';
import type { RowProps } from 'components/layout/Row/Row.types';
import React from 'react';
import { View } from 'react-native';

export const Row = ({ children, style }: RowProps) => (
  <View style={[styles.row, style]}>{children}</View>
);
