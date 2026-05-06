gsap.registerPlugin(ScrollTrigger);

// select carousel
const carousel = document.querySelector(".carousel");

// total width (number of items)
const totalWidth = carousel.scrollWidth - window.innerWidth;

// animation
gsap.to(carousel, {
  x: -totalWidth,
  ease: "none",
  scrollTrigger: {
    trigger: ".carousel-section",
    start: "top top",
    end: () => "+=" + totalWidth,
    scrub: true,
    pin: true,
    anticipatePin: 1
  }
});