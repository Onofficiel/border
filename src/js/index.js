let darkTheme = false;

function switchTheme() {
  const root = document.querySelector(":root");
  const rootStyle = getComputedStyle(root);

  const dark = rootStyle.getPropertyValue("--dark").trim();
  const light = rootStyle.getPropertyValue("--light").trim();

  if (darkTheme) {
    root.style.setProperty("--primary", dark);
    root.style.setProperty("--secondary", light);
  } else {
    root.style.setProperty("--primary", light);
    root.style.setProperty("--secondary", dark);
  }

  darkTheme = !darkTheme;
}

document.querySelector("nav>.links>.switch-theme").addEventListener("click", switchTheme);