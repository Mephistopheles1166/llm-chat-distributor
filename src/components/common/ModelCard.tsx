import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { useAppStore } from '@/stores/appStore';
import { openModelChat } from '@/utils';
import type { AIModel } from '@/types';

interface ModelCardProps {
  model: AIModel;
  index: number;
}

export const ModelCard: React.FC<ModelCardProps> = ({ model, index }) => {
  const { favorites, toggleFavorite } = useAppStore();
  const isFavorite = favorites.includes(model.id);

  const handleCardClick = () => {
    openModelChat(model.url);
  };

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFavorite(model.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.215, 0.610, 0.355, 1.000]
      }}
      whileHover={{ 
        y: -12,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      layout
      className="h-full"
    >
      <div
        onClick={handleCardClick}
        className="relative group h-full cursor-pointer"
      >
        {/* Multiple glow layers for stronger effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-jetbrains-accent via-jetbrains-purple to-jetbrains-accent rounded-2xl blur-sm opacity-0 group-hover:opacity-40 transition-all duration-500 animate-gradient-shift bg-[length:200%_200%]" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-jetbrains-accent to-jetbrains-purple rounded-2xl opacity-20 group-hover:opacity-60 transition-opacity duration-300" />
        
        {/* Main card with much higher contrast */}
        <div className="relative bg-jetbrains-card border-2 border-jetbrains-border group-hover:border-jetbrains-border-bright group-hover:bg-jetbrains-card-hover rounded-xl p-7 h-full transition-all duration-300 shadow-card group-hover:shadow-card-bright backdrop-blur-sm">
          
          {/* Shine effect overlay */}
          <div className="absolute inset-0 rounded-xl overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-jetbrains-accent to-transparent animate-shine" />
            </div>
          </div>
          
          {/* Featured badge with stronger visibility */}
          {model.featured && (
            <motion.div
              className="absolute -top-4 -right-4 bg-gradient-to-r from-jetbrains-accent to-jetbrains-accent-light text-white text-sm font-bold px-4 py-2 rounded-full shadow-glow-md border-2 border-white/20"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: index * 0.1 + 0.5, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1 }}
            >
              ⭐ 推荐
            </motion.div>
          )}

          {/* Enhanced status indicator */}
          <div className="absolute top-6 left-6">
            <div className="flex items-center space-x-2 bg-jetbrains-green/20 px-3 py-1.5 rounded-full border border-jetbrains-green/30">
              <div className="w-2.5 h-2.5 bg-jetbrains-green rounded-full animate-pulse shadow-glow-sm" />
              <span className="text-xs text-jetbrains-green font-bold">在线</span>
            </div>
          </div>

          {/* Enhanced favorite button */}
          <motion.button
            onClick={handleFavoriteClick}
            className="absolute top-6 right-6 p-3 rounded-xl bg-jetbrains-card-bright/90 border border-jetbrains-border opacity-80 group-hover:opacity-100 transition-all duration-300 hover:bg-jetbrains-accent/20 hover:border-jetbrains-accent hover:scale-110 shadow-lg"
            whileHover={{ scale: 1.15, rotate: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Icon
              name={isFavorite ? 'heart' : 'bookmark'}
              className={isFavorite ? 'text-red-400' : 'text-jetbrains-text-secondary hover:text-jetbrains-accent'}
              size={20}
            />
          </motion.button>

          <div className="flex flex-col h-full pt-12">
            {/* Enhanced header */}
            <div className="flex items-start space-x-5 mb-8">
              <motion.div 
                className="relative flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center overflow-hidden border-2 border-jetbrains-border-hover"
                whileHover={{ scale: 1.1, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Enhanced icon background */}
                <div className="absolute inset-0 bg-gradient-to-br from-jetbrains-accent/40 via-jetbrains-purple/40 to-jetbrains-blue/40" />
                <div className="absolute inset-0 bg-gradient-to-br from-jetbrains-accent/20 to-jetbrains-purple/20 animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <Icon name={model.icon} className="relative text-white z-10 drop-shadow-lg" size={32} />
              </motion.div>
              
              <div className="flex-1 min-w-0">
                <h3 className="text-2xl font-bold text-jetbrains-text-bright mb-2 truncate group-hover:text-jetbrains-accent transition-colors duration-300 drop-shadow-sm">
                  {model.name}
                </h3>
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-base font-semibold text-jetbrains-text-secondary bg-jetbrains-bg-light/60 px-3 py-1 rounded-lg border border-jetbrains-border/50">
                    {model.provider}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-jetbrains-green rounded-full" />
                    <span className="text-sm text-jetbrains-green font-medium">活跃中</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced description */}
            <div className="bg-jetbrains-bg-light/50 rounded-lg p-4 mb-6 border border-jetbrains-border/30">
              <p className="text-jetbrains-text-secondary text-base leading-relaxed group-hover:text-jetbrains-text transition-colors duration-300">
                {model.description}
              </p>
            </div>

            {/* Enhanced tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {model.tags.slice(0, 3).map((tag, tagIndex) => (
                <motion.span
                  key={tag}
                  className="px-4 py-2 bg-gradient-to-r from-jetbrains-bg-light to-jetbrains-card-hover text-sm font-medium text-jetbrains-text-bright rounded-lg border-2 border-jetbrains-border hover:border-jetbrains-accent/50 hover:text-jetbrains-accent transition-all duration-300 shadow-lg"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + tagIndex * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  #{tag}
                </motion.span>
              ))}
              {model.tags.length > 3 && (
                <motion.span
                  className="px-4 py-2 bg-gradient-to-r from-jetbrains-accent/30 to-jetbrains-purple/30 text-sm font-bold text-jetbrains-accent rounded-lg border-2 border-jetbrains-accent/50 shadow-glow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  +{model.tags.length - 3} 更多
                </motion.span>
              )}
            </div>

            {/* Enhanced action button */}
            <motion.div
              className="mt-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                className="w-full bg-gradient-to-r from-jetbrains-accent via-jetbrains-accent-light to-jetbrains-accent hover:from-jetbrains-accent-light hover:via-jetbrains-accent hover:to-jetbrains-accent-light text-white font-bold py-4 text-lg rounded-xl shadow-glow-md hover:shadow-glow-lg transition-all duration-300 group/btn border-2 border-jetbrains-accent/30 hover:border-white/30"
                onClick={(e) => {
                  e.stopPropagation();
                  handleCardClick();
                }}
              >
                <div className="flex items-center justify-center space-x-3">
                  <span>🚀 开始对话</span>
                  <Icon 
                    name="external-link" 
                    size={20} 
                    className="group-hover/btn:translate-x-1 group-hover/btn:scale-110 transition-all duration-300" 
                  />
                </div>
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};