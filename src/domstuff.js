console.log("domstuff.js has loaded!");

function paragraphTagUpdater(){
	// 1. find the p tag
	let targetPtag = document.querySelector("p");

	console.log(targetPtag);

	// 2. update the text of the p tag

	// innerHTML parses the string as valid HTML 
	// targetPtag.innerHTML = "<h1>Some cool message here!</h1>";
	// innerText does no HTML parsing, just treats the string as a string
	targetPtag.innerText = "<h1>Some cool message here!</h1>";
}

paragraphTagUpdater();