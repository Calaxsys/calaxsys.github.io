const btn = document.getElementById('dark-mode-toggle');
const body = document.querySelector('body')
const moonIcon = document.getElementById('moon');
const sunIcon = document.getElementById('sun');

function applyTheme(theme) {
  if (theme === "dark") {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    moonIcon.style.display = "block";
    sunIcon.style.display = 'none';
  } else {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    moonIcon.style.display = 'none';
    sunIcon.style.display = 'block';
  }
}

// Check localStorage for saved theme and apply it
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'light';
  applyTheme(savedTheme);
});

// Toggle theme on button click and save to localStorage
btn.addEventListener('click', () => {
  if (body.classList.contains('light-theme')) {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  }
});