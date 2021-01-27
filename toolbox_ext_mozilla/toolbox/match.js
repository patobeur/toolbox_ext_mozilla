function toolbox(){
	// let headercolor = document.querySelector(".header-color");
	// headercolor.style.position = "fixed";
	// headercolor.style.top = "0px";
	// headercolor.style.zIndex = "99996";
	// let headerpage = document.querySelector(".header");
	// headerpage.style.position = "fixed";
	// headerpage.style.top = "0px";
	// headerpage.style.zIndex = "99999";
	let toolbarid = "toolbox";
	let tooldivid = "tools";
	if (document.getElementById("toolbox")) {
		document.getElementById("toolbox").remove();
	}
	let toolbar = document.createElement("div");
	toolbar.id = toolbarid;
	toolbar.style.zIndex = "999999";
	let tooldiv= document.createElement("div");
	tooldiv.id = tooldivid;
	// tooldiv.style.background = "black";
	tooldiv.style.position = 'relative';
	tooldiv.style.color = "black";
	tooldiv.style.zIndex = "999999";
	tooldiv.style.top = "0";
	// tooldiv.style.borderRadius = ".4rem";
	tooldiv.innerHTML = "Vous êtes sur le site https://github.com !";
	toolbar.appendChild(tooldiv);
	document.body.prepend(toolbar);
}
window.onload = toolbox();