const text = "Web Developer";
const speed = 80;
const eraseSpeed = 50;
const delay = 1500;

let i = 0;
let isDeleting = false;

function typeLoop() {
  const el = document.getElementById("typedText");

  if (!isDeleting) {
    el.textContent = text.slice(0, i++);
    if (i > text.length) {
      setTimeout(() => (isDeleting = true), delay);
    }
  } else {
    el.textContent = text.slice(0, i--);
    if (i === 0) {
      isDeleting = false;
    }
  }

  setTimeout(typeLoop, isDeleting ? eraseSpeed : speed);
}

typeLoop();
