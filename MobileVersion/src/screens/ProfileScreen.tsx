import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BottomNavBar } from '../components/BottomNavBar';
import { useApp } from '../context/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Profile'>;
};

export function ProfileScreen({ navigation }: Props) {
  const {
    tastePrefs,
    dietary,
    budgetFilters,
    activeTab,
    setActiveTab,
  } = useApp();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account Information</Text>
          <View style={styles.accountRow}>
            <View style={styles.avatar} />
            <View style={styles.accountInfo}>
              <Text style={styles.userName}>Alex Johnson</Text>
              <Text style={styles.userEmail}>alex.johnson@email.com</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.preferencesBox}>
            <View style={styles.prefRow}>
              <Text style={styles.prefLabel}>Taste:</Text>
              <Text style={styles.prefValue}>
                {tastePrefs.length > 0 ? tastePrefs.join(', ') : 'Not set'}
              </Text>
            </View>
            <View style={styles.prefRow}>
              <Text style={styles.prefLabel}>Dietary:</Text>
              <Text style={styles.prefValue}>{dietary}</Text>
            </View>
            <View style={styles.prefRow}>
              <Text style={styles.prefLabel}>Budget:</Text>
              <Text style={styles.prefValue}>
                {budgetFilters.length > 0 ? budgetFilters.join(', ') : 'Not set'}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={styles.outlineButton}
            onPress={() => navigation.navigate('AdjustPreferences')}
          >
            <Text style={styles.outlineButtonText}>Adjust Preferences</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Saved</Text>
          <TouchableOpacity
            style={styles.savedRow}
            onPress={() => {
              setActiveTab('favorites');
              navigation.navigate('Favorites');
            }}
          >
            <Text style={styles.savedRowText}>View Favorites</Text>
            <Text style={styles.savedRowArrow}>→</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.outlineButton}>
            <Text style={styles.outlineButtonText}>Log Out</Text>
          </TouchableOpacity>
          <View style={styles.deleteWrap}>
            <TouchableOpacity
              style={styles.outlineButton}
              onPress={() => navigation.reset({ index: 0, routes: [{ name: 'Welcome' }] })}
            >
              <Text style={styles.deleteText}>Delete Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <BottomNavBar
        activeTab={activeTab}
        onTabPress={(tab) => {
          setActiveTab(tab);
          if (tab === 'home') navigation.navigate('Home');
          if (tab === 'favorites') navigation.navigate('Favorites');
          if (tab === 'profile') navigation.navigate('Profile');
        }}
      />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 24,
    paddingVertical: 24,
  },
  section: {
    marginBottom: 32,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 12,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#d1d5db',
    borderWidth: 2,
    borderColor: '#9ca3af',
  },
  accountInfo: {
    gap: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  userEmail: {
    fontSize: 16,
    color: '#374151',
  },
  preferencesBox: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 16,
    gap: 12,
  },
  prefRow: {},
  prefLabel: {
    fontSize: 14,
    color: '#374151',
  },
  prefValue: {
    fontSize: 16,
    color: '#000',
    marginTop: 4,
  },
  outlineButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  outlineButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  savedRow: {
    width: '100%',
    height: 48,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  savedRowText: {
    fontSize: 16,
    color: '#000',
  },
  savedRowArrow: {
    fontSize: 20,
    color: '#000',
  },
  deleteWrap: {
    marginTop: 16,
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
  deleteText: {
    fontSize: 16,
    color: '#374151',
  },
});
