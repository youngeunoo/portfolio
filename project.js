document.addEventListener("DOMContentLoaded", function () {
  AOS.init({
    duration: 800,
    offset: 100,
    easing: "ease-in-out",
    once: true,
  });
  const mouse = document.querySelector(".mouse");

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.pageX;

    const mouseY = e.pageY;

    mouse.style.left = mouseX + "px";

    mouse.style.top = mouseY + "px";
  });
});
