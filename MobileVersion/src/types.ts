export type DishSection = 'recommended' | 'top' | 'other';

export interface Dish {
  name: string;
  summary: string;
  price: string;
  spiceLevel: number;
  section: DishSection;
  restaurant?: string;
}

export type TabType = 'home' | 'favorites' | 'profile';
