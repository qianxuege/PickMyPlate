import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Scan'>;
};

export function ScanScreen({ navigation }: Props) {
  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={20} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Scan Menu</Text>
      </View>
      <View style={styles.cameraPlaceholder}>
        <Text style={styles.cameraPlaceholderText}>Camera Preview</Text>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity
          style={styles.captureBtn}
          onPress={() => navigation.navigate('Results')}
        />
        <TouchableOpacity
          onPress={() => navigation.navigate('Results')}
          style={styles.uploadLink}
        >
          <Text style={styles.uploadLinkText}>Upload from gallery</Text>
        </TouchableOpacity>
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
    borderRadius: 0,
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
  cameraPlaceholder: {
    flex: 1,
    backgroundColor: '#e5e7eb',
    margin: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraPlaceholderText: {
    fontSize: 14,
    color: '#6b7280',
  },
  controls: {
    alignItems: 'center',
    paddingVertical: 40,
    gap: 16,
  },
  captureBtn: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#000',
  },
  uploadLink: {},
  uploadLinkText: {
    fontSize: 14,
    color: '#374151',
    textDecorationLine: 'underline',
  },
});
