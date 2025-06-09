import React from 'react';
import {
  Bot,
  Brain,
  Code,
  Zap,
  Layers,
  Sparkles,
  Grid3X3,
  Cpu,
  Code2,
  Image,
  Search,
  Heart,
  ExternalLink,
  Filter,
  Settings,
  Moon,
  Sun,
  Star,
  Bookmark,
  type LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  bot: Bot,
  brain: Brain,
  code: Code,
  zap: Zap,
  layers: Layers,
  sparkles: Sparkles,
  'grid-3x3': Grid3X3,
  cpu: Cpu,
  'code-2': Code2,
  image: Image,
  search: Search,
  heart: Heart,
  'external-link': ExternalLink,
  filter: Filter,
  settings: Settings,
  moon: Moon,
  sun: Sun,
  star: Star,
  bookmark: Bookmark,
};

interface IconProps {
  name: string;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size = 20,
}) => {
  const IconComponent = iconMap[name];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <Bot className={className} size={size} />;
  }
  
  return <IconComponent className={className} size={size} />;
};