import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { BottomNavBar } from '../components/BottomNavBar';
import { useApp } from '../context/AppContext';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export function HomeScreen({ navigation }: Props) {
  const { activeTab, setActiveTab } = useApp();

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.content}>
        <Text style={styles.greeting}>What are we eating today?</Text>
        <View style={styles.ctaWrap}>
          <PrimaryButton onPress={() => navigation.navigate('Scan')}>
            Scan a Menu
          </PrimaryButton>
        </View>
        <View style={styles.recent}>
          <Text style={styles.recentTitle}>Recent Scans</Text>
          <View style={styles.recentItem}>
            <Text style={styles.recentText}>Restaurant Name - 2 days ago</Text>
          </View>
          <View style={styles.recentItem}>
            <Text style={styles.recentText}>Restaurant Name - 5 days ago</Text>
          </View>
          <View style={styles.recentItem}>
            <Text style={styles.recentText}>Restaurant Name - 1 week ago</Text>
          </View>
        </View>
      </View>
      <BottomNavBar
        activeTab={activeTab}
        onTabPress={(tab) => {
          setActiveTab(tab);
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
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 32,
  },
  greeting: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    marginBottom: 40,
  },
  ctaWrap: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recent: {
    marginTop: 40,
  },
  recentTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 16,
  },
  recentItem: {
    height: 56,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  recentText: {
    fontSize: 14,
    color: '#374151',
  },
});
