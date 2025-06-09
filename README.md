# LLM Chat Distributor (AI Model Hub)

基于 React + TypeScript 的大语言模型分发与导航平台，采用 JetBrains 风格设计，支持多种大模型聚合与便捷访问。适用于希望快速集成、展示和分发多种大模型聊天入口的前端开发者和团队。

---

## 功能特性

- 🎨 **JetBrains 风格设计**：深色/浅色主题切换，现代化界面
- 🔍 **智能搜索与筛选**：支持模型名称、描述、标签模糊查询
- 📱 **响应式布局**：适配桌面端与移动端
- ⚡ **高性能**：Vite 构建，极速热更新
- 💡 **模型聚合与导航**：集中分发各类大模型聊天页面
- 🧩 **模块化组件架构**：便于自定义、扩展或新增模型类别
- 🛠️ **自定义开发友好**：组件、主题、图标均可自定义

---

## 技术栈

- **前端框架**：React 18 + TypeScript
- **构建工具**：Vite
- **样式方案**：Tailwind CSS
- **动画库**：Framer Motion
- **状态管理**：Zustand
- **路由**：React Router v6
- **图标系统**：Lucide React

---

## 快速开始

### 1. 安装依赖

```bash
npm install
```

### 2. 本地开发

```bash
npm run dev
```

### 3. 构建生产版本

```bash
npm run build
```

### 4. 预览构建结果

```bash
npm run preview
```

---

## 配置说明

### 模型与分类配置

编辑 `public/data/models.json`，示例：

```json
[
  {
    "id": "unique-id",
    "name": "ChatGPT",
    "description": "OpenAI GPT-4 聊天机器人",
    "category": "openai",
    "url": "https://chat.openai.com/",
    "icon": "gpt",
    "tags": ["英语", "通用", "OpenAI"],
    "provider": "OpenAI",
    "featured": true
  }
]
```

添加或修改分类（同文件）：

```json
[
  {
    "id": "openai",
    "name": "OpenAI 系列",
    "description": "OpenAI 相关模型",
    "icon": "openai",
    "color": "#10a37f"
  }
]
```

---

## 目录结构

```
src/
├── components/          # 组件
│   ├── ui/             # 基础UI组件
│   ├── layout/         # 布局组件
│   └── common/         # 业务组件（如模型网格等）
├── pages/              # 页面
├── stores/             # 状态管理
├── types/              # 类型定义
├── utils/              # 工具函数
├── styles/             # 样式文件
└── main.tsx           # 入口文件
public/
└── data/models.json    # 模型与分类配置
└── fonts/              # 字体资源
index.html              # HTML 入口
Dockerfile              # Docker 部署配置
nginx.conf              # Nginx 配置
```

---

## 部署方式

### 1. 静态资源部署

```bash
npm run build
# 将 dist 目录部署到你的 Web 服务器
```

### 2. Docker 部署

```bash
docker build -t llm-chat-distributor .
docker run -p 80:80 llm-chat-distributor
```

### 3. Nginx 反向代理

可参考仓库根目录下的 `nginx.conf` 文件，按需自定义部署。

---

## 自定义开发

### 添加新组件

1. 在 `src/components` 下创建新组件
2. 使用 TypeScript 定义 Props 接口
3. 遵循项目命名规范，保持风格统一

### 修改主题

编辑 `tailwind.config.js` 的 `jetbrains` 颜色配置，实现主题色自定义。

### 添加新图标

在 `src/components/ui/Icon.tsx` 中扩展图标映射即可。

---

## 开发规范

- 使用 ESLint + Prettier 保持代码风格统一
- 遵循 React Hooks 最佳实践
- TypeScript 严格类型约束
- 使用 React.memo 优化组件渲染
- 搜索功能实现防抖
- 图片懒加载，提升加载速度
- 代码分割，优化首屏体验

---

## 字体与样式

- 默认采用 `JetBrains Mono` 字体，支持降级方案
- 可在 `public/fonts/` 及 `src/styles/` 下自定义字体及全局样式

---

## 许可证

本项目采用 **Apache License 2.0** 开源协议。详情请见 LICENSE 文件。

---

## 鸣谢

- 感谢 JetBrains、OpenAI 等开源社区及第三方库的支持。

---

> 如有问题或建议，欢迎提 Issue、PR 及交流！
