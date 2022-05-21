const container = document.querySelector("#tile-container");
const search = document.querySelector("#search");

fetch("./src/data/blugins.json")
  .then((r) => {
    return r.json();
  })
  .then((data) => {
    data.forEach((blugin) => {
      const tile = document.createElement("div");
      tile.classList.add("tile");
      tile.innerHTML = `
      <div class="container">  
        <div class="text-container">
          <span class="title">${blugin.name}</span>
          <span class="author">By ${blugin.author} ⋅ For ${blugin.version}</span>
          <span class="description">${blugin.description}</span>
        </div>
        <a class="download" download="${blugin.name.toLowerCase()}.bjs" href="${
        blugin.url
      }">Download</a>
      </div>

        <div
          class="image"
          style="background-image: url('${blugin.image || "./src/img/NoImg.png"}');"
        ></div>
      `;

      container.appendChild(tile);
    });

    search.addEventListener("keyup", () => {
      const tiles = document.querySelectorAll(".tile");

      document.querySelector("h1").innerText = search.value || "Blugins";

      tiles.forEach((tile) => {
        tile.style.display = "flex";
      });

      if (!search.value) return;

      data.forEach((blugin) => {
        if (!blugin.name.toLowerCase().includes(search.value.toLowerCase())) {
          tiles.forEach((tile) => {
            if (
              tile.querySelector(".container>.text-container>.title")
                .innerText === blugin.name
            ) {
              tile.style.display = "none";
            }
          });
        }
      });
    });
  });
