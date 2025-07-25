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

  animateTyping("I'm Kabelo", "typing", 100);
  fillSkillBars();
};

// Typing Effect (No Deletion)
function animateTyping(text, targetId, speed = 100) {
  const target = document.getElementById(targetId);
  let i = 0;
  const type = () => {
    if (i < text.length) {
      target.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  };
  type();
}

// Fill Skill Bars on Load
function fillSkillBars() {
  const bars = document.querySelectorAll(".progress");
  bars.forEach(bar => {
    const width = bar.getAttribute("data-width");
    bar.style.width = width;
  });
}

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("form-status").textContent = "✅ Message sent (demo only)";
  this.reset();
});
