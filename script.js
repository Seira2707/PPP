const joinPartyButton = document.getElementById("joinParty");
const button = document.getElementById("leftWing");

// localStorage에서 count 값을 가져옴
let count = parseInt(localStorage.getItem("count")) || 0;

joinPartyButton.addEventListener('click', () => {
    if (count >= 10) {
        window.location.href = 'angryyoon.html';
    } else {
        window.location.href = 'yoonpage.html';
    }
});

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

    // count 값을 localStorage에 저장
    localStorage.setItem("counts", count);

    console.log(`횟수: ${count}`);
});
