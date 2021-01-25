// définition d’une nouvelle propriété pour la fenêtre


// window.toto = "Cette variable globale a été ajoutée par un script de la page.";

// redéfinition de la fonction intégrée window.confirm()

(function() {
  // window.confirm = function() {
  //   alert(window.toto);
  // }
  /**
   * Check and set a global guard variable.
   * If this content script is injected into the same page again,
   * it will do nothing next time.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Given a URL to a beast image, remove all existing beasts, then
   * create and style an IMG node pointing to
   * that image, then insert the node into the document.
   */
  function insertImage(imageURL) {
    removeExistingImages();
    let blocImage = document.createElement("img");
    blocImage.setAttribute("src", imageURL);
    blocImage.style.height = "100vh";
    blocImage.className = "toolboxify-image";
    document.body.appendChild(blocImage);
  }

  /**
   * Remove every beast from the page.
   */
  function removeExistingImages() {
    let existingImages = document.querySelectorAll(".toolboxify-image");
    for (let toolboxify of existingImages) {
      toolboxify.remove();
    }
  }

  /**
   * test on the page.
   */
  function test() {
    let toolbox = document.getElementById("toolbox");
    // console.log(imcbar);
    if(toolbox.style.display === "none") {
      toolbox.style.display = "initial"
    }
    else {
      toolbox.style.display = "none";
    }
    // for (let beast of existingImages) {
    //   beast.remove();
    // }
  }

  /**
   * Listen for messages from the background script.
   * Call "toolbox()" or "reset()".
  */
  browser.runtime.onMessage.addListener((message) => {
    
  console.log("main.js");
  console.log(message.command);
    if (message.command === "toolbox") {
      insertImage(message.imageURL);
    } else if (message.command === "reset") {
      removeExistingImages();
    } else if (message.command === "test") {
      test();
    }
    console.log(message + " hh");
  });

})();
