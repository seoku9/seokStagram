const posts = [
  {
    username: "seokwookim",
    projectName: "첫번째 프로젝트 TennisMakert",
    profileImage: "./img/profile.jpg",
    projectDescription:
      "    이 프로젝트는 테니스 라켓 마켓을 위한 간단한 쇼핑 페이지입니다. 사용자인터페이스(UI)를 직관적으로 설계하고, 기본적인 상품 주문 기능을 구현하였습니다.",
    projectImages: ["./img/feed1.png"],
    techStack: ["html", "css", "javascript"],
    route: 1,
  },
  {
    username: "seokwookim",
    projectName: "두번째 프로젝트 BoB",
    profileImage: "./img/profile.jpg",
    projectDescription:
      "이 프로젝트는 보안 전문가 양성 프로그램 사이트 BOB사이트를 퍼블리싱 및 제작하였습니다.",
    projectImages: ["./projectImg/bob.png", "./projectImg/bob1.png"],
    techStack: ["html", "css", "javascript", "React"],
    route: 2,
  },
  {
    username: "seokwookim",
    projectName: "세번째 프로젝트 YMCA",
    profileImage: "./img/profile.jpg",
    projectDescription:
      "이 프로젝트는 프리다이빙 양성 교육 사이트 ymca를 퍼블리싱 및 프론트엔드 업무를 맡아 제작하였습니다.",
    projectImages: [
      "./projectImg/ymca1.png",
      "./projectImg/ymca2.png",
      "./projectImg/ymca3.png",
    ],
    techStack: ["html", "css", "javascript", "React"],
    route: 3,
  },
  {
    username: "seokwookim",
    projectName: "네번째 프로젝트 Deep 챌린지",
    profileImage: "./img/profile.jpg",
    projectDescription:
      "이 프로젝트는 프리다이빙 딥챌린지 대회 사이트를 제작하였습니다.",
    projectImages: ["./projectImg/deep1.png", "./projectImg/deep2.png"],
    techStack: ["html", "css", "javascript", "React"],
    route: 4,
  },
  // 추가적인 포스트들을 여기에 추가
];

// 포스트들을 반복하여 추가할 컨테이너 선택
const postsContainer = document.getElementById("posts-container");

// 반복문을 사용하여 포스트 추가
function loadPosts() {
  posts.forEach((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
      <div class="post-header">
        <img src="${post.profileImage}" alt="Profile" class="profile-pic" />
        <div class="feedUsername">${post.username} </div>
      </div>
      <img src="${post.projectImages[0]}" alt="Post Image" class="post-image" />
      <div class="caption">
        <strong>${post.username}</strong> ${post.projectName}
      </div>
    `;

    // 포스트 클릭 시 라우팅 처리
    postElement.addEventListener("click", function () {
      handleClick(post);
    });

    // 동적으로 생성된 포스트를 컨테이너에 삽입
    postsContainer.appendChild(postElement);
  });

  function handleClick(post) {
    sessionStorage.setItem("userData", JSON.stringify(post));

    window.location.href = "feed.html";
  }
}

window.onload = loadPosts;
