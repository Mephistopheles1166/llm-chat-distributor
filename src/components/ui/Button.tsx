import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  className,
  children,
  disabled,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-jetbrains-accent/30 disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden';
  
  const variants = {
    primary: 'bg-gradient-to-r from-jetbrains-accent to-jetbrains-accent-light hover:from-jetbrains-accent-light hover:to-jetbrains-accent text-white shadow-glow-sm hover:shadow-glow-md border-2 border-jetbrains-accent/30 hover:border-white/30',
    secondary: 'bg-jetbrains-card hover:bg-jetbrains-card-hover text-jetbrains-text-bright border-2 border-jetbrains-border hover:border-jetbrains-border-bright shadow-lg hover:shadow-xl',
    ghost: 'hover:bg-jetbrains-card/60 text-jetbrains-text-secondary hover:text-jetbrains-text-bright border border-transparent hover:border-jetbrains-border',
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {/* Shine effect */}
      <div className="absolute inset-0 -top-px overflow-hidden rounded-lg">
        <div className="absolute top-0 flex w-full h-px">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      
      {loading && (
        <motion.div
          className="mr-2 h-5 w-5 border-2 border-current border-t-transparent rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        />
      )}
      {children}
    </motion.button>
  );
};