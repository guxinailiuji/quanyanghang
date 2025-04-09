// 页面功能初始化
document.addEventListener('DOMContentLoaded', function() {
    // 处理图片请求参数
    const urlParams = new URLSearchParams(window.location.search);
    const imgParam = urlParams.get('img');
    
    if (imgParam) {
        // 如果URL包含img参数，则返回相应图片
        document.body.innerHTML = '';
        document.body.style.margin = '0';
        document.body.style.padding = '0';
        
        const imgElement = document.createElement('img');
        imgElement.src = 'img/' + imgParam;
        imgElement.style.maxWidth = '100%';
        imgElement.style.height = 'auto';
        document.body.appendChild(imgElement);
        
        // 阻止其他脚本执行
        return;
    }
    
    // 暗色模式切换
    const toggleThemeButton = document.getElementById('toggleTheme');
    if (toggleThemeButton) {
        toggleThemeButton.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            updateThemeIcon();
        });
    }
    
    function updateThemeIcon() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        if (toggleThemeButton) {
            if (isDarkMode) {
                toggleThemeButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                `;
            } else {
                toggleThemeButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                `;
            }
        }
    }
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80, // 调整滚动位置，考虑固定导航栏高度
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // 移动端菜单响应
    const menuButton = document.getElementById('menuButton');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// 防止缩放
window.addEventListener("wheel", (e)=> {
    const isPinching = e.ctrlKey
    if(isPinching) e.preventDefault()
}, { passive: false });

// 初始化图标库
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}
