import React, { ReactNode } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface FilterChipProps {
  label: string;
  active: boolean;
  onPress: () => void;
  icon?: ReactNode;
}

export function FilterChip({ label, active, onPress, icon }: FilterChipProps) {
  return (
    <TouchableOpacity
      style={[styles.chip, active ? styles.chipActive : styles.chipInactive]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text
        style={[styles.label, active ? styles.labelActive : styles.labelInactive]}
        numberOfLines={1}
      >
        {label}
      </Text>
      {icon}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chip: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderWidth: 1,
    borderRadius: 2,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    flexShrink: 0,
  },
  chipActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  chipInactive: {
    backgroundColor: '#fff',
    borderColor: '#e5e7eb',
  },
  label: {
    fontSize: 16,
  },
  labelActive: {
    color: '#fff',
    fontWeight: '700',
  },
  labelInactive: {
    color: '#000',
    fontWeight: '400',
  },
});
