# 🤖 AI辅助生活工作系统

> 基于人工智能的多功能辅助平台，致力于用AI技术提升生活和工作效率

[![Built with React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.3-purple.svg)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

---

## 📖 目录

- [项目简介](#项目简介)
- [功能模块](#功能模块)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开发指南](#开发指南)
- [部署](#部署)
- [路线图](#路线图)
- [贡献指南](#贡献指南)
- [许可证](#许可证)

---

## 🎯 项目简介

AI辅助生活工作系统是一个集成多种AI功能的Web应用平台，旨在通过先进的人工智能技术，为用户提供智能化的工作和生活辅助服务。

### 愿景

让AI技术真正融入日常生活，成为每个人的智能助手。

---

## 🚀 功能模块

### ✅ 已完成

#### 1. 智能合约AI审查系统

**功能特性：**
- 🔍 **漏洞检测** - AI驱动的代码漏洞扫描，深度分析智能合约安全隐患
- 📊 **业务分析** - 业务逻辑审查，确保代码实现符合业务预期
- ⚡ **GAS优化** - 精准分析Gas消耗，提供专业的优化建议方案
- 🧠 **AI洞察** - 深度学习算法分析，提供智能化的安全建议

**技术亮点：**
- 科技感十足的入口页面（粒子动画、扫描线、数据流效果）
- 实时代码分析和反馈
- 支持多种智能合约语言
- 详细的审查报告生成

**使用场景：**
- 智能合约开发者在部署前进行安全审查
- 审计公司进行合约审计工作
- 项目方评估第三方合约安全性

**截图：**

![入口页面](./screenshots/entry.png)
![分析页面](./screenshots/analysis.png)

---

### 🚧 开发中

#### 2. AI反诈骗系统

**计划功能：**
- 🛡️ 诈骗信息识别
- 📞 可疑电话检测
- 💬 诈骗话术分析
- 🎓 防诈骗知识库

**预期上线时间：** 待定

---

### 💡 未来规划

更多AI辅助功能正在规划中...

- AI法律咨询助手
- AI健康管理系统
- AI理财规划助手
- AI学习辅导系统

---

## 🛠️ 技术栈

### 前端框架
- **React 18.3.1** - 用户界面构建
- **TypeScript 5.6.2** - 类型安全
- **Vite 6.0.3** - 构建工具

### UI框架
- **Tailwind CSS 3.4.17** - 样式框架
- **Lucide React** - 图标库

### 路由
- **React Router DOM 7.1.1** - 单页应用路由

### 动画
- **Canvas API** - 粒子动画效果
- **CSS Animations** - 过渡动画

### 状态管理
- **React Hooks** - useState, useEffect, useRef

### 代码规范
- **ESLint** - 代码检查
- **TypeScript ESLint** - TS规则

---

## ⚡ 快速开始

### 环境要求

- **Node.js** >= 18.0.0
- **pnpm** >= 8.0.0（推荐）或 npm/yarn

### 安装依赖
```bash
# 克隆项目
git clone https://github.com/your-username/ai-assistant-system.git

# 进入项目目录
cd ai-assistant-system

# 安装依赖
pnpm install
```

### 启动开发服务器
```bash
pnpm run dev
```

访问 `http://localhost:5173` 查看应用。

### 构建生产版本
```bash
pnpm run build
```

### 预览生产版本
```bash
pnpm run preview
```

---

## 📁 项目结构
```
ai-assistant-system/
├── public/                # 静态资源
├── src/
│   ├── components/        # 可复用组件
│   │   └── TestConnection.tsx
│   ├── pages/            # 页面组件
│   │   ├── EntryPage.tsx           # 入口页面
│   │   ├── EntryPage.module.css   # 入口页面样式
│   │   └── AnalysisPage.tsx       # 合约分析页面
│   ├── services/         # API服务
│   ├── App.tsx           # 根组件
│   ├── main.tsx          # 入口文件
│   └── index.css         # 全局样式
├── .gitignore
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 🔧 开发指南

### 本地开发

1. **启动开发服务器**
```bash
   pnpm run dev
```

2. **代码规范检查**
```bash
   pnpm run lint
```

3. **类型检查**
```bash
   pnpm run type-check
```

### 添加新功能模块

1. 在 `src/pages/` 创建新页面组件
2. 在 `src/App.tsx` 添加路由配置
3. 在入口页面添加功能入口

### 代码风格

- 使用 **TypeScript** 进行类型约束
- 遵循 **ESLint** 规则
- 使用 **函数式组件** 和 **Hooks**
- CSS 采用 **CSS Modules** 或 **Tailwind** 工具类

---

## 🌐 部署

### Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入 GitHub 仓库
4. 自动检测 Vite 配置
5. 点击部署

### 其他平台

项目也支持部署到：
- Netlify
- GitHub Pages
- Cloudflare Pages
- 自建服务器

---

## 🗺️ 路线图

### Version 1.0（当前）

- [x] 项目基础架构搭建
- [x] 科技感入口页面
- [x] 智能合约AI审查功能
- [x] 粒子动画效果
- [x] 响应式布局

### Version 1.1（计划中）

- [ ] AI反诈骗系统
- [ ] 用户认证系统
- [ ] 数据持久化
- [ ] 报告导出功能

### Version 2.0（未来）

- [ ] 更多AI功能模块
- [ ] 移动端适配
- [ ] 多语言支持
- [ ] API开放平台

---

## 🤝 贡献指南

欢迎任何形式的贡献！

### 如何贡献

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 报告问题

如果发现 Bug 或有新功能建议，请[创建 Issue](https://github.com/your-username/ai-assistant-system/issues)。

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

## 👥 作者

**Your Name**
- GitHub: [@your-username](https://github.com/your-username)
- Email: your-email@example.com

---

## 🙏 致谢

- React 团队提供的优秀框架
- Tailwind CSS 的设计理念
- 所有开源贡献者

---

## 📞 联系方式

如有任何问题或建议，欢迎通过以下方式联系：

- 📧 Email: your-email@example.com
- 💬 Discussions: [GitHub Discussions](https://github.com/your-username/ai-assistant-system/discussions)
- 🐛 Issues: [GitHub Issues](https://github.com/your-username/ai-assistant-system/issues)

---

<p align="center">
  <sub>Built with ❤️ by Your Name</sub>
</p>