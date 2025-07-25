// Light/Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  document.body.classList.toggle("light-mode");
  localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Persist theme
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.classList.remove("light-mode", "dark-mode");
    document.body.classList.add(`${savedTheme}-mode`);
  }
};

// Typing Text Animation
const phrases = ["I'm Kabelo 👨‍💻", "A Developer 💡", "An IT Student 🎓"];
let i = 0, j = 0, currentPhrase = [], isDeleting = false;

function loopTyping() {
  document.getElementById("typing").textContent = currentPhrase.join("");

  if (!isDeleting && j < phrases[i].length) {
    currentPhrase.push(phrases[i][j++]);
  } else if (isDeleting && j > 0) {
    currentPhrase.pop();
    j--;
  }

  if (j === phrases[i].length) isDeleting = true;
  if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
  }

  setTimeout(loopTyping, isDeleting ? 50 : 120);
}
loopTyping();

// Form Validation (Feedback Message)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "✅ Message sent (demo only)";
  this.reset();
});
