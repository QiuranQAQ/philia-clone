document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const progressText = document.getElementById('progress');
    const enterScreen = document.getElementById('enter-screen');
    const mainContent = document.getElementById('main-content');
    
    // 1. 模拟加载进度条动画
    let progress = 0;
    const interval = setInterval(() => {
        // 随机增加进度，模拟真实加载的不均匀感
        progress += Math.floor(Math.random() * 5) + 1;
        if (progress > 100) progress = 100;
        
        progressText.textContent = progress;

        if (progress === 100) {
            clearInterval(interval);
            setTimeout(showEnterScreen, 800); // 稍微停顿一下
        }
    }, 50); // 速度

    // 2. 加载完成后显示 Enter 按钮
    function showEnterScreen() {
        loader.classList.add('fade-out');
        // 等待淡出动画结束后，移除 loader，显示 enter
        setTimeout(() => {
            loader.classList.add('hidden');
            enterScreen.classList.remove('hidden');
            // 这里不需要 fade-in class 因为 enter-screen 默认 opacity 是 1 (除非被 hidden)
            // 但为了平滑，我们可以让它从透明度变实
            enterScreen.style.animation = "breathe 3s infinite"; 
        }, 1000);
    }
});

// 3. 用户点击 Enter 后进入主站
function enterSite() {
    const enterScreen = document.getElementById('enter-screen');
    const mainContent = document.getElementById('main-content');
    
    // 如果你有背景音乐，请把文件命名为 bgm.mp3 放在同级目录，并取消下面注释
    /*
    const audio = new Audio('bgm.mp3');
    audio.loop = true;
    audio.volume = 0.5;
    audio.play().catch(e => console.log("Audio play failed:", e));
    */

    // 淡出 Enter 屏
    enterScreen.classList.add('fade-out');

    setTimeout(() => {
        enterScreen.classList.add('hidden');
        
        // 显示主内容
        mainContent.classList.remove('hidden');
        
        // 强制重绘以触发 transition
        void mainContent.offsetWidth; 
        
        // 添加模糊到清晰的动画类
        mainContent.classList.add('fade-in-blur');
    }, 1000);
}