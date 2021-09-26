let HTMLtabs = document.querySelectorAll(".tab");
setInterval(() => {
    HTMLtabs = document.querySelectorAll(".tab");
}, 10);
let view = document.querySelector("#view");
let searchbar = document.querySelector("#searchbar");

let browser = {
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

                    <p style="position: absolute; bottom: 0; left: 50%; transform: translateX(-50%)">© Onofficiel - 2021 - All rights reserved</p>
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
        <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: darkred">
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
        <body style="width: 100vw; height: 100vh; display: flex; justify-content: flex-start; align-items: center; overflow: hidden; font-family: 'Lexend', sans-serif; margin-left: 50px; color: white; background: indigo">
                    <div id="centered">
                        <img src="https://hotemoji.com/images/dl/t/woozy-face-emoji-by-twitter.png">
                    </div>
        </body>
        </html>
        `
    },
    verifyProtocol: (tab) => {
        if (/^\S*:/i.test(tab.dataset.url)) {
            for (let i = 0; i < Object.keys(browser.protocols).length; i++) {
                const protocol = Object.keys(browser.protocols)[i];
                if (tab.dataset.url === "border://" + protocol) {
                    return encodeURI("data:text/html," + browser.protocols[protocol]);
                }
            }
            return tab.dataset.url;
        } else {
            return "https://" + tab.dataset.url;
        }
    },
    addTab: (tab) => {
        let tabDiv = document.createElement("div");
        tabDiv.classList.add("tab");
        tabDiv.innerHTML = "<div class='title'></div><div class='close-btn'>×</div>";

        if (!tab.url)
            tab.url = "border://newtab";


        tabDiv.dataset.url = tab.url;



        browser.setCurrent(tabDiv);
        tabDiv.addEventListener("click", () => {
            browser.setCurrent(tabDiv);
        });

        tabDiv.querySelector(".title").innerText = browser.verifyProtocol(tabDiv).length <= 30 ? browser.verifyProtocol(tabDiv).split("/")[2] : browser.verifyProtocol(tabDiv).substring(14, length - 1) + "...";

        tabDiv.querySelector(".close-btn").addEventListener("click", () => {
            document.querySelector("#tabs-container").removeChild(tabDiv);

        });

        document.querySelector("#tabs-container").appendChild(tabDiv);


    },
    reloadTab: () => {
        let tab = document.querySelector('.tab.current');
        searchbar.value = tab.dataset.url;
        tab.querySelector(".title").innerText = browser.verifyProtocol(tab).length <= 30 ? browser.verifyProtocol(tab).split("/")[2] : browser.verifyProtocol(tab).substring(14, length - 1) + "...";
        view.src = browser.verifyProtocol(tab);
    },
    setCurrent: (tab) => {
        for (let e = 0; e < HTMLtabs.length; e++) {
            if (HTMLtabs[e].classList.contains("current"))
                HTMLtabs[e].classList.remove("current");
        }
        tab.classList.add("current");
        tab.querySelector(".title").innerText = browser.verifyProtocol(tab).length <= 30 ? browser.verifyProtocol(tab).split("/")[2] : browser.verifyProtocol(tab).substring(14, length - 1) + "...";
        view.src = browser.verifyProtocol(tab);
        searchbar.value = tab.dataset.url;
    },
    boot: () => {
        if (window.location.hash)
            browser.addTab({ url: decodeURI(window.location.href), current: true });

        browser.addTab({ current: true });
    }
}

browser.boot();