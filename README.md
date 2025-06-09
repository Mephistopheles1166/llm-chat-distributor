# AI Model Hub

基于 React + TypeScript 的大语言模型分发平台，采用 JetBrains 设计风格。

## 功能特性

- 🎨 **JetBrains 风格设计**：深色主题，现代化界面
- 🔍 **智能搜索**：支持模型名称、描述、标签搜索
- 📱 **响应式设计**：完美适配桌面端
- ⚡ **高性能**：Vite 构建，快速热重载
- 🎯 **TypeScript**：类型安全，开发体验优秀
- 🌙 **主题切换**：支持深色/浅色主题

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **动画库**：Framer Motion
- **状态管理**：Zustand
- **路由**：React Router v6
- **图标**：Lucide React

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发环境

```bash
npm run dev
```

### 构建生产版本

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 项目结构

```
src/
├── components/          # 组件
│   ├── ui/             # 基础UI组件
│   ├── layout/         # 布局组件
│   └── common/         # 业务组件
├── pages/              # 页面
├── stores/             # 状态管理
├── types/              # 类型定义
├── utils/              # 工具函数
├── styles/             # 样式文件
└── main.tsx           # 入口文件
```

## 配置说明

### 模型配置

编辑 `public/data/models.json` 添加新的AI模型：

```json
{
  "id": "unique-id",
  "name": "模型名称",
  "description": "模型描述",
  "category": "分类",
  "url": "聊天页面URL",
  "icon": "图标名称",
  "tags": ["标签1", "标签2"],
  "provider": "提供商",
  "featured": true
}
```

### 分类配置

在同一文件中配置模型分类：

```json
{
  "id": "category-id",
  "name": "分类名称",
  "description": "分类描述",
  "icon": "图标名称",
  "color": "#颜色代码"
}
```

## 部署方式

### 1. 静态文件部署

```bash
npm run build
# 将 dist 目录部署到 Web 服务器
```

### 2. Docker 部署

```bash
docker build -t ai-model-hub .
docker run -p 80:80 ai-model-hub
```

### 3. Nginx 配置

参考项目根目录的 `nginx.conf` 文件。

## 自定义开发

### 添加新组件

1. 在 `src/components` 下创建组件
2. 使用 TypeScript 定义 Props 接口
3. 遵循项目的命名规范

### 修改主题

编辑 `tailwind.config.js` 中的 `jetbrains` 颜色配置。

### 添加新图标

在 `src/components/ui/Icon.tsx` 中添加新的图标映射。

## 开发指南

### 代码规范

- 使用 ESLint + Prettier 进行代码格式化
- 遵循 React Hooks 最佳实践
- 使用 TypeScript 严格模式

### 性能优化

- 使用 React.memo 优化组件渲染
- 实现防抖搜索
- 图片懒加载
- 代码分割

## 许可证

MIT License