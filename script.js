document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('typing-text');
    // 在这里修改你想显示的文字
    const textToType = "The interface between reality and the digital void. \nLoading assets... \nWelcome to the archive.";
    const typingSpeed = 50; // 打字速度 (毫秒)

    let i = 0;

    function typeWriter() {
        if (i < textToType.length) {
            if (textToType.charAt(i) === "\n") {
                textElement.innerHTML += "<br>";
            } else {
                textElement.innerHTML += textToType.charAt(i);
            }
            i++;
            setTimeout(typeWriter, typingSpeed);
        }
    }

    // 延迟一点开始打字
    setTimeout(typeWriter, 1000);
});