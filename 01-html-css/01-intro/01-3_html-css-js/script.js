// 동작: JavaScript
document.addEventListener("DOMContentLoaded", () => {
  // 변수 선언
  let clickCount = 0;
  const button = document.getElementById("clickMe");
  const counter = document.getElementById("counter");

  // 이벤트 처리
  button.addEventListener("click", () => {
    // 상태 업데이트
    clickCount++;
    // DOM 조작
    counter.textContent = `클릭 횟수: ${clickCount}`;

    // 조건문 예시
    if (clickCount >= 10) {
      alert("10번 클릭하셨습니다!");
      clickCount = 0;
      counter.textContent = `클릭 횟수: ${clickCount}`;
    }
  });

  // 스타일 버튼에 동적 효과 추가
  const styledButton = document.querySelector(".styled-button");
  styledButton.addEventListener("mouseover", () => {
    styledButton.style.transform = "scale(1.1)";
  });
  styledButton.addEventListener("mouseout", () => {
    styledButton.style.transform = "scale(1)";
  });
});
