import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { useAppStore } from '@/stores/appStore';

export const CategoryFilter: React.FC = () => {
  const { categories, selectedCategory, setSelectedCategory } = useAppStore();

  return (
    <div className="flex flex-wrap gap-3">
      {categories.map((category, index) => (
        <motion.div
          key={category.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <Button
            variant={selectedCategory === category.id ? 'primary' : 'secondary'}
            size="sm"
            onClick={() => setSelectedCategory(
              selectedCategory === category.id ? null : category.id
            )}
            className="flex items-center space-x-2"
          >
            <Icon name={category.icon} size={16} />
            <span>{category.name}</span>
          </Button>
        </motion.div>
      ))}
    </div>
  );
};