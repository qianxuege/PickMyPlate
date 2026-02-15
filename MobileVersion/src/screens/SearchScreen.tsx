import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { DishCard } from '../components/DishCard';
import { BottomNavBar } from '../components/BottomNavBar';
import { useApp } from '../context/AppContext';
import { resultsDishes, recentSearches } from '../data/mockDishes';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Search'>;
};

export function SearchScreen({ navigation }: Props) {
  const {
    searchQuery,
    setSearchQuery,
    activeTab,
    setActiveTab,
    setSelectedDish,
    isFavorite,
    toggleFavorite,
  } = useApp();

  const filteredDishes = searchQuery
    ? resultsDishes.filter((d) =>
        d.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        keyboardVerticalOffset={0}
      >
        <View style={styles.header}>
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => {
            setSearchQuery('');
            navigation.goBack();
          }}
        >
          <Ionicons name="chevron-back" size={22} color="#000" />
        </TouchableOpacity>
        <View style={styles.inputWrap}>
          <TextInput
            style={styles.input}
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search dishes..."
            placeholderTextColor="#6b7280"
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              style={styles.clearBtn}
              onPress={() => setSearchQuery('')}
            >
              <Ionicons name="close" size={18} color="#374151" />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        {!searchQuery && (
          <View style={styles.recentSection}>
            <Text style={styles.sectionTitle}>Recent Searches</Text>
            {recentSearches.map((s, i) => (
              <TouchableOpacity
                key={i}
                style={styles.recentItem}
                onPress={() => setSearchQuery(s)}
              >
                <Text style={styles.recentText}>{s}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {searchQuery && filteredDishes.length > 0 && (
          <View style={styles.resultsSection}>
            <Text style={styles.sectionTitle}>
              Results ({filteredDishes.length})
            </Text>
            {filteredDishes.map((dish, i) => (
              <View key={i} style={styles.cardWrap}>
                <DishCard
                  name={dish.name}
                  summary={dish.summary}
                  price={dish.price}
                  spiceLevel={dish.spiceLevel}
                  onPress={() => {
                    setSelectedDish(dish);
                    navigation.navigate('DishDetail');
                  }}
                  isFavorited={isFavorite(dish)}
                  onHeartPress={() => toggleFavorite(dish)}
                />
              </View>
            ))}
          </View>
        )}

        {searchQuery && filteredDishes.length === 0 && (
          <View style={styles.empty}>
            <Text style={styles.emptyText}>
              No dishes found for "{searchQuery}"
            </Text>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  keyboard: {
    flex: 1,
  },
  header: {
    height: 56,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 8,
  },
  backBtn: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputWrap: {
    flex: 1,
    position: 'relative',
  },
  input: {
    height: 40,
    paddingHorizontal: 12,
    paddingRight: 36,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    backgroundColor: '#f9fafb',
    fontSize: 16,
    color: '#000',
  },
  clearBtn: {
    position: 'absolute',
    right: 8,
    top: '50%',
    marginTop: -12,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scroll: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  recentSection: {
    marginBottom: 20,
  },
  resultsSection: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: '700',
    color: '#374151',
    marginBottom: 12,
  },
  recentItem: {
    height: 44,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e5e7eb',
    justifyContent: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,
  },
  recentText: {
    fontSize: 16,
    color: '#374151',
  },
  cardWrap: {
    marginBottom: 12,
  },
  empty: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
  },
});
