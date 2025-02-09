document.addEventListener("DOMContentLoaded", function () {
  let currentStoryIndex = 0;
  let currentLicenseIndex = 0;
  const storyBtn = document.querySelector(".homeAvatar"); // 스토리 보기 버튼
  const overlay = document.querySelector(".overlay"); // 오버레이 (스토리 화면)

  const licenseOverlay = document.getElementById("licenseOverlay"); // 오버레이
  const nextLicense = document.querySelector(".nextLicense");
  const licenses = document.querySelectorAll(".license-slide");
  const licenseBtn = document.getElementById("licenseBtn");
  const closeBtn = document.querySelector(".close-btn"); // 닫기 버튼 (X)
  const dmInput = document.querySelector(".dmInput"); // DM 입력창
  const nextBtn = document.querySelector(".next-btn");
  const stories = document.querySelectorAll(".story-slide");

  const infoOVerlay = document.getElementById("infoOVerlay");
  const toggleBtn = document.getElementById("toggleOverlayBtn");

  toggleBtn.addEventListener("click", function () {
    infoOVerlay.classList.toggle("active"); // active 클래스 토글
  });

  // 오버레이 배경 클릭 시 닫기 (카드 클릭 시 닫히지 않음)
  infoOVerlay.addEventListener("click", function (e) {
    infoOVerlay.classList.remove("active");
  });

  function showStory(index) {
    // 모든 스토리 숨기기

    stories.forEach((story) => (story.style.display = "none"));

    if (index >= 0 && index < stories.length) {
      stories[index].style.display = "block";
    }
  }

  nextBtn.addEventListener("click", () => {
    currentStoryIndex++;

    if (currentStoryIndex >= stories.length) {
      currentStoryIndex = 0;
    }
    showStory(currentStoryIndex);
  });

  // 처음에 첫 번째 스토리 표시
  showStory(currentStoryIndex);
  storyBtn.addEventListener("click", function () {
    overlay.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    overlay.classList.remove("show");
  });

  overlay.addEventListener("click", function (event) {
    if (!dmInput.contains(event.target) || !nextBtn.contains(event.target)) {
      overlay.classList.remove("show");
    }
  });

  nextBtn.addEventListener("click", function (event) {
    event.stopPropagation();
  });
});
