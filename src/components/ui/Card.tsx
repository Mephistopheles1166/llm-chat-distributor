import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  onClick,
}) => {
  return (
    <motion.div
      className={cn(
        'bg-jetbrains-card border-2 border-jetbrains-border rounded-xl p-6 transition-all duration-300 shadow-card',
        hover && 'cursor-pointer hover:bg-jetbrains-card-hover hover:border-jetbrains-border-bright hover:shadow-card-hover',
        className
      )}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5), 0 10px 20px rgba(0, 0, 0, 0.4), 0 0 0 2px rgba(255, 107, 53, 0.3)',
      } : undefined}
      onClick={onClick}
      layout
    >
      {children}
    </motion.div>
  );
};