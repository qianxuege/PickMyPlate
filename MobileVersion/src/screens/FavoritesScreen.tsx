import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PrimaryButton } from '../components/PrimaryButton';
import { BottomNavBar } from '../components/BottomNavBar';
import { useApp } from '../context/AppContext';
import { favoriteDishesList } from '../data/mockDishes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Favorites'>;
};

export function FavoritesScreen({ navigation }: Props) {
  const { activeTab, setActiveTab } = useApp();
  const hasFavorites = favoriteDishesList.length > 0;

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favorites</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {hasFavorites ? (
          <View style={styles.list}>
            {favoriteDishesList.map((dish, i) => (
              <View key={i} style={styles.card}>
                <View style={styles.thumb} />
                <View style={styles.cardContent}>
                  <Text style={styles.dishName}>{dish.name}</Text>
                  <Text style={styles.restaurant}>{dish.restaurant}</Text>
                  <View style={styles.priceRow}>
                    <Text style={styles.price}>{dish.price}</Text>
                    {dish.spiceLevel > 0 && (
                      <View style={styles.spiceRow}>
                        {[0, 1, 2].map((level) => (
                          <Ionicons
                            key={level}
                            name="flame"
                            size={12}
                            color={level < dish.spiceLevel ? '#000' : '#9ca3af'}
                          />
                        ))}
                      </View>
                    )}
                  </View>
                </View>
                <Ionicons name="heart" size={20} color="#000" />
              </View>
            ))}
          </View>
        ) : (
          <View style={styles.empty}>
            <Text style={styles.emptyTitle}>No saved dishes yet.</Text>
            <Text style={styles.emptySub}>Tap the heart icon to save dishes.</Text>
            <View style={styles.emptyButton}>
              <PrimaryButton onPress={() => navigation.navigate('Home')}>
                Browse Restaurants
              </PrimaryButton>
            </View>
          </View>
        )}
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
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  list: {
    gap: 12,
  },
  card: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    alignItems: 'flex-start',
  },
  thumb: {
    width: 64,
    height: 64,
    backgroundColor: '#e5e7eb',
  },
  cardContent: {
    flex: 1,
    gap: 4,
  },
  dishName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#000',
  },
  restaurant: {
    fontSize: 12,
    color: '#374151',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 4,
  },
  price: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
  },
  spiceRow: {
    flexDirection: 'row',
    gap: 2,
  },
  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 80,
  },
  emptyTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
    textAlign: 'center',
  },
  emptySub: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 32,
    textAlign: 'center',
  },
  emptyButton: {
    width: '100%',
    paddingHorizontal: 32,
  },
});
