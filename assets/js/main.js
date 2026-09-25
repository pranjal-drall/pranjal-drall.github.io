// Follow the system theme unless the visitor has saved a preference.
(() => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)");

  function updateTheme() {
    let saved;
    try {
      saved = localStorage.getItem("theme");
    } catch (_) {
      // Browsers may disable storage; the system preference still works.
    }
    const dark = saved === "dark" || (saved !== "light" && preference.matches);
    if (dark) {
      document.documentElement.dataset.theme = "dark";
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  updateTheme();
  preference.addEventListener("change", updateTheme);
})();
