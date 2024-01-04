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
    .to(".list-box02", { opacity: 1, y: 0 })
    .to(".list-box02", { opacity: 0, y: -50, onComplete: showListBox03 })
    .from(".list-box03", { opacity: 0, y: 50 })
    .to(".list-box03", { opacity: 1, y: 0 });

  function showListBox02() {
    gsap.to(".list_box02", { opacity: 1, y: 0 });
  }
  function showListBox03() {
    gsap.to(".list-box03", { opacity: 1, y: 0 });
  }

  // Swiper 초기화
  const swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    speed: 500,
    slidesPerView: 1.3,
    centeredSlides: true,
    spaceBetween: 5,
    // loop: true,
    breakpoints: {
      600: {
        slidesPerView: 1.8,
        spaceBetween: 0,
      },
    },
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
