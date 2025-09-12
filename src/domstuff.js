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




// Breakfast Menu renderer 

let breakfastMenuItems = [
	"pancakes",
	"blueberry pancakes",
	"bacon and eggs",
	"omelette",
	"avo smash"
];

function breakfastRenderer () {
	// 1. render the breakfast menu container
	// 1a. find the menu container's parent element
	let targetParentContainer = document.querySelector("body");
	// 1b. create the menu container element 
	let menuContainer = document.createElement("section");
	console.log(menuContainer);
	menuContainer.id = "breakfastmenu";
	// 1c. append the menu container element to the parent element 
	targetParentContainer.appendChild(menuContainer);
	// document.body.appendChild()


	// 2. create menu options 

	// 3. insert menu options into breakfast menu container 
}

breakfastRenderer();








