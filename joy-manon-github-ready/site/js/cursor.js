const finePointer = window.matchMedia("(pointer: fine)").matches;
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (finePointer && !reducedMotion) {
  const dot = document.querySelector(".cursor-dot");
  const ring = document.querySelector(".cursor-ring");
  let x = -100;
  let y = -100;
  let ringX = x;
  let ringY = y;

  window.addEventListener("pointermove", (event) => {
    x = event.clientX;
    y = event.clientY;
    if (dot) dot.style.transform = `translate3d(${x}px,${y}px,0)`;
  }, { passive: true });

  function animate() {
    ringX += (x - ringX) * 0.14;
    ringY += (y - ringY) * 0.14;
    if (ring) ring.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
}
