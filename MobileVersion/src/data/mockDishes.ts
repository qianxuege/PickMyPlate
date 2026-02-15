import { Dish } from '../types';

export const resultsDishes: Dish[] = [
  {
    name: 'Spicy Chicken Tacos',
    summary: 'Bold heat with citrus notes and a satisfying crunch.',
    price: '$12',
    spiceLevel: 3,
    section: 'recommended',
  },
  {
    name: 'Thai Curry Bowl',
    summary: 'Aromatic coconut curry with vegetables and rice.',
    price: '$13',
    spiceLevel: 2,
    section: 'recommended',
  },
  {
    name: 'Grilled Salmon',
    summary: 'Light and flaky with lemon butter sauce.',
    price: '$18',
    spiceLevel: 0,
    section: 'recommended',
  },
  {
    name: 'Caesar Salad',
    summary: 'Fresh romaine with creamy dressing and parmesan.',
    price: '$9',
    spiceLevel: 0,
    section: 'top',
  },
  {
    name: 'Margherita Pizza',
    summary: 'Classic tomato and mozzarella with fresh basil.',
    price: '$14',
    spiceLevel: 0,
    section: 'top',
  },
  {
    name: 'Beef Burger',
    summary: 'Juicy patty with lettuce, tomato, and special sauce.',
    price: '$16',
    spiceLevel: 0,
    section: 'other',
  },
  {
    name: 'Pad Thai',
    summary: 'Sweet and tangy noodles with peanuts and lime.',
    price: '$14',
    spiceLevel: 1,
    section: 'other',
  },
];

export const favoriteDishesList = [
  { name: 'Spicy Chicken Tacos', restaurant: 'Noodlehead', price: '$12', spiceLevel: 3 },
  { name: 'Thai Curry Bowl', restaurant: 'Thai Palace', price: '$13', spiceLevel: 2 },
  { name: 'Margherita Pizza', restaurant: 'Pizza Corner', price: '$14', spiceLevel: 0 },
];

export const recentSearches = ['Tacos', 'Salmon', 'Pizza', 'Curry'];

export const allResultFilters = ['High Protein', 'Vegetarian', 'Under $15', 'Spicy'];

export const flavorTags = ['Spicy', 'Savory', 'Bold', 'Citrusy'];

export const keyIngredients = [
  'Fresh chicken breast',
  'House-made spicy sauce',
  'Crispy tortilla shells',
  'Fresh cilantro and lime',
];

export const whyMatchesYou = [
  'Matches your spicy preference',
  'Within your $$ budget range',
  'High protein content you prefer',
];
