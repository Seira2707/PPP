const button = document.getElementById("leftWing");
let count = 0;

button.addEventListener('mouseenter', () => {
    // 버튼을 랜덤한 위치로 이동
    const maxX = window.innerWidth - button.clientWidth;
    const maxY = window.innerHeight - button.clientHeight;
    
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.marginLeft = `${randomX}px`;
    button.style.marginTop = `${randomY}px`;

    // count 변수를 증가시킴
    count++;

    console.log(`횟수: ${count}`);
});
