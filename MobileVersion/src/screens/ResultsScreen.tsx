import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { DishCard } from '../components/DishCard';
import { FilterChip } from '../components/FilterChip';
import { BottomNavBar } from '../components/BottomNavBar';
import { useApp } from '../context/AppContext';
import { resultsDishes, allResultFilters } from '../data/mockDishes';
import { Dish } from '../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Results'>;
};

export function ResultsScreen({ navigation }: Props) {
  const {
    activeTab,
    setActiveTab,
    selectedResultFilters,
    toggleResultFilter,
    setSelectedDish,
  } = useApp();

  const recommended = resultsDishes.filter((d) => d.section === 'recommended');
  const topPicks = resultsDishes.filter((d) => d.section === 'top');
  const other = resultsDishes.filter((d) => d.section === 'other');

  const selectedFilters = allResultFilters.filter((f) => selectedResultFilters.includes(f));
  const unselectedFilters = allResultFilters.filter((f) => !selectedResultFilters.includes(f));
  const orderedFilters = [...selectedFilters, ...unselectedFilters];

  const openDish = (dish: Dish) => {
    setSelectedDish(dish);
    navigation.navigate('DishDetail');
  };

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Noodlehead</Text>
        <TouchableOpacity
          style={styles.iconBtn}
          onPress={() => navigation.navigate('Search')}
        >
          <Ionicons name="search-outline" size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filtersWrap}
        contentContainerStyle={styles.filtersContent}
      >
        {orderedFilters.map((filter) => (
          <FilterChip
            key={filter}
            label={filter}
            active={selectedResultFilters.includes(filter)}
            onPress={() => toggleResultFilter(filter)}
          />
        ))}
        <FilterChip
          label="More Filters"
          active={false}
          onPress={() => navigation.navigate('AdjustPreferences')}
          icon={<Ionicons name="add" size={14} color="#000" />}
        />
      </ScrollView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended for You</Text>
          {recommended.map((dish, i) => (
            <View key={i} style={styles.cardWrap}>
              <DishCard
                name={dish.name}
                summary={dish.summary}
                price={dish.price}
                spiceLevel={dish.spiceLevel}
                onPress={() => openDish(dish)}
              />
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Top Picks</Text>
          {topPicks.map((dish, i) => (
            <View key={i} style={styles.cardWrap}>
              <DishCard
                name={dish.name}
                summary={dish.summary}
                price={dish.price}
                spiceLevel={dish.spiceLevel}
                onPress={() => openDish(dish)}
              />
            </View>
          ))}
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Other Dishes</Text>
          {other.map((dish, i) => (
            <View key={i} style={styles.cardWrap}>
              <DishCard
                name={dish.name}
                summary={dish.summary}
                price={dish.price}
                spiceLevel={dish.spiceLevel}
                onPress={() => openDish(dish)}
              />
            </View>
          ))}
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
    position: 'absolute',
    left: 0,
    right: 0,
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  iconBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
  },
  filtersWrap: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    maxHeight: Dimensions.get('window').height * 0.08,
  },
  filtersContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 8,
  },
  cardWrap: {
    marginBottom: 12,
  },
});
