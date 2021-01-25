
/**
 * CSS to hide everything on the page,
 * except for elements that have the "toolboxify-image" class.
 */
const name_extension = `Toolbox Test`;
const hidePage = `body > :not(.toolboxify-image) {
                    display: none;
                  }`;
/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    console.log("listenForClicks");
    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
    function getURLbyName(textcontent) {
      console.log("masssin.js");
      switch (textcontent) {
        case "toolbox":
          return browser.extension.getURL("/toolbox/img/one.png");
        case "toolbox1":
          return browser.extension.getURL("/toolbox/img/two.png");
        case "toolbox2":
          return browser.extension.getURL("/img/three.png");
        case "toolbox3":
          return browser.extension.getURL("img/four.png");
        case "toolbox4":
          return browser.extension.getURL("toolbox/img/one.png");
        case "Frog":
          return browser.extension.getURL("toolbox/img/two.png");
      }
    }

    /**
     * Insert the page-hiding CSS into the active tab,
     * then get the beast URL and
     * send a "toolboxify" message to the content script in the active tab.
     */
    function patobeur(tabs) {
      browser.tabs.insertCSS({code: hidePage}).then(() => {
        let url = getURLbyName(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "patobeur",
          imageURL: url
        });
      });
    }

    /**
     * Remove the page-hiding CSS from the active tab,
     * send a "reset" message to the content script in the active tab.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({code: hidePage}).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }
    /**
     * trr y 
     */
    function test(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "test",
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Erreur avec  ` + name_extension + `: ${error}`);
    }

    /**
     * Get the active tab,
     * then call "patobeur()" or "reset()" as appropriate.
     */
    console.error(e.target.classList);
    if (e.target.classList.contains("toolbox-action")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(patobeur)
        .catch(reportError);
    }
    else if (e.target.classList.contains("test")) {
      // console.log("test");
      // document.querySelector('#header').innerHTML = 'test';
      browser.tabs.query({active: true, currentWindow: true})
        .then(test)
        .catch(reportError);
    }
    else if (e.target.classList.contains("reset")) {
      // console.log("reset");
      browser.tabs.query({active: true, currentWindow: true})
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * There was an error executing the script.
 * Display the popup's error message, and hide the normal UI.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute ` + name_extension+ ` content script: ${error.message}`);
}

/**
 * When the popup loads, inject a content script into the active tab,
 * and add a click handler.
 * If we couldn't inject the script, handle the error.
 */
browser.tabs.executeScript({file: "/toolbox/main.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
