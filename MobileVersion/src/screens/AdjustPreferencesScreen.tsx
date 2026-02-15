import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { useApp } from '../context/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'AdjustPreferences'>;
};

const TASTES = ['Spicy', 'Savory', 'Sweet', 'Light'];
const DIETARY_OPTIONS = ['None', 'Vegetarian', 'Vegan', 'Gluten-Free'];
const BUDGET_OPTIONS = ['$', '$$', '$$$'];
const MODES = ['Play it Safe', 'Explore New Dishes'];

export function AdjustPreferencesScreen({ navigation }: Props) {
  const {
    tastePrefs,
    dietary,
    budgetFilters,
    preferenceMode,
    toggleTastePref,
    setDietary,
    toggleBudgetFilter,
    setPreferenceMode,
  } = useApp();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adjust Preferences</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Taste Profile</Text>
          <View style={styles.chipRow}>
            {TASTES.map((taste) => (
              <TouchableOpacity
                key={taste}
                style={[
                  styles.chip,
                  tastePrefs.includes(taste) ? styles.chipActive : styles.chipInactive,
                ]}
                onPress={() => toggleTastePref(taste)}
              >
                <Text
                  style={[
                    styles.chipText,
                    tastePrefs.includes(taste) ? styles.chipTextActive : styles.chipTextInactive,
                  ]}
                >
                  {taste}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Dietary Needs</Text>
          <View style={styles.chipRow}>
            {DIETARY_OPTIONS.map((diet) => (
              <TouchableOpacity
                key={diet}
                style={[
                  styles.chip,
                  dietary === diet ? styles.chipActive : styles.chipInactive,
                ]}
                onPress={() => setDietary(diet)}
              >
                <Text
                  style={[
                    styles.chipText,
                    dietary === diet ? styles.chipTextActive : styles.chipTextInactive,
                  ]}
                >
                  {diet}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Budget Range</Text>
          <View style={styles.budgetRow}>
            {BUDGET_OPTIONS.map((price) => (
              <TouchableOpacity
                key={price}
                style={[
                  styles.budgetChip,
                  budgetFilters.includes(price) ? styles.chipActive : styles.chipInactive,
                ]}
                onPress={() => toggleBudgetFilter(price)}
              >
                <Text
                  style={[
                    styles.chipText,
                    budgetFilters.includes(price) ? styles.chipTextActive : styles.chipTextInactive,
                  ]}
                >
                  {price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preference Mode</Text>
          <View style={styles.modeCol}>
            {MODES.map((mode) => (
              <TouchableOpacity
                key={mode}
                style={[
                  styles.modeRow,
                  preferenceMode === mode ? styles.chipActive : styles.chipInactive,
                ]}
                onPress={() => setPreferenceMode(mode)}
              >
                <Text
                  style={[
                    styles.chipText,
                    preferenceMode === mode ? styles.chipTextActive : styles.chipTextInactive,
                  ]}
                >
                  {mode}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <PrimaryButton onPress={() => navigation.goBack()}>
          Apply Changes
        </PrimaryButton>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    height: 56,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  backBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    flex: 1,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  chipRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  budgetRow: {
    flexDirection: 'row',
    gap: 8,
  },
  chip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
  },
  budgetChip: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderWidth: 1,
  },
  chipActive: {
    backgroundColor: '#000',
    borderColor: '#000',
  },
  chipInactive: {
    backgroundColor: '#fff',
    borderColor: '#e5e7eb',
  },
  chipText: {
    fontSize: 14,
  },
  chipTextActive: {
    color: '#fff',
  },
  chipTextInactive: {
    color: '#000',
  },
  modeCol: {
    gap: 8,
  },
  modeRow: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
  },
  footer: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});
