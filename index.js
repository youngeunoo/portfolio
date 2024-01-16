gsap.registerPlugin(ScrollTrigger);

// scroll
const lenis = new Lenis();

lenis.on("scroll", ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 700);
});

gsap.ticker.lagSmoothing(0);

// main
gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top top",
    end: "bottom center",
    onEnterBack: () => {
      gsap.to(".intro-box p", {
        opacity: 0,
      });
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

// intro
gsap.timeline({
  scrollTrigger: {
    trigger: ".intro",
    start: "top top",
    end: "bottom center",
    pin: true,
    onEnter: () => {
      gsap.to(".intro-box p", {
        opacity: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".intro-box p", {
        opacity: 1,
      });
    },
  },
});

// skill
gsap
  .timeline({
    scrollTrigger: {
      trigger: ".skill",
      start: "top top",
      end: "bottom top",
      pin: true,
      scrub: 1,
      onEnter: () => {
        gsap.to(".intro-box p", {
          opacity: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(".tag", {
          y: 30,
          opacity: 0,
        });
      },
    },
  })
  .from(".list-box01", { opacity: 1, y: 0 })
  .to(".list-box01", { opacity: 0, y: -50, onComplete: showListBox02 })
  .to(".list-box02", { opacity: 1, y: 0 })
  .to(".list-box02", { opacity: 0, y: -50, onComplete: showListBox03 })
  .to(".list-box03", { opacity: 1, y: 0 });

function showListBox02() {
  gsap.to(".list-box02", { opacity: 1, y: 0 });
}
function showListBox03() {
  gsap.to(".list-box03", { opacity: 1, y: 0 });
}

// project
gsap.timeline({
  scrollTrigger: {
    trigger: ".project",
    start: "top top",
    end: "bottom center",
    pin: true,
    scrub: 1,
    onEnter: () => {
      gsap.to(".tag", {
        y: -30,
        opacity: 1,
      });
    },
    onEnterBack: () => {
      gsap.to(".tag", {
        y: -30,
        opacity: 1,
      });
    },
  },
});

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
  breakpoints: {
    600: {
      slidesPerView: 1.8,
      spaceBetween: 0,
    },
  },
});

// outro
gsap.timeline({
  scrollTrigger: {
    trigger: ".outro",
    start: "top top",
    end: "bottom center",
    scrub: 1,
    onEnter: () => {
      gsap.to(".tag", {
        y: 30,
        opacity: 0,
      });
    },
  },
});
