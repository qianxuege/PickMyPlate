import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PrimaryButton } from '../components/PrimaryButton';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Welcome'>;
};

export function WelcomeScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.inner}>
        <View style={styles.top}>
          <Text style={styles.title}>PickMyPlate</Text>
          <Text style={styles.tagline}>Choose faster. Order smarter.</Text>
        </View>
        <View style={styles.bottom}>
          <PrimaryButton onPress={() => navigation.replace('Preferences')}>
            Get Started
          </PrimaryButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    width: 375,
    maxWidth: '100%',
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 64,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  top: {
    alignItems: 'center',
    gap: 24,
  },
  title: {
    fontSize: 34,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 20,
    color: '#374151',
    textAlign: 'center',
  },
  bottom: {
    width: '100%',
  },
});
