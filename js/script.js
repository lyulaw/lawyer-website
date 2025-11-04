// 显示模态窗口
function showModal(caseType) {
    const modal = document.getElementById('caseModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    const caseInfo = caseData[caseType];
    if (caseInfo) {
        modalTitle.textContent = caseInfo.title;
        modalBody.innerHTML = caseInfo.content;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // 防止背景滚动
    }
}

// 关闭模态窗口
function closeModal() {
    const modal = document.getElementById('caseModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // 恢复滚动
    }
}

// 点击模态窗口背景关闭
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('caseModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
    }
});

// ESC键关闭模态窗口
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// 表单提交处理
async function handleSubmit(event) {
    event.preventDefault();

    // 获取表单数据
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone'),
        email: formData.get('email'),
        caseType: formData.get('case-type'),
        preferredDate: formData.get('preferred-date'),
        message: formData.get('message')
    };

    // 验证必填字段
    if (!data.name || !data.phone || !data.caseType || !data.message) {
        alert('❌ 请填写所有必填项（标记 * 的字段）');
        return;
    }

    // 显示提交中状态
    const submitBtn = event.target.querySelector('.submit-btn');
    const originalText = submitBtn.textContent;
    submitBtn.disabled = true;
    submitBtn.textContent = '正在提交...';
    submitBtn.style.opacity = '0.6';

    // 保存到本地存储
    try {
        const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
        appointments.push({
            ...data,
            id: Date.now(),
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('appointments', JSON.stringify(appointments));
        console.log('✅ 预约已保存到本地');
    } catch (error) {
        console.error('本地保存失败：', error);
        alert('❌ 预约保存失败，请稍后重试');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.opacity = '1';
        return;
    }

    // 恢复按钮状态
    submitBtn.disabled = false;
    submitBtn.textContent = originalText;
    submitBtn.style.opacity = '1';

    // 获取当前联系信息
    const contactInfo = typeof getContactInfo === 'function' ? getContactInfo() : {
        phone1: '(212)812-8253',
        email: 'catherine.lyu@lyulawpllc.com'
    };

    // 显示成功消息
    const message = `✅ 预约提交成功！

您的预约信息已成功保存。

我们的律师团队将在24小时内与您联系：
📞 ${contactInfo.phone1}
📧 ${contactInfo.email}

感谢您的信任！`;

    alert(message);

    // 重置表单
    event.target.reset();

    // 3秒后跳转到首页
    setTimeout(() => {
        window.location.href = window.location.pathname.includes('/pages/') ? '../index.html' : 'index.html';
    }, 1000);
}

// 平滑滚动效果
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
