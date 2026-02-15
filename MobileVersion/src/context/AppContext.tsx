import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { Dish, TabType } from '../types';

interface AppState {
  tastePrefs: string[];
  dietary: string;
  budgetFilters: string[];
  selectedResultFilters: string[];
  searchQuery: string;
  preferenceMode: string;
  activeTab: TabType;
  selectedDish: Dish | null;
  favoriteDishes: Dish[];
}

interface AppContextType extends AppState {
  toggleTastePref: (pref: string) => void;
  setDietary: (diet: string) => void;
  toggleBudgetFilter: (filter: string) => void;
  toggleResultFilter: (filter: string) => void;
  setSearchQuery: (q: string) => void;
  setPreferenceMode: (mode: string) => void;
  setActiveTab: (tab: TabType) => void;
  setSelectedDish: (dish: Dish | null) => void;
  setFavoriteDishes: (dishes: Dish[] | ((prev: Dish[]) => Dish[])) => void;
}

const defaultState: AppState = {
  tastePrefs: [],
  dietary: 'None',
  budgetFilters: ['$$'],
  selectedResultFilters: ['Spicy'],
  searchQuery: '',
  preferenceMode: 'Play it Safe',
  activeTab: 'home',
  selectedDish: null,
  favoriteDishes: [],
};

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [tastePrefs, setTastePrefsState] = useState<string[]>(defaultState.tastePrefs);
  const [dietary, setDietaryState] = useState(defaultState.dietary);
  const [budgetFilters, setBudgetFiltersState] = useState<string[]>(defaultState.budgetFilters);
  const [selectedResultFilters, setSelectedResultFiltersState] = useState<string[]>(defaultState.selectedResultFilters);
  const [searchQuery, setSearchQueryState] = useState(defaultState.searchQuery);
  const [preferenceMode, setPreferenceModeState] = useState(defaultState.preferenceMode);
  const [activeTab, setActiveTabState] = useState<TabType>(defaultState.activeTab);
  const [selectedDish, setSelectedDishState] = useState<Dish | null>(defaultState.selectedDish);
  const [favoriteDishes, setFavoriteDishesState] = useState<Dish[]>(defaultState.favoriteDishes);

  const toggleTastePref = useCallback((pref: string) => {
    setTastePrefsState((prev) =>
      prev.includes(pref) ? prev.filter((p) => p !== pref) : [...prev, pref]
    );
  }, []);

  const setDietary = useCallback((diet: string) => {
    setDietaryState(diet);
  }, []);

  const toggleBudgetFilter = useCallback((filter: string) => {
    setBudgetFiltersState((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  }, []);

  const toggleResultFilter = useCallback((filter: string) => {
    setSelectedResultFiltersState((prev) =>
      prev.includes(filter) ? prev.filter((f) => f !== filter) : [...prev, filter]
    );
  }, []);

  const setSearchQuery = useCallback((q: string) => {
    setSearchQueryState(q);
  }, []);

  const setPreferenceMode = useCallback((mode: string) => {
    setPreferenceModeState(mode);
  }, []);

  const setActiveTab = useCallback((tab: TabType) => {
    setActiveTabState(tab);
  }, []);

  const setSelectedDish = useCallback((dish: Dish | null) => {
    setSelectedDishState(dish);
  }, []);

  const setFavoriteDishes = useCallback((dishes: Dish[] | ((prev: Dish[]) => Dish[])) => {
    setFavoriteDishesState((prev) => (typeof dishes === 'function' ? dishes(prev) : dishes));
  }, []);

  const value: AppContextType = {
    tastePrefs,
    dietary,
    budgetFilters: budgetFilters,
    selectedResultFilters,
    searchQuery,
    preferenceMode,
    activeTab,
    selectedDish,
    favoriteDishes,
    toggleTastePref,
    setDietary,
    toggleBudgetFilter,
    toggleResultFilter,
    setSearchQuery,
    setPreferenceMode,
    setActiveTab,
    setSelectedDish,
    setFavoriteDishes,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
