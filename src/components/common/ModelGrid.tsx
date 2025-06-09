import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ModelCard } from './ModelCard';
import { useAppStore } from '@/stores/appStore';
import { isDevelopment } from '@/utils/env';

export const ModelGrid: React.FC = () => {
  const { filteredModels, searchQuery, selectedCategory } = useAppStore();

  if (filteredModels.length === 0) {
    return (
      <motion.div
        className="text-center py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-32 h-32 mx-auto mb-8 bg-jetbrains-card rounded-2xl flex items-center justify-center border-2 border-jetbrains-border shadow-card">
          <span className="text-6xl">🤖</span>
        </div>
        <h3 className="text-2xl font-bold text-jetbrains-text-bright mb-4">
          未找到匹配的模型
        </h3>
        <p className="text-jetbrains-text-secondary text-lg max-w-md mx-auto leading-relaxed">
          {searchQuery
            ? `没有找到包含 "${searchQuery}" 的模型，请尝试其他关键词`
            : '当前分类下暂无可用模型'}
        </p>
        <div className="mt-8">
          <button 
            onClick={() => window.location.reload()}
            className="px-6 py-3 bg-jetbrains-accent text-white rounded-lg hover:bg-jetbrains-accent-light transition-colors"
          >
            刷新页面
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      {/* 网格容器 */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <AnimatePresence mode="popLayout">
          {filteredModels.map((model, index) => (
            <div key={model.id} className="w-full">
              <ModelCard
                model={model}
                index={index}
              />
            </div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* 调试信息 - 开发时可见 */}
      {isDevelopment() && (
        <div className="mt-8 p-4 bg-jetbrains-card/50 rounded-lg border border-jetbrains-border/30">
          <div className="text-sm text-jetbrains-text-secondary">
            调试信息: 显示 {filteredModels.length} 个模型
            {searchQuery && ` | 搜索: "${searchQuery}"`}
            {selectedCategory && ` | 分类: ${selectedCategory}`}
          </div>
        </div>
      )}
    </div>
  );
};