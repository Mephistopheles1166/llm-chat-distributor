import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { useAppStore } from '@/stores/appStore';

export const Header: React.FC = () => {
  const { theme, setTheme } = useAppStore();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.header 
      className="sticky top-0 z-50 bg-jetbrains-bg/95 backdrop-blur-xl border-b border-jetbrains-border/50 shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            className="flex items-center space-x-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-jetbrains-accent to-jetbrains-purple rounded-xl flex items-center justify-center shadow-glow-sm">
              <Icon name="bot" className="text-white" size={28} />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold text-jetbrains-text-bright">
                AI Model Hub
              </h1>
              <p className="text-sm text-jetbrains-text-secondary font-medium">
                大语言模型分发平台
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="p-3"
            >
              <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={20} />
            </Button>
            
            <Button variant="ghost" size="sm" className="p-3">
              <Icon name="settings" size={20} />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};