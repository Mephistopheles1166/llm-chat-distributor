import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/layout/Hero';
import { SearchBar } from '@/components/common/SearchBar';
import { CategoryFilter } from '@/components/common/CategoryFilter';
import { ModelGrid } from '@/components/common/ModelGrid';
import { useAppStore } from '@/stores/appStore';
import { loadJsonData } from '@/utils';

export const HomePage: React.FC = () => {
  const { setModels, setCategories, filteredModels } = useAppStore();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await loadJsonData<{
          models: any[];
          categories: any[];
        }>('/data/models.json');
        
        setModels(data.models);
        setCategories(data.categories);
      } catch (error) {
        console.error('Failed to load models data:', error);
      }
    };

    loadData();
  }, [setModels, setCategories]);

  return (
    <div className="min-h-screen bg-jetbrains-bg relative">
      {/* Header - 固定在顶部，设置正确的z-index */}
      <div className="relative z-50">
        <Header />
      </div>
      
      {/* Hero区域 - 确保不会覆盖其他内容 */}
      <div className="relative z-10">
        <Hero />
      </div>
      
      {/* 主要内容区域 - 确保足够的z-index和清晰的布局 */}
      <main className="relative z-20 max-w-7xl mx-auto px-6 pb-20">
        {/* 搜索和筛选区域 */}
        <motion.section
          className="mb-12 bg-jetbrains-bg-light/80 backdrop-blur-sm rounded-2xl p-8 border border-jetbrains-border/50 shadow-card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-4">
            <div className="flex-1 max-w-2xl">
              <SearchBar />
            </div>
            <div className="flex-shrink-0">
              <CategoryFilter />
            </div>
          </div>
          
          {/* 搜索提示文字 */}
          <div className="text-sm text-jetbrains-text-secondary mt-4">
            💡 提示：您可以按模型名称、描述、标签或提供商进行搜索
          </div>
        </motion.section>

        {/* 模型展示区域 - 确保足够的空间和可见性 */}
        <motion.section
          className="relative z-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* 区域标题 */}
          <div className="flex items-center justify-between mb-8 bg-jetbrains-card/50 backdrop-blur-sm rounded-xl p-6 border border-jetbrains-border/30">
            <div>
              <h2 className="text-3xl font-bold text-jetbrains-text-bright mb-2">
                🤖 可用模型
              </h2>
              <p className="text-jetbrains-text-secondary">
                发现并使用最适合您需求的AI模型
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-jetbrains-accent">
                {filteredModels.length}
              </div>
              <div className="text-sm text-jetbrains-text-secondary">
                个模型
              </div>
            </div>
          </div>
          
          {/* 模型网格容器 - 确保清晰可见 */}
          <div className="relative z-40 min-h-[600px]">
            <ModelGrid />
          </div>
        </motion.section>

        {/* 底部间距 */}
        <div className="h-20" />
      </main>
    </div>
  );
};