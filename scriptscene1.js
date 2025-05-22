window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;
    let maxScroll = document.body.scrollHeight - window.innerHeight;
    
    // 더 빠르게 사라지도록 변화율을 높임 (예: 기존보다 2배 빠르게)
    let opacity = 1 - (scrollY / (maxScroll / 8)); 

    if (opacity < 0) opacity = 0; // 음수 방지

    console.log(`ScrollY: ${scrollY}, MaxScroll: ${maxScroll}, Opacity: ${opacity}`);

    document.getElementById("back_g1").style.opacity = opacity;
});



document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section.blueu"); // 모든 section 요소 선택

    window.addEventListener("scroll", function() {
        sections.forEach(section => { // 모든 section에 대해 반복 실행
            let sectionPos = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (sectionPos < windowHeight * 0.7) {
                section.style.left = "0";
            } else {
                section.style.left = "1440px";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section.redeu"); // 모든 section 요소 선택

    window.addEventListener("scroll", function() {
        sections.forEach(section => { // 모든 section에 대해 반복 실행
            let sectionPos = section.getBoundingClientRect().top;
            let windowHeight = window.innerHeight;

            if (sectionPos < windowHeight * 0.7) {
                section.style.right = "0";
            } else {
                section.style.right = "1440px";
            }
        });
    });
});



