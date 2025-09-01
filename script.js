// Fade in sections with delay (optional enhancement)
document.addEventListener("DOMContentLoaded", () => {
  const fades = document.querySelectorAll(".fade");
  fades.forEach((el, index) => {
    el.style.animationDelay = `${index * 0.4}s`;
    el.style.opacity = "1";
  });
});
