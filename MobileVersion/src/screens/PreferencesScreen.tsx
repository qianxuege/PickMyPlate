import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { useApp } from '../context/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Preferences'>;
};

const TASTES = ['Spicy', 'Savory', 'Sweet', 'Light'];
const DIETARY_OPTIONS = ['None', 'Vegetarian', 'Vegan', 'Gluten-Free'];
const BUDGET_OPTIONS = ['$', '$$', '$$$'];

export function PreferencesScreen({ navigation }: Props) {
  const {
    tastePrefs,
    dietary,
    budgetFilters,
    toggleTastePref,
    setDietary,
    toggleBudgetFilter,
  } = useApp();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.title}>Tell us what you like</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Taste Preferences</Text>
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
          <Text style={styles.sectionTitle}>Budget</Text>
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

        <View style={styles.spacer} />
        <View style={styles.buttonWrap}>
          <PrimaryButton onPress={() => navigation.replace('Home')}>Continue</PrimaryButton>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scroll: {
    flex: 1,
    maxWidth: '100%',
  },
  scrollContent: {
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: '#000',
    marginBottom: 32,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
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
    fontSize: 16,
  },
  chipTextActive: {
    color: '#fff',
  },
  chipTextInactive: {
    color: '#000',
  },
  spacer: { flex: 1, minHeight: 24 },
  buttonWrap: {
    width: '100%',
    paddingTop: 16,
  },
});
