// if manifest.json match this url => https://github.com/patobeur/toolbox_ext_mozilla


function injectCurrentPageDom(){

	var gettingcolor = browser.storage.sync.get("color");
	gettingcolor.then(onGot, onError);


	let toolbarid = "toolbox";
	let tooldivid = "tools";
	if (document.getElementById("toolbox")) {
		document.getElementById("toolbox").remove();
	}
	let toolbar = document.createElement("div");
	toolbar.id = toolbarid;
	toolbar.style.zIndex = "999999";
	toolbar.style.backgroundColor = getting;
	let tooldiv= document.createElement("div");
	tooldiv.id = tooldivid;
	tooldiv.style.position = 'relative';
	tooldiv.style.zIndex = "999999";
	tooldiv.style.top = "0";
	let toolcontentdiv = document.createElement("p");
	toolcontentdiv.textContent = "Merci ! Vous êtes sur la page https://github.com/patobeur/toolbox_ext_mozilla ! ";
	toolcontentdiv.style.color = gettingcolor;
	tooldiv.appendChild(toolcontentdiv);
	toolbar.appendChild(tooldiv);
	document.body.prepend(toolbar);


		
}
window.onload = injectCurrentPageDom();

function onError(error) {
	console.log(`Error: ${error}`);
}

function onGot(item) {
	document.body.style.border = "10px solid " + (item.color ? item.color : "black");
}