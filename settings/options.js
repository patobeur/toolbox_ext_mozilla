
function saveOptions(e) {
	e.preventDefault();
	browser.storage.sync.set(
		{
			color: document.querySelector("#color").value,
			myid: document.querySelector("#myid").value
		}
	);
}
 
function restoreOptions() {
	function setCurrentChoice(result) {
		document.querySelector("#color").value = result.color || "green";
		document.querySelector("#myid").value = result.myid || "invitation";
	}

	function onError(error) {
		console.log(`Error: ${error}`);
	}
	var gettingcolor = browser.storage.sync.get("color");
	gettingcolor.then(setCurrentChoice, onError);
	var gettingmyid = browser.storage.sync.get("myid");
	gettingmyid.then(setCurrentChoice, onError);
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
 