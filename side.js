const openBtn = document.getElementById("openOverlayBtn"); // 열기 버튼
const closeBtn = document.getElementById("closeBtn"); // 닫기 버튼
const infoOVerlay = document.getElementById("infoOVerlay"); // 오버레이

// 오버레이 열기
openBtn.addEventListener("click", () => {
  infoOVerlay.classList.add("active"); // 오른쪽에서 슬라이드 등장
});

// 오버레이 닫기
closeBtn.addEventListener("click", () => {
  infoOVerlay.classList.remove("active"); // 오른쪽으로 슬라이드 아웃
});

// 바깥 클릭 시 오버레이 닫기
window.addEventListener("click", (e) => {
  if (e.target === infoOVerlay) {
    infoOVerlay.classList.remove("active");
  }
});
