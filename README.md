# 吕昕橦律师事务所网站

这是原始HTML文件的模块化版本，所有内容保持完整，仅将CSS和JavaScript分离到独立文件中。

## 📁 项目结构

```
lawyer-website/
├── index.html          # 主HTML文件 (1019行)
├── css/
│   └── style.css       # 完整样式文件 (692行)
├── js/
│   └── script.js       # 完整JavaScript代码 (955行)
└── README.md           # 说明文档
```

## 🚀 如何使用

### 方法1：在VS Code中打开

1. 解压zip文件
2. 用VS Code打开 `lawyer-website` 文件夹
3. 安装 **Live Server** 插件
4. 右键点击 `index.html` → 选择 "Open with Live Server"

### 方法2：直接在浏览器打开

直接双击 `index.html` 文件，用浏览器打开即可查看。

## 📝 文件说明

### index.html
- 包含所有HTML结构和内容
- 引用外部CSS和JavaScript文件
- 保持原始HTML的所有内容不变

### css/style.css
- 包含所有样式代码
- 从原始HTML的 `<style>` 标签中提取
- 完整保留所有CSS规则

### js/script.js
- 包含所有JavaScript代码
- 从原始HTML的 `<script>` 标签中提取
- 完整保留所有功能代码

## ✨ 功能特点

- ✅ 响应式导航栏
- ✅ 单页面应用（SPA）切换
- ✅ 业务领域展示卡片
- ✅ 案件详情模态窗口
- ✅ 在线预约表单
- ✅ 联系方式和地图
- ✅ 平滑滚动动画

## 🎨 自定义修改

### 修改内容
在 `index.html` 中找到对应部分进行修改

### 修改样式
编辑 `css/style.css` 文件

### 修改功能
编辑 `js/script.js` 文件

## 🌐 浏览器支持

- ✅ Chrome (推荐)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ❌ Internet Explorer

## 📋 注意事项

1. **图片链接**：当前使用占位图片链接，建议替换为实际图片
2. **地图**：Google Maps使用示例坐标，需替换为实际地址
3. **联系方式**：记得更新电话、邮箱等真实信息
4. **表单提交**：当前只在控制台打印，需连接后端API

## 🔧 技术栈

- HTML5
- CSS3
- 原生JavaScript (ES6+)
- 无需任何框架或外部库

## 📦 部署建议

可部署到：
- GitHub Pages
- Netlify  
- Vercel
- 任何静态网站托管服务

---

**版本**: v1.0.0 - 模块化版本
**原始文件**: lawyer-website__1_.html (2666行)
**分离后**: HTML (1019行) + CSS (692行) + JavaScript (955行)
