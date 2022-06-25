function switchTheme() {
  const root = document.querySelector(":root");
  const rootStyle = getComputedStyle(root);

  const primary = rootStyle.getPropertyValue("--primary").trim();
  const secondary = rootStyle.getPropertyValue("--secondary").trim();

  root.style.setProperty("--primary", secondary);
  root.style.setProperty("--secondary", primary);
}

document
  .querySelector("nav>.links>.switch-theme")
  .addEventListener("click", switchTheme);
