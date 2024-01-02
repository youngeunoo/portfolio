document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const skillTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".skill",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
    },
  });

  skillTimeline
    .from(".list-box01", { opacity: 1, y: 0 })
    .to(".list-box01", { opacity: 0, y: -50, onComplete: showListBox02 })
    .from(".list-box02", { opacity: 0, y: 50 })
    .to(".list-box02", { opacity: 1, y: 0 });

  // Swiper 초기화
  const swiper = new Swiper(".mySwiper", {
    effect: "fade",
    fadeEffect: { crossFade: true },
    speed: 500,
  });

  // 프로젝트 영역의 스크롤 트리거 설정
  gsap.to(".project", {
    scrollTrigger: {
      trigger: ".project",
      start: "top top",
      end: () => "+=" + document.querySelector(".swiper-slide").offsetWidth,
      scrub: 1,
      pin: true,
      onUpdate: (scrollTrigger) => {
        const progress = scrollTrigger.progress;
        const totalSlides = swiper.slides.length;
        const targetSlide = Math.floor(progress * totalSlides);
        swiper.slideTo(targetSlide);
      },
    },
  });

  function showListBox02() {
    gsap.to(".list_box02", { opacity: 1, y: 0 });
  }

  // 마우스
  const mouse = document.querySelector(".mouse");

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX;

    const mouseY = e.pageY;

    mouse.style.left = mouseX + "px";

    mouse.style.top = mouseY + "px";
  });

  new TypeIt("#textBox", {
    strings: "<strong>성영은</strong>입니다!",
    speed: 200,
    waitUntilVisible: true,
    cursor: true,
    keyborad: true,
    loop: true,
    html: true,
    deleteSpeed: 200,
  })
    .pause(100)
    .go();
});
