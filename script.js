const typed = new Typed(".hero-left-text h1", {
  strings: ["Hackerspace"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

ScrollReveal({
  // reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".bottom-text,.bottons", { origin: "bottom" });
ScrollReveal().reveal(".hero-left-text", { origin: "left" });
ScrollReveal().reveal(".hero-right-text", {
  origin: "right",
});
