import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface PrimaryButtonProps {
  children: string;
  onPress: () => void;
  fullWidth?: boolean;
  style?: ViewStyle;
}

export function PrimaryButton({ children, onPress, fullWidth = true, style }: PrimaryButtonProps) {
  return (
    <TouchableOpacity
      style={[styles.button, fullWidth && styles.fullWidth, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 56,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
