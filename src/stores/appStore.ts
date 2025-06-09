import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { AppState, AIModel, Category } from '@/types';

interface AppStore extends AppState {
  // Actions
  setModels: (models: AIModel[]) => void;
  setCategories: (categories: Category[]) => void;
  setSearchQuery: (query: string) => void;
  setSelectedCategory: (category: string | null) => void;
  toggleFavorite: (modelId: string) => void;
  setTheme: (theme: 'dark' | 'light') => void;
  
  // Computed
  filteredModels: AIModel[];
  setFilteredModels: () => void;
}

export const useAppStore = create<AppStore>()(
  persist(
    (set, get) => ({
      // Initial state
      models: [],
      categories: [],
      searchQuery: '',
      selectedCategory: null,
      favorites: [],
      theme: 'dark',
      filteredModels: [],

      // Actions
      setModels: (models) => {
        set({ models });
        get().setFilteredModels();
      },
      
      setCategories: (categories) => set({ categories }),
      
      setSearchQuery: (query) => {
        set({ searchQuery: query });
        get().setFilteredModels();
      },
      
      setSelectedCategory: (category) => {
        set({ selectedCategory: category });
        get().setFilteredModels();
      },
      
      toggleFavorite: (modelId) => {
        const favorites = get().favorites;
        const newFavorites = favorites.includes(modelId)
          ? favorites.filter(id => id !== modelId)
          : [...favorites, modelId];
        set({ favorites: newFavorites });
      },
      
      setTheme: (theme) => set({ theme }),
      
      setFilteredModels: () => {
        const { models, searchQuery, selectedCategory } = get();
        
        let filtered = models;
        
        // Filter by category
        if (selectedCategory && selectedCategory !== 'all') {
          filtered = filtered.filter(model => model.category === selectedCategory);
        }
        
        // Filter by search query
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          filtered = filtered.filter(model =>
            model.name.toLowerCase().includes(query) ||
            model.description.toLowerCase().includes(query) ||
            model.tags.some(tag => tag.toLowerCase().includes(query)) ||
            model.provider.toLowerCase().includes(query)
          );
        }
        
        set({ filteredModels: filtered });
      },
    }),
    {
      name: 'ai-model-hub-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        favorites: state.favorites,
        theme: state.theme,
        selectedCategory: state.selectedCategory,
      }),
    }
  )
);