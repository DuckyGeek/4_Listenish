# Listenish

<div align="center">

**An intelligent English vocabulary learning application**

</div>

---

# English Version

## 📖 About

Listenish is an intelligent English vocabulary learning application that helps you master words through adaptive study plans, AI-powered pronunciation, and interactive practice modes.

## ✨ Features

### 📚 Multiple Vocabulary Books
- **GAOKAO** (高考): ~6,000 words
- **TOEFL**: 8,039 words  
- **IELTS**: 3,605 words

### 🎯 Adaptive Study Plan
- Automatically calculates daily word targets based on your timeline
- Tracks your progress with visual indicators
- Marks mastered words to focus on what you need to learn

### 🎧 Learn Mode
- AI-powered pronunciation with word spelling breakdown
- Loop playback for repeated listening
- Definition explanations for each word

### ✍️ Dictation Test
- Test your spelling skills
- Configurable interval between words
- Practice mode to improve listening and writing

### 📊 Progress Tracking
- Real-time progress percentage
- Mastered vs. total words count
- Visual progress bar

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)

### Installation

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Set up API key:**

   Create a `.env.local` file in the root directory and add your Gemini API key:

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

   > **Note:** You can get a free API key from [Google AI Studio](https://makersuite.google.com/app/apikey)

3. **Run the app:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**

   Navigate to the URL shown in the terminal (usually `http://localhost:5173`)

## 📱 How to Use

### Dashboard

The dashboard shows your current progress and provides quick access to all features:

- **Current Progress**: View your mastery percentage and word count
- **Daily List**: See today's words to study
- **Learn Mode**: Start listening practice with AI pronunciation
- **Dictation Test**: Test your spelling skills

### Study Settings

1. **Select Book**: Choose from GAOKAO, TOEFL, or IELTS
2. **Target Days**: Set how many days you want to complete the book
3. **Loops Per Word**: Configure how many times each word plays in Learn Mode
4. **Dictation Interval**: Set the pause time between words in Dictation Test

### Learn Mode

1. Click **"Learn Mode"** from the dashboard
2. Words will play automatically with AI pronunciation
3. Each word includes spelling breakdown and definition
4. Use the play/pause controls to manage playback
5. Swipe right on a word to mark it as mastered

### Dictation Test

1. Click **"Dictation Test"** from the dashboard
2. Listen to each word pronunciation
3. Try to spell the word correctly
4. The app will show you the correct spelling after each word
5. Words play at the interval you configured in settings

### Daily List

1. Click **"Daily List"** to see today's words
2. Review words and mark them as mastered when ready
3. Swipe right on a word card to mark it mastered
4. Your progress updates automatically

## 🛠️ Technology Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Google Gemini API** - AI-powered pronunciation and text generation
- **Lucide React** - Icons

## 📝 Project Structure

```
listenish/
├── App.tsx              # Main application component
├── constants.ts          # Vocabulary data (GAOKAO/TOEFL/IELTS)
├── types.ts             # TypeScript type definitions
├── services/
│   └── geminiService.ts # Gemini API integration
├── components/
│   ├── Button.tsx       # Reusable button component
│   └── SwipeableRow.tsx # Swipeable word card component
└── index.html           # HTML entry point
```

## 🎓 Tips for Effective Learning

1. **Consistency**: Study a little every day rather than cramming
2. **Active Listening**: Pay attention to pronunciation and spelling in Learn Mode
3. **Practice Writing**: Use Dictation Test regularly to improve spelling
4. **Review Mastered Words**: Occasionally review words you've marked as mastered
5. **Adjust Settings**: Find the right balance of loops and intervals for your learning style

## 📄 License

This project is open source and available for personal and educational use.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

For questions or suggestions, please open an issue on GitHub.

---

# 中文版本

## 📖 关于

Listenish 是一款智能英语词汇学习应用，通过自适应学习计划、AI 驱动的发音和交互式练习模式，帮助你掌握单词。

## ✨ 功能特性

### 📚 多词书支持
- **GAOKAO** (高考): 约 6,000 个单词
- **TOEFL**: 8,039 个单词  
- **IELTS**: 3,605 个单词

### 🎯 自适应学习计划
- 根据你的时间表自动计算每日单词目标
- 通过可视化指标跟踪你的进度
- 标记已掌握的单词，专注于需要学习的内容

### 🎧 学习模式
- AI 驱动的发音，包含单词拼写分解
- 循环播放，反复听
- 每个单词都有定义解释

### ✍️ 听写测试
- 测试你的拼写能力
- 可配置单词之间的间隔时间
- 练习模式，提高听力和写作能力

### 📊 进度跟踪
- 实时进度百分比
- 已掌握单词数 vs. 总单词数
- 可视化进度条

## 🚀 快速开始

### 前置要求

- **Node.js** (v16 或更高版本)

### 安装

1. **安装依赖:**

   ```bash
   npm install
   ```

2. **设置 API 密钥:**

   在项目根目录创建 `.env.local` 文件，并添加你的 Gemini API 密钥：

   ```env
   GEMINI_API_KEY=your_api_key_here
   ```

   > **注意:** 你可以从 [Google AI Studio](https://makersuite.google.com/app/apikey) 获取免费的 API 密钥

3. **运行应用:**

   ```bash
   npm run dev
   ```

4. **在浏览器中打开:**

   打开终端显示的 URL（通常是 `http://localhost:5173`）

## 📱 使用说明

### 主界面

主界面显示你的当前进度，并提供所有功能的快速访问：

- **当前进度**: 查看你的掌握百分比和单词数量
- **每日列表**: 查看今天要学习的单词
- **学习模式**: 开始使用 AI 发音进行听力练习
- **听写测试**: 测试你的拼写能力

### 学习设置

1. **选择词书**: 从 GAOKAO、TOEFL 或 IELTS 中选择
2. **目标天数**: 设置完成词书所需的天数
3. **每词循环次数**: 配置学习模式中每个单词播放的次数
4. **听写间隔**: 设置听写测试中单词之间的暂停时间

### 学习模式

1. 从主界面点击 **"Learn Mode"**（学习模式）
2. 单词将自动播放，带有 AI 发音
3. 每个单词包含拼写分解和定义
4. 使用播放/暂停控件管理播放
5. 在单词上向右滑动可标记为已掌握

### 听写测试

1. 从主界面点击 **"Dictation Test"**（听写测试）
2. 听每个单词的发音
3. 尝试正确拼写单词
4. 应用会在每个单词后显示正确答案
5. 单词按照你在设置中配置的间隔播放

### 每日列表

1. 点击 **"Daily List"**（每日列表）查看今天的单词
2. 复习单词，准备好时标记为已掌握
3. 在单词卡片上向右滑动可标记为已掌握
4. 你的进度会自动更新

## 🛠️ 技术栈

- **React 19** - UI 框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **Tailwind CSS** - 样式
- **Google Gemini API** - AI 驱动的发音和文本生成
- **Lucide React** - 图标

## 📝 项目结构

```
listenish/
├── App.tsx              # 主应用组件
├── constants.ts          # 词汇数据 (GAOKAO/TOEFL/IELTS)
├── types.ts             # TypeScript 类型定义
├── services/
│   └── geminiService.ts # Gemini API 集成
├── components/
│   ├── Button.tsx       # 可复用按钮组件
│   └── SwipeableRow.tsx # 可滑动单词卡片组件
└── index.html           # HTML 入口文件
```

## 🎓 高效学习建议

1. **坚持**: 每天学习一点，而不是临时抱佛脚
2. **主动听**: 在学习模式中注意发音和拼写
3. **练习书写**: 定期使用听写测试来提高拼写能力
4. **复习已掌握**: 偶尔复习你标记为已掌握的单词
5. **调整设置**: 找到适合你学习风格的循环次数和间隔平衡

## 📄 许可证

本项目为开源项目，可用于个人和教育用途。

## 🤝 贡献

欢迎提交贡献、问题报告和功能请求！

## 📧 联系方式

如有问题或建议，请在 GitHub 上提交 issue。

---

**Happy Learning! / 学习愉快！** 🎉
