export interface AIModel {
  id: string;
  name: string;
  description: string;
  category: string;
  url: string;
  icon: string;
  tags: string[];
  provider: string;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
}

export interface AppState {
  models: AIModel[];
  categories: Category[];
  searchQuery: string;
  selectedCategory: string | null;
  favorites: string[];
  theme: 'dark' | 'light';
}

export interface FilterState {
  category: string | null;
  tags: string[];
  provider: string | null;
}