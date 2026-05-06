gsap.registerPlugin(ScrollTrigger);

// select carousel
const carousel = document.querySelector(".carousel");

// total width (number of items)
const TotalWidth = carousel.scrollWidth - window.innerWidth;

// animation
gsap.to(carousel, {
  x: -TotalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".carousel-section",
    start: "top top",
    end: () => "+=" + TotalWidth,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});