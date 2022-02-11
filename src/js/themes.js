const container = document.querySelector("#tile-container");
const search = document.querySelector("#search");
const tiles = document.querySelectorAll(".tile");

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
          <span class="title">${theme.title}</span>
          <span class="author">By ${theme.author}</span>
          <span class="description">${theme.description}</span>
        </div>
        <a class="download" download href="${theme.url}">Download</a>
      </div>

        <div
          class="image"
          style="background-image: url('${theme.image}');"
        ></div>
      `;

      container.appendChild(tile);
    });

    // search.addEventListener("keydown", () => {
    if (!search.value) {
    }
    tiles.forEach((tile) => {
      data.forEach((theme) => {
        console.log("Ok", theme.title);
      });
    });
    // });
  });
