// document.body.style.border = "5px solid red";
function toolbox(){
	// let headercolor = document.querySelector(".header-color");
	// headercolor.style.position = "fixed";
	// headercolor.style.top = "0px";
	// headercolor.style.zIndex = "99996";
	// let headerpage = document.querySelector(".header");
	// headerpage.style.position = "fixed";
	// headerpage.style.top = "0px";
	// headerpage.style.zIndex = "99999";
	if (document.getElementById("toolbox")) {
		document.getElementById("toolbox").remove();
	}
	let imcBar = document.createElement("div");
	imcBar.id = "toolbox";
	imcBar.style.zIndex = "999999";
	let imcDiv= document.createElement("div");
	imcDiv.id = "tools";
	// imcDiv.style.background = "black";
	imcDiv.style.position = 'relative';
	imcDiv.style.color = "black";
	// imcDiv.style.left = ".4rem";
	// imcDiv.style.rigth = ".4rem";
	imcDiv.style.zIndex = "999999";
	imcDiv.style.top = "0";
	// imcDiv.style.borderRadius = ".4rem";
	imcDiv.innerHTML = "Vous êtes sur le site https://github.com !";
	imcBar.appendChild(imcDiv);
	document.body.prepend(imcBar);
}
window.onload = toolbox();