// Ce script permet d'afficher le menu au clic sur le burger
document.addEventListener("DOMContentLoaded", function () {
  var burgerMenu = document.querySelector(".burgerMenu");
  var menuLink = document.querySelector(".menuLink_a");
  var navbar = document.querySelector(".navbar");
  var body = document.querySelector("body");

  function toggleNav() {
    navbar.classList.toggle("showNav");
  }
  function noScroll() {
    body.classList.toggle("noScroll");
  }

  burgerMenu.addEventListener("click", toggleNav);
  burgerMenu.addEventListener("click", noScroll);
  menuLink.addEventListener("click", toggleNav);
  menuLink.addEventListener("click", noScroll);
});

// Ce script permet d'animer la souris
document.addEventListener("DOMContentLoaded", function () {
  const coords = { x: 0, y: 0 };
  const circles = document.querySelectorAll(".circle");
  circles.forEach(function (circle) {
    circle.x = 0;
    circle.y = 0;
  });

  window.addEventListener("mousemove", function (e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
  });

  function animateCircles() {
    let x = coords.x;
    let y = coords.y;

    circles.forEach(function (circle, index) {
      circle.style.left = x - 12 + "px";
      circle.style.top = y - 12 + "px";

      circle.style.scale = (circles.length - index) / circles.length;
      circle.x = x;
      circle.y = y;

      const nextCircle = circles[index + 1] || circles[0];
      x += (nextCircle.x - x) * 0.4;
      y += (nextCircle.y - y) * 0.4;
    });
    requestAnimationFrame(animateCircles);
  }
  animateCircles();
});

// Ce script permet d'animer les élements du hero-header
// document.addEventListener("DOMContentLoaded", function () {
//   window.addEventListener("mousemove", function (i) {
//     coords.x = i.clientX;
//     coords.y = i.clientY;
//   });
//   window.addEventListener("scroll", function(j)){

//   }
// });
