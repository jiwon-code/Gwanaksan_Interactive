function changeIframe(url) {
            document.getElementById("iframewildfire_box").src = url;
        }

function scrollToElement(elementId) {
    const targetElement = document.getElementById(elementId); // 대상 요소 가져오기
    if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' }); // 부드럽게 스크롤
    }
}

document.querySelectorAll(".history_box").forEach(function(box) {
    box.addEventListener("click", function() {
        // 모든 .history_box 요소에서 .this 클래스 제거
        document.querySelectorAll(".history_box").forEach(function(otherBox) {
            otherBox.classList.remove("this");
        });

        // 현재 클릭된 요소에 .this 클래스 추가
        this.classList.add("this");
    });
});

function changeColor(event) {
    const fillElement = event.currentTarget.querySelector(".fill");
    fillElement.style.width = "100%";
}

function fillBox() {
    const box = document.querySelector(".redBox");
    box.style.opacity = "1"; // 색이 서서히 나타남
}


function showBox(boxId) {
    const box = document.getElementById(boxId);

    // 부모 요소(#whyhowbox)를 기준으로 위치 조정
    box.style.visibility = "visible";
    box.style.opacity = "1";

    // 박스를 부모 요소 내부에서만 이동하도록 설정
    setTimeout(() => {
        box.style.transition = "top 0.7s ease-in-out";
        box.style.top = "0"; // 부모 기준으로 이동
    }, 50);
}


function showBoxContent(contentHTML) {
    const container = document.getElementById("whyhow_container");

    // 박스를 먼저 보이게 설정
    container.style.display = "block";
    setTimeout(() => {
        container.style.opacity = "1";
    }, 50);

    // 내부 HTML을 변경하여 복잡한 구조를 삽입 가능
    container.innerHTML = contentHTML;
}

function animateBoxes() {
    const boxes = document.querySelectorAll(".chartbox");

    boxes.forEach((box, index) => {
        setTimeout(() => {
            box.style.top = "0"; // 순차적으로 아래로 이동
        }, index * 300); // 0.3초 간격으로 실행
    });
}

function showTextChart() {
  setTimeout(() => {
    document.querySelector(".chartexplain").style.opacity = "1";
  }, 2000);
}



// 현재 보여지고 있는 이미지 인덱스 (초기엔 0번 씬이 보인다고 가정)
let currentIndex = -1;

// 클릭 시 다음 이미지를 보여주는 함수
function showTextPic() {
  const scenes = document.querySelectorAll("#spreadcontainer .scenes");
  if (scenes.length === 0) return;

  // 모든 씬에서 active 클래스를 제거합니다.
  scenes.forEach(scene => scene.classList.remove("active"));

  // 순환 구조: 현재 인덱스를 업데이트하여 다음 씬을 선택합니다.
  currentIndex = (currentIndex + 1) % scenes.length;
  
  // 선택된 씬에 active 클래스를 추가합니다.
  scenes[currentIndex].classList.add("active");
}

// 콘텐츠가 로드될 때 첫 번째 씬을 active 상태로 만듭니다.
document.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll("#spreadcontainer .scenes");
  if (scenes.length > 0) {
    scenes[0].classList.add("active");
  }
});


 function showpleaseBox() {
        document.getElementById('pleaseBox').style.opacity = "1";
    }

 function showplsplsBox() {
        document.getElementById('plsplsbox').style.opacity = "1";
    }


function disableHover(element) {
        element.classList.add("hover-disabled");
    }
