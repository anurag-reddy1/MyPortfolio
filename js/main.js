const initScrollAnimations = () => {
  const elements = document.querySelectorAll(".fade-in");
  if (elements.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
};

const initTypedText = () => {
  const el = document.getElementById("typed-text");
  if (!el) return;

  const phrases = [
    "Software Developer II",
    "Design Systems Developer & Architect",
    "React & TypeScript Expert",
    "MSCS @ Northeastern",
  ];

  let phraseIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  const typeSpeed = 80;
  const deleteSpeed = 40;
  const pauseEnd = 1800;
  const pauseStart = 400;

  const tick = () => {
    const current = phrases[phraseIdx];

    if (isDeleting) {
      charIdx--;
      el.textContent = current.substring(0, charIdx);
    } else {
      charIdx++;
      el.textContent = current.substring(0, charIdx);
    }

    let delay = isDeleting ? deleteSpeed : typeSpeed;

    if (!isDeleting && charIdx === current.length) {
      delay = pauseEnd;
      isDeleting = true;
    } else if (isDeleting && charIdx === 0) {
      isDeleting = false;
      phraseIdx = (phraseIdx + 1) % phrases.length;
      delay = pauseStart;
    }

    setTimeout(tick, delay);
  };

  tick();
};

const initNavbarScroll = () => {
  const navbar = document.getElementById("main-navbar");
  if (!navbar) return;

  const onScroll = () => {
    if (window.scrollY > 60) {
      navbar.style.boxShadow = "0 2px 20px rgba(0,0,0,0.25)";
    } else {
      navbar.style.boxShadow = "none";
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
};

document.addEventListener("DOMContentLoaded", () => {
  initScrollAnimations();
  initTypedText();
  initNavbarScroll();
});
