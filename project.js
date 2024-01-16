document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    offset: 100,
    easing: "ease-in-out",
    once: true,
  });
  $(function () {
    $(".code-btn").click(function () {
      $(".code").slideToggle(400);
    });
  });
});

// scroll
const lenis = new Lenis();

lenis.on("scroll", (e) => {
  console.log(e);
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);
