
/**
 * CSS to hide everything on the page,
 * except for elements that have the "toolboxify-image" class.
 */
const name_extension = `Toolbox Test`;
const hidePage = `body > :not(.toolboxify-image) {display: none;}`;
window.dataCompteurBox = 0;

console.log("fff");

/**
 * pages links
 */
const blocscontents = {
  index : {
    title : "index",
    name : "index",
    id : "index",
    class : "index",
    items : [
      {
        url : "",
        figure : {
          src : "img/vig/vig_gitpatobeur.png",
          alt : "img/vig/vig_gitpatobeur.png"
        },
        contents : {
          front : {
            content : "Ouvrez about:debugging afin de charger un module complémentaire temporaire…"
          },
          back : {
            content : "Tapez <span>about:debugging</span> dans l\'adresse de votre navigateur pour Ouvrir la page de debugging.<br/>Cliquez sur [Ce Firefox] puis sur<br/>[Charger un module complémentaire temporaire] : "
          }
        }
      },
      {
        url : "https://github.com/patobeur/toolbox_ext_mozilla",
        figure : {
          src : "img/vig/vig_gitpatobeur.png",
          alt : "Le github de Patobeur..."
        },
        contents : {
          front : {
            content : "Le github de Patobeur..."
          },
          back : {
            content : 'Dépôt Github : <a href="https://github.com/patobeur/toolbox_ext_mozilla" >en cours de dev</a>'
          }
        }
      },
      {
        url : "https://lilo.org",
        figure : {
          src : "img/vig/vig_lilo.png",
          alt : "Lilo Moteur de recherche "
        },
        contents : {
          front : {
            content : "Lilo Moteur de recherche "
          },
          back : {
            content : '<a href="https://lilo.org" >Lilo.</a>, le moteur de recherche français et solidaire qui finance gratuitement les projets de votre choix.'
          }
        }
      },
      {
        url : "https://trello.com",
        figure : {
          src : "img/vig/vig_trello.png",
          alt : "Trello"
        },
        contents : {
          front : {
            content : "Trello"
          },
          back : {
            content : 'Avec <a href="https://trello.com/" >Trello</a>, les équipes peuvent collaborer davantage et accomplir toujours plus de choses.'
          }
        }
      },
      {
        url : "https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension",
        figure : {
          src : "img/vig/vig_mozhack.png",
          alt : "Developpez une extension avec mozilla FR"
        },
        contents : {
          front : {
            content : "Developpez une extension avec mozilla FR"
          },
          back : {
            content : 'Documentation Mozilla Extension en FR, <a href="https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension" >Your_first_WebExtension</a>'
          }
        }
      },
      {
        url : "https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension",
        figure : {
          src : "img/vig/vig_mozhack.png",
          alt : "Developpez une extension avec mozilla FR"
        },
        contents : {
          front : {
            content : "Developpez une extension avec mozilla US"
          },
          back : {
            content : 'https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions" >Your_first_WebExtension</a>'
          }
        }
      }
    ]
  },
  info : {},
  tests : {}
};

function createHtmlContentsBlocs() {
  let card_count = 0;
  console.log(blocscontents.index.items);


  
  for (datas of blocscontents.index.items) {
    let bloc = document.createElement("div");
    bloc.classList.add("card")
    bloc.id = "card_" + ++card_count;
      let figure = document.createElement("figure");
      figure.classList.add("figure")
        let img = document.createElement("img");
        img.classList.add("fig")
        img.src = datas.figure.src;
        figure.appendChild(img);
      bloc.appendChild(figure);
    
    let contentdiv = document.createElement("div");
      contentdiv.classList.add("content");
      let contentfront = document.createElement("div");
        contentfront.classList.add("front")
        let contentfrontp = document.createElement("p");
        contentfrontp.classList.add("title")
        contentfrontp.innerHTML = datas.contents.front.content;
        contentfront.appendChild(contentfrontp);
      let contentback = document.createElement("div");
        contentback.classList.add("back")
        let contentbackp = document.createElement("p");
        contentbackp.classList.add("title")
        contentbackp.innerHTML = datas.contents.back.content;
        contentback.appendChild(contentbackp);

      contentdiv.appendChild(contentfront);
      contentdiv.appendChild(contentback);

    bloc.appendChild(contentdiv);

	  document.querySelector("#index-content").appendChild(bloc);
  }
	// toolbar.id = toolbarid;
	// toolbar.style.zIndex = "999999";
	// let tooldiv= document.createElement("div");
	// tooldiv.id = tooldivid;
	// tooldiv.style.position = 'relative';
	// tooldiv.style.zIndex = "999999";
	// tooldiv.style.top = "0";
	// let toolcontentdiv = document.createElement("p");
	// toolcontentdiv.textContent = "Merci ! Vous êtes sur la page https://github.com/patobeur/toolbox_ext_mozilla ! ";
	// toolcontentdiv.style.color = "black";
  
}
  createHtmlContentsBlocs();
// browser.tabs.query({active: true, currentWindow: true}).then(consolelocal).catch(reportError);
// pageLinks.forEach(
  
//   browser.tabs.query({active: true, currentWindow: true}).then(consolelocal).catch(reportError)
// );

let link_brand = document.querySelector("#link_brand");
let link_index = document.querySelector("#link_index");
let page_index = document.querySelector("#index-content");
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
          return browser.extension.getURL("html/img/vig/vig_gitpatobeur.png");
        case "lilo":
          return browser.extension.getURL("html/img/vig/vig_lilo.png");
        case "mozhack":
          return browser.extension.getURL("html/img/vig/vig_mozhack.png");
        case "rootme":
          return browser.extension.getURL("html/img/vig/vig_rootme.png");
        case "trello":
          return browser.extension.getURL("html/img/vig/vig_trello.png");
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
    function consolelocal(tabs) {
      browser.tabs.sendMessage(tabs[0].id, {
        command: "consolelocal",
        sendedDatas: "supertestos"
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
     * then call "displayPicture()" or "reset()" as appropriate.
     */
    if (e.target.classList.contains("toolbox-action") && e.target.getAttribute("actiondata")) {
      browser.tabs.query({active: true, currentWindow: true})
        .then(displayPicture)
        .catch(reportError);
    }
    else if (!e.target.classList.contains("toolbox-action") && e.target.getAttribute("actiondata")) {
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
browser.tabs.executeScript({file: "../js/main.js"})
.then(listenForClicks)
.catch(reportExecuteScriptError);
