import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabType } from '../types';

interface BottomNavBarProps {
  activeTab: TabType;
  onTabPress: (tab: TabType) => void;
}

const tabs: { key: TabType; label: string; icon: 'home-outline' | 'heart-outline' | 'person-outline' }[] = [
  { key: 'home', label: 'Home', icon: 'home-outline' },
  { key: 'favorites', label: 'Favorites', icon: 'heart-outline' },
  { key: 'profile', label: 'Profile', icon: 'person-outline' },
];

export function BottomNavBar({ activeTab, onTabPress }: BottomNavBarProps) {
  return (
    <View style={styles.container}>
      {tabs.map(({ key, label, icon }) => {
        const isActive = activeTab === key;
        return (
          <TouchableOpacity
            key={key}
            style={styles.tab}
            onPress={() => onTabPress(key)}
            activeOpacity={0.8}
          >
            <Ionicons
              name={icon}
              size={24}
              color={isActive ? '#000' : '#6b7280'}
            />
            <Text style={[styles.tabLabel, isActive && styles.tabLabelActive]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  tabLabel: {
    fontSize: 12,
    color: '#6b7280',
  },
  tabLabelActive: {
    color: '#000',
    fontWeight: '600',
  },
});
