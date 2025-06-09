// 环境检测工具函数
export const isDevelopment = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return (
    window.location.hostname === 'localhost' ||
    window.location.hostname === '127.0.0.1' ||
    window.location.hostname === '0.0.0.0' ||
    window.location.port !== '' ||
    window.location.protocol === 'file:'
  );
};

export const isProduction = (): boolean => {
  return !isDevelopment();
};