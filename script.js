// PAGE NAVIGATION
const links = document.querySelectorAll(".nav-link");
const pages = document.querySelectorAll(".page");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();

    const target = link.getAttribute("href").substring(1);

    pages.forEach(p => p.classList.remove("active"));
    links.forEach(l => l.classList.remove("active"));

    document.getElementById(target).classList.add("active");
    link.classList.add("active");

    document.querySelector(".nav-menu").classList.remove("show");
  });
});

// MOBILE MENU
function toggleMenu() {
  document.querySelector(".nav-menu").classList.toggle("show");
}

// 🌙 DARK / LIGHT TOGGLE (WORKING)
function toggleTheme() {
  const body = document.body;
  const icon = document.getElementById("themeIcon");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    body.classList.add("light");
    icon.textContent = "☀️";
  } else {
    body.classList.remove("light");
    body.classList.add("dark");
    icon.textContent = "🌙";
  }
}