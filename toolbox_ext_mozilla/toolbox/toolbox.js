
/**
 * CSS to hide everything on the page,
 * except for elements that have the "toolboxify-image" class.
 */
const name_extension = `Toolbox Test`;
const hidePage = `body > :not(.toolboxify-image) {display: none;}`;
/**
 * pages links
 */
const pageLinks = ['index','info','tests'];
// browser.tabs.query({active: true, currentWindow: true}).then(consolelocal).catch(reportError);
// pageLinks.forEach(
  
//   browser.tabs.query({active: true, currentWindow: true}).then(consolelocal).catch(reportError)
// );

let link_brand = document.querySelector("#link_brand");
let link_index = document.querySelector("#link_index");
let page_index = document.querySelector("#page-content");
let link_tests = document.querySelector("#link_tests");
let page_tests = document.querySelector("#tests-content");
let link_info = document.querySelector("#link_info");
let page_info = document.querySelector("#info-content");

link_brand.addEventListener("click", (e) => {
  clearmenu();
    link_brand.classList.add("active");
    link_index.classList.add("active");
    page_index.classList.add("active");
});
link_tests.addEventListener("click", (e) => {
  clearmenu();
  if (!link_tests.classList.contains("active")){
    link_tests.classList.add("active");
    page_tests.classList.add("active");
  }
});
link_index.addEventListener("click", (e) => {
  clearmenu();
  if (!link_index.classList.contains("active")){
    link_index.classList.add("active");
    page_index.classList.add("active");
  }
});
link_info.addEventListener("click", (e) => {
  clearmenu();
  if (!link_info.classList.contains("active")){
    link_info.classList.add("active");
    page_info.classList.add("active");
  }
});
function clearmenu() {
  link_info.classList.remove("active");
  page_info.classList.remove("active");
  link_tests.classList.remove("active");
  page_tests.classList.remove("active");
  link_index.classList.remove("active");
  page_index.classList.remove("active");
}

/**
 * Listen for clicks on the buttons, and send the appropriate message to
 * the content script in the page.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Given the name of a beast, get the URL to the corresponding image.
     */
    function getURLbyName(actiondata) {
      switch (actiondata) {
        case "gitpatobeur":
          return browser.extension.getURL("/toolbox/img/vig_gitpatobeur.png");
        case "lilo":
          return browser.extension.getURL("/toolbox/img/vig_lilo.png");
        case "mozhack":
          return browser.extension.getURL("/toolbox/img/vig_mozhack.png");
        case "rootme":
          return browser.extension.getURL("/toolbox/img/vig_rootme.png");
        case "trello":
          return browser.extension.getURL("/toolbox/img/vig_trello.png");
      }
    }

    /**
     * Insert the page-hiding CSS into the active tab,
     * then get the beast URL and
     * send a "toolboxify" message to the content script in the active tab.
     */
    function displayPicture(tabs) {
      browser.tabs.insertCSS({code: hidePage}).then(
          () => {
          let actiondata = e.target.getAttribute("actiondata")
          let url = getURLbyName(actiondata);
          browser.tabs.sendMessage(
            tabs[0].id,
            {
              command: "insertimage",
              imageURL: url
            }
          );
        }
      );
    }
    // function hydratAction(tabs) {
    //   browser.tabs.then(
    //       () => {
    //       browser.tabs.sendMessage(
    //         tabs[0].id,
    //         {
    //           command: e.target.getAttribute("actiondata"),
    //           imageURL: url
    //         }
    //       );
    //     }
    //   );
    // }

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
     * test
     */
    function test(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "test",
      });
    }

    /**
     * consolelocal
     */
    function consolelocal(datas,tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "consolelocal",
        sendedDatas: "fff",
        sendedDatas2: datas,
      });
    }

    /**
     * Just log the error to the console.
     */
    function reportError(error) {
      console.error(`Erreur avec  ` + name_extension + `: ${error}`);
    }
    /**
     * Just log the error to the console.
     */
    function reportActionError(error) {
      console.error(`ActionError : ${error}`);
    }
    /**
     * Get the active tab,
     * then call "displayPicture()" or "reset()" as appropriate.
     */
    if (e.target.classList.contains("toolbox-action") && e.target.getAttribute("actiondata")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(displayPicture)
        .catch(reportError);
    }
    else if (!e.target.classList.contains("toolbox-action")&& e.target.getAttribute("actiondata")) {
      switch(e.target.getAttribute("actiondata")){
        case "reset":
          browser.tabs.query({active: true, currentWindow: true})
            .then(
              reset
              )
            .catch(reportError);
        break;
        case "test":
          browser.tabs.query({active: true, currentWindow: true})
            .then(test)
            .catch(reportError);
        break;
        case "consolelocal":
          browser.tabs.query({active: true, currentWindow: true})
            .then(consolelocal)
            .catch(reportError);
        break;
      }
    }




    
    // if (e.target.getAttribute("actiondata")) {
    //   browser.tabs.query({active: true, currentWindow: true})
    //     .then(hydratAction)
    //     .catch(reportActionError);
    // }
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
