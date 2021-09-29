let browser = {
    cfg: {
        tabNb: 0,
        currentTab: 0,
        tabId: [],
        version: 1.2,
        bgColor: "",
        txtColor: "",
    },
    protocols: {
        newtab: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Tab</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: indigo">
                    <div id="centered" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; flex-wrap: wrap;">
                        <img src="data:image/png;base64,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">
                        <div display: flex; justify-content: flex-start; align-items: center;>
                            <h1>Welcome to Border !</h1>
                            <p>
                                For searching just type it in the search bar and click the arrow button.
                            </p>
                        </div>
                    </div>
        </body>
        </html>
        `,
        about: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Tab</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: 100vw; height: 100vh; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: indigo">
                    
                    <h1>About Border.</h1>
                    <p>
                    Border is an iframe Web browser developped by <a style="color: white;" href="github.com/Onofficiel">Onofficiel</a><br> accessible on all platforms.<br>Because of the iframe system some website won't work in this browser (like Google.com),<br>but you can always use bing.
                    <br><br>Thanks to <a style="color: white;" href="https://billygoat891.tk">billygoat891</a> for hosting the project on windows96.
                    </p>

                    <p style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%)">Border v1.2 | © Onofficiel - 2021 - All rights reserved</p>
        </body>
        </html>
        `,
        404: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: rgb(247, 37, 58)">
                    <div id="centered">
                        <h1>404</h1>
                        <p>
                            Not found.
                        </p>
                    </div>
        </body>
        </html>
        `,
        woozy: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Wooooooooooooooooooooooooozy</title>
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Lexend&display=swap" rel="stylesheet">
        </head>
        <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: rgb(255, 204, 77)">
                    <div id="centered">
                        <img src="https://hotemoji.com/images/dl/t/woozy-face-emoji-by-twitter.png">
                    </div>
        </body>
        </html>
        `
    },
    verifyProtocol: (url) => {

        if (/^\S*:/i.test(url)) {

            for (let i = 0; i < Object.keys(browser.protocols).length; i++) {
                const protocol = Object.keys(browser.protocols)[i];

                if (RegExp("^border:\/*" + protocol).test(url)) {
                    return encodeURI("data:text/html," + browser.protocols[protocol]);
                }
            }
            return url;
        } else {
            return "https://" + url;
        }

    },
    addTab: (tab) => {

        if (!tab)
            throw new Error("You have to add an object for creating a tab.");
        if (!tab.url)
            tab.url = "border://newtab";



        // Create an html tab div
        let tabElement = document.createElement("div");
        tabElement.classList.add("tab");
        tabElement.dataset.id = browser.generateId();
        tabElement.dataset.url = tab.url;
        tabElement.innerHTML = "<div class='title'>Name Undefined</div><div class='close-btn'>×</div>";

        tabElement.addEventListener("click", () => {
            browser.setCurrent(tabElement.dataset.id);
        });

        tabElement.querySelector(".close-btn").addEventListener("click", () => {
            browser.removeTab(tabElement.dataset.id);
        });

        document.querySelector("#tab-container").appendChild(tabElement);
        // <

        // Create an html view tab
        let viewElement = document.createElement("iframe");
        viewElement.classList.add("view");
        viewElement.dataset.id = tabElement.dataset.id;

        document.querySelector("#view-container").appendChild(viewElement);
        // <

        // After Ctreated Action
        if (tab.current)
            browser.setCurrent(tabElement.dataset.id);
        browser.reloadTab();
        // <

        browser.cfg.tabNb++;
        browser.cfg.tabId.push(tabElement.dataset.id);

    },
    removeTab: (id) => {

        if (id !== undefined) {
            document.querySelector("#tab-container").removeChild(document.querySelector('.tab[data-id~="' + id + '"]'));
            document.querySelector("#view-container").removeChild(document.querySelector('.view[data-id~="' + id + '"]'));
        }

        browser.cfg.tabNb--;
        browser.cfg.tabId.splice(browser.cfg.tabId.indexOf(id), 1);

    },
    setCurrent: (id) => {

        try {
            for (let i = 0; i < document.querySelector("#tab-container").querySelectorAll(".tab").length; i++) {
                document.querySelector("#tab-container").querySelectorAll(".tab")[i].classList.remove("current");
            }
            document.querySelector('.tab[data-id~="' + id + '"]').classList.add("current");

            for (let i = 0; i < document.querySelector("#view-container").querySelectorAll(".view").length; i++) {
                document.querySelector("#view-container").querySelectorAll(".view")[i].classList.remove("current");
            }
            document.querySelector('.view[data-id~="' + id + '"]').classList.add("current");

            document.querySelector("#searchbar").value = document.querySelector(".tab.current").dataset.url;
        } catch { }

    },
    reloadTab: () => {

        document.querySelector("#searchbar").value = document.querySelector(".tab.current").dataset.url;
        document.querySelector("#view-container").querySelector(".view.current").src = browser.verifyProtocol(document.querySelector("#tab-container").querySelector(".tab.current").dataset.url);
        document.querySelector(".tab.current").querySelector(".title").innerText = browser.verifyProtocol(document.querySelector(".tab.current").dataset.url).length <= 30 ? browser.verifyProtocol(document.querySelector(".tab.current").dataset.url).split("/")[2] : browser.verifyProtocol(document.querySelector(".tab.current").dataset.url).substring(14, length - 1) + "...";
    
    },
    generateId: () => {

        let id = "";
        for (let i = 0; i < 4; i++) {
            id += Math.floor(Math.random() * 10);
        }

        if (browser.cfg.tabId.length >= 9999)
            throw new Error("Cannot generate ID");
        for (const tabId in browser.cfg.tabId) {
            if (tabId === id)
                return browser.generateId();
        }
        return parseInt(id);

    },
    boot: () => {

        document.querySelector(":root").style.setProperty('--bg', browser.cfg.bgColor);
        document.querySelector(":root").style.setProperty('--txt', browser.cfg.txtColor);

        if (window.location.hash)
            browser.addTab({ url: browser.verifyProtocol(decodeURI(window.location.hash.substring(1))), current: true });
        else
            browser.addTab({ current: true });

        searchbar.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                document.querySelector('.tab.current').dataset.url = searchbar.value;
                browser.reloadTab();
                searchbar.blur();
            }
        });

        setInterval(() => {
            if (document.querySelector("#tab-container").querySelectorAll(".tab").length <= 0)
                browser.addTab({ current: true });
        }, 10);

    }
}

browser.boot();