import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative py-16 px-6 overflow-hidden">
      {/* 背景效果 - 确保不会影响后续内容 */}
      <div className="absolute inset-0 pointer-events-none">
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(rgba(255, 107, 53, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 107, 53, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-b from-jetbrains-accent/5 via-transparent to-jetbrains-purple/5" />
        
        {/* 动画元素 */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl pointer-events-none"
            style={{
              width: `${200 + i * 50}px`,
              height: `${200 + i * 50}px`,
              left: `${20 + i * 30}%`,
              top: `${20 + i * 20}%`,
              background: `radial-gradient(circle, 
                rgba(255, 107, 53, ${0.08 - i * 0.02}) 0%, 
                rgba(99, 102, 241, ${0.08 - i * 0.02}) 50%,
                transparent 70%
              )`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 2,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* 内容区域 */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-black text-jetbrains-text-bright mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block bg-gradient-to-r from-jetbrains-accent via-jetbrains-purple to-jetbrains-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_200%]">
              AI模型
            </span>
            <br />
            <span className="text-jetbrains-text-bright">
              一站式访问平台
            </span>
          </motion.h1>

          <motion.p
            className="text-xl text-jetbrains-text-secondary mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            汇集最先进的大语言模型智能体，为您提供统一的访问入口
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              { label: '6+ 活跃模型', color: 'bg-jetbrains-green' },
              { label: '多种专业领域', color: 'bg-jetbrains-accent' },
              { label: '本地部署', color: 'bg-jetbrains-purple' }
            ].map((item, index) => (
              <motion.div
                key={item.label}
                className="flex items-center space-x-2 bg-jetbrains-card/60 backdrop-blur-sm px-4 py-2 rounded-full border border-jetbrains-border/40"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
              >
                <div className={`w-2 h-2 ${item.color} rounded-full animate-pulse`} />
                <span className="text-jetbrains-text font-medium">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};