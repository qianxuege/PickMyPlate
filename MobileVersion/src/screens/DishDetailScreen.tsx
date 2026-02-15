import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { BottomNavBar } from '../components/BottomNavBar';
import { useApp } from '../context/AppContext';
import { flavorTags, keyIngredients, whyMatchesYou } from '../data/mockDishes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'DishDetail'>;
};

export function DishDetailScreen({ navigation }: Props) {
  const { selectedDish, activeTab, setActiveTab, isFavorite, toggleFavorite } = useApp();
  const isFavorited = selectedDish ? isFavorite(selectedDish) : false;

  if (!selectedDish) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Noodlehead</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.imagePlaceholder}>
          <Text style={styles.imagePlaceholderText}>Dish Image</Text>
        </View>

        <View style={styles.titleRow}>
          <Text style={styles.dishName}>{selectedDish.name}</Text>
          <TouchableOpacity
            onPress={() => toggleFavorite(selectedDish)}
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.heartButton}
          >
            <Ionicons
              name={isFavorited ? 'heart' : 'heart-outline'}
              size={24}
              color={isFavorited ? '#000' : '#374151'}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.priceRow}>
          <Text style={styles.price}>{selectedDish.price}</Text>
          {selectedDish.spiceLevel > 0 && (
            <View style={styles.spiceRow}>
              {[0, 1, 2].map((level) => (
                <Ionicons
                  key={level}
                  name="flame"
                  size={14}
                  color={level < selectedDish.spiceLevel ? '#000' : '#9ca3af'}
                />
              ))}
            </View>
          )}
        </View>

        <View style={styles.tagsRow}>
          {flavorTags.map((tag, i) => (
            <View key={i} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.summary}>
          {selectedDish.summary} Perfect for those who enjoy bold flavors with a kick of heat.
        </Text>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Key Ingredients</Text>
          {keyIngredients.map((item, i) => (
            <View key={i} style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        <View style={styles.block}>
          <Text style={styles.blockTitle}>Why this matches you</Text>
          {whyMatchesYou.map((item, i) => (
            <View key={i} style={styles.checkRow}>
              <Ionicons name="checkmark" size={14} color="#000" />
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.actionBar}>
        <PrimaryButton onPress={() => {}}>Show on Original Menu</PrimaryButton>
      </View>

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
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  imagePlaceholder: {
    width: '100%',
    height: 160,
    backgroundColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  imagePlaceholderText: {
    fontSize: 16,
    color: '#6b7280',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 8,
  },
  dishName: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
    flex: 1,
  },
  heartButton: {
    padding: 4,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  spiceRow: {
    flexDirection: 'row',
    gap: 4,
  },
  tagsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginBottom: 12,
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
  },
  tagText: {
    fontSize: 14,
    color: '#000',
  },
  summary: {
    fontSize: 14,
    color: '#374151',
    lineHeight: 20,
    marginBottom: 16,
  },
  block: {
    marginBottom: 16,
  },
  blockTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  bulletRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  bullet: {
    fontSize: 14,
    color: '#374151',
    marginRight: 8,
  },
  bulletText: {
    fontSize: 14,
    color: '#374151',
    flex: 1,
  },
  checkRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
    gap: 8,
  },
  actionBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#e5e7eb',
  },
});
