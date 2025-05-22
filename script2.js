const photos = document.querySelectorAll('.pictures');
let currentIndex = 0;

document.getElementById('picture').addEventListener('click', (event) => {
    const frameWidth = event.currentTarget.offsetWidth;
    const clickX = event.clientX;

    if (clickX < frameWidth / 2) {
        // 왼쪽 클릭: 이전 사진
        currentIndex = (currentIndex - 1 + photos.length) % photos.length;
    } else {
        // 오른쪽 클릭: 다음 사진
        currentIndex = (currentIndex + 1) % photos.length;
    }

    // 모든 사진 숨기고, 새로운 활성 이미지 표시
    photos.forEach(photo => photo.classList.remove('active'));
    photos[currentIndex].classList.add('active');
});




const photos2 = document.querySelectorAll('.pictures2');
let currentIndex2 = 0;

document.getElementById('picture2').addEventListener('click', (event) => {
    const frameWidth = event.currentTarget.offsetWidth;
    const clickX = event.clientX;

    if (clickX < frameWidth / 2) {
        // 왼쪽 클릭: 이전 사진
        currentIndex2 = (currentIndex2 - 1 + photos2.length) % photos2.length;
    } else {
        // 오른쪽 클릭: 다음 사진
        currentIndex2 = (currentIndex2 + 1) % photos2.length;
    }

    // 모든 사진 숨기고, 새로운 활성 이미지 표시
    photos2.forEach(photo2 => photo2.classList.remove('active2'));
    photos2[currentIndex2].classList.add('active2');
});




const photos3 = document.querySelectorAll('.pictures3');
let currentIndex3 = 0;

document.getElementById('picture3').addEventListener('click', (event) => {
    const frameWidth = event.currentTarget.offsetWidth;
    const clickX = event.clientX;

    if (clickX < frameWidth / 2) {
        // 왼쪽 클릭: 이전 사진
        currentIndex3 = (currentIndex3 - 1 + photos3.length) % photos3.length;
    } else {
        // 오른쪽 클릭: 다음 사진
        currentIndex3 = (currentIndex3 + 1) % photos3.length;
    }

    // 모든 사진 숨기고, 새로운 활성 이미지 표시
    photos3.forEach(photo3 => photo3.classList.remove('active3'));
    photos3[currentIndex3].classList.add('active3');
});