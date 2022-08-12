const search = decodeURI(location.search.slice(1));
fetch("src/data/articles.json")
  .catch(() => {
    alert("Error while charging articles");
  })
  .then((res) => res.json())
  .then((articles) => {
    articles.forEach((article) => {
      if (
        search &&
        article.file.replaceAll(" ", "_").toLowerCase() ===
          search.replaceAll(" ", "_").toLowerCase()
      ) {
        fetch(`articles/${search.replaceAll(" ", "_").toLowerCase()}.md`)
          .catch(() => (location.href = "news"))
          .then((res) => res.text())
          .then((data) => {
            document.querySelector(
              ".app"
            ).innerHTML = `<i>By ${article.author}, ${new Date(article.date).toLocaleDateString("en-us")}.</i><br/>`;

            const iframe = document.createElement("iframe");
            iframe.classList.add("tile");
            iframe.style.border = "none";
            iframe.style.backgroundColor = "#ffffff";

            iframe.src = "article.html";
            iframe.addEventListener("load", () => {
              const md = new markdownit({
                html: true,
                linkify: true,
                typographer: true,
                highlight: (str, lang) => {
                  if (lang && hljs.getLanguage(lang)) {
                    try {
                      return hljs.highlight(lang, str).value;
                    } catch (e) {}
                  }
                  return "";
                },
              })
                .use(window.markdownitEmoji)
                .use(window.markdownitSub)
                .use(window.markdownitSup)
                .use(window.markdownitIns)
                .use(window.markdownitMark);

              iframe.contentWindow.document.querySelector("#md").innerHTML =
                md.render(data);

              let watcher, lastScrollHeight;
              const container = iframe.contentWindow.document.body;

              function watch() {
                cancelAnimationFrame(watcher);
                if (lastScrollHeight !== container.scrollHeight) {
                  iframe.height =
                    iframe.contentWindow.document.body.scrollHeight + 50 + "px";
                }
                lastScrollHeight = container.scrollHeight;
                watcher = requestAnimationFrame(watch);
              }

              container.addEventListener("click", (e) => {
                if (e.target.nodeName === "A") {
                  e.preventDefault();
                  location.href = e.target.href;
                }
              });

              watcher = window.requestAnimationFrame(watch);
            });

            document.querySelector(".app").appendChild(iframe);
          });
      } else if (!search) {
        const container = document.createElement("div");
        container.classList.add("tile");
        container.style.cursor = "pointer";
        container.style.justifyContent = "space-between";
        container.style.alignItems = "center";
        container.style.marginLeft = "0";
        container.onclick = () =>
          (location.href = location.href.endsWith("/")
            ? location.href + article.file.replaceAll(" ", "_").toLowerCase()
            : `${location.href}?${article.file
                .replaceAll(" ", "_")
                .toLowerCase()}`);

        const text = document.createElement("div");
        text.classList.add("text");
        text.innerHTML = "<h3>" + article.title + "</h3>";

        const img = document.createElement("div");
        img.classList.add("tile");
        img.classList.add("img");
        img.style.minHeight = "100px";
        img.style.padding = "0";
        img.style.margin = "0 0 0 50px";
        img.style.backgroundImage = article.image
          ? /^https?:/.test(article.image)
            ? `url("${article.image}")`
            : `url("articles/images/${article.image}")`
          : "none";

        document.querySelector(".app").style.flexDirection = "column-reverse";

        container.appendChild(text);
        container.appendChild(img);
        document.querySelector(".app").appendChild(container);
      }
    });
  });
