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
