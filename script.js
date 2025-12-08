// script.js
document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll(".tab");
  const contents = document.querySelectorAll(".tabcontent");
  const darkModeSwitch = document.getElementById("dark-mode-switch");
  const body = document.body;

  // --- CONTROL DE TABS ---
  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      const target = this.getAttribute("data-tab");

      // Quita la clase 'active' de todos los tabs
      tabs.forEach((t) => t.classList.remove("active"));
      // Oculta todos los contenidos
      contents.forEach((c) => (c.style.display = "none"));

      // Activa el tab actual y su contenido
      this.classList.add("active");
      const contentToShow = document.querySelector(`#tabcontent${target}`);
      if (contentToShow) {
        contentToShow.style.display = "block";
      }
    });
  });

  // Mostrar el primer tab al cargar
  if (tabs.length > 0) {
    tabs[0].classList.add("active");
    contents[0].style.display = "block";
  }

  // --- MODO OSCURO (por defecto) ---
  body.classList.add("darkmode");
  darkModeSwitch.checked = true;

  // Cambiar entre modos al usar el switch
  darkModeSwitch.addEventListener("change", function () {
    if (this.checked) {
      body.classList.add("darkmode");
    } else {
      body.classList.remove("darkmode");
    }
  });
});
