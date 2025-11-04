// 组件加载工具
async function loadComponent(componentName, targetId) {
    try {
        const response = await fetch(`../components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`Failed to load ${componentName}`);
        }
        const html = await response.text();
        document.getElementById(targetId).innerHTML = html;
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
    }
}

// 智能导航功能
function setupNavigation() {
    // 检测当前是否在 pages 子目录中
    const isInPagesDir = window.location.pathname.includes('/pages/');

    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-menu a[data-page]');

    navLinks.forEach(link => {
        const pageName = link.getAttribute('data-page');

        // 根据页面名称和当前位置设置正确的URL
        if (pageName === 'index') {
            link.href = isInPagesDir ? '../index.html' : 'index.html';
        } else {
            link.href = isInPagesDir ? `${pageName}.html` : `pages/${pageName}.html`;
        }
    });
}

// 页面加载时自动加载header和footer
document.addEventListener('DOMContentLoaded', async function() {
    await loadComponent('header', 'header-container');
    await loadComponent('footer', 'footer-container');

    // 设置导航链接
    setupNavigation();
});
