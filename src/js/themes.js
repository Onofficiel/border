const container = document.querySelector("#tile-container");
const search = document.querySelector("#search");

fetch("./src/data/themes.json")
  .then((r) => {
    return r.json();
  })
  .then((data) => {
    data.forEach((theme) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.innerHTML = `
      <div class="container">  
        <div class="text-container">
          <span class="title">${theme.name}</span>
          <span class="author">By ${theme.author} ⋅ For ${theme.version}</span>
          <span class="description">${theme.description}</span>
        </div>
        <a class="download" download="${theme.name.toLowerCase()}.css" href="${
        theme.url
      }">Download</a>
      </div>

        <div
          class="image"
          style="background-image: url('${theme.image}');"
        ></div>
      `;

      container.appendChild(tile);
    });

    search.addEventListener("keyup", () => {
      const tiles = document.querySelectorAll(".tile");

      document.querySelector("h1").innerText = search.value || "Themes";

      tiles.forEach((tile) => {
        tile.style.display = "flex";
      });

      if (!search.value) return;

      data.forEach((theme) => {
        if (!theme.name.toLowerCase().includes(search.value.toLowerCase())) {
          tiles.forEach((tile) => {
            if (
              tile.querySelector(".container>.text-container>.title")
                .innerText === theme.name
            ) {
              tile.style.display = "none";
            }
          });
        }
      });
    });
  });
