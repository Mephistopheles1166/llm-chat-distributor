# 多阶段构建
FROM node:18-alpine as builder

WORKDIR /app

# 复制package文件
COPY package*.json ./
RUN npm ci --only=production

# 复制源代码
COPY . .

# 下载字体文件（确保有网络访问）
RUN npm run download-fonts

# 构建应用
RUN npm run build

# 生产环境
FROM nginx:alpine

# 复制构建结果（包含下载的字体）
COPY --from=builder /app/dist /usr/share/nginx/html

# 复制nginx配置
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]