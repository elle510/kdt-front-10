// VS Code 주요 단축키 예시 (Windows)

/*
1. 기본 편집
- 줄 복사: Shift + Alt + ↓/↑
- 줄 이동: Alt + ↓/↑
- 여러 줄 선택: Ctrl + L
- 주석 처리: Ctrl + /
*/
function basicEditing() {
  // 이 줄을 복사해보세요 (Shift + Alt + ↓)
  console.log("Hello World");

  // 이 줄들을 위아래로 이동해보세요 (Alt + ↓/↑)
  let a = 1;
  let b = 2;

  // 이 블록을 주석처리 해보세요 (Ctrl + /)
  if (a > b) {
    console.log("a is greater");
  }
}

/*
2. 검색 및 이동
- 파일 찾기: Ctrl + P
- 전체 검색: Ctrl + Shift + F
- 정의로 이동: Ctrl + Click
*/
function searchAndNavigation() {
  const example = "Try finding this variable";
  console.log(example);
}

/*
3. 멀티커서 편집
- 다중 선택: Ctrl + D
- 모든 일치 항목 선택: Ctrl + Shift + L
*/
function multiCursorEdit() {
  const item1 = "apple";
  const item2 = "apple";
  const item3 = "apple"; // 'apple'을 선택하고 Ctrl + D로 다음 항목 선택
}

/*
4. 코드 포맷팅
- 전체 포맷: Shift + Alt + F
- 선택 영역 포맷: Ctrl + K Ctrl + F
*/
function messyCode() {
  const obj = { a: 1, b: 2, c: 3 }; // 이 코드를 포맷해보세요
}

// 더 많은 단축키: Ctrl + K Ctrl + S (키보드 단축키 목록 열기)
