// définition d’une nouvelle propriété pour la fenêtre
window.dataId = 1;

(function() {
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  function consolelocal(sendedDatas) {
    console.log("catched click = )");
    console.log(sendedDatas);
  }
  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  function insertImage(imageURL) {
    removeExistingImages();
    let blocImage = document.createElement("img");
    blocImage.setAttribute("src", imageURL);
    blocImage.style.width = "100vw";
    blocImage.className = "toolboxify-image";
    document.body.appendChild(blocImage);
  }

  /**
   * Remove every add from the page.
   */
  function removeExistingImages() {
    let existingImages = document.querySelectorAll(".toolboxify-image");
    for (let toolboxify of existingImages) {
      toolboxify.remove();
    }
  }

  /**
   * todo
   * retirer l'element du DOM ajouter par Match.js
   */
  function test() {
    let toolbox = document.getElementById("toolbox");
    if(toolbox.style.display === "none") {
      toolbox.style.display = "initial"
    }
    else {
      toolbox.style.display = "none";
    }
  }

  /**
   * Listen for messages from the background script.
   * Call "toolbox()" or "reset()".
  */
  browser.runtime.onMessage.addListener((message) => {
    console.log("message.command")
    console.log(message.command)
    if (message.command === "insertimage") {
      insertImage(message.imageURL);
    } else if (message.command === "reset") {
      removeExistingImages();
    } else if (message.command === "what") {
      removeExistingImages();
    } else if (message.command === "test") {
      test();
    } else if (message.command === "consolelocal") {
      consolelocal(message.command);
    }
  });

})();
