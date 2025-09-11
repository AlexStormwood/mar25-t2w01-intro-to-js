console.log("Hello, world! From the index.js file!");

let customPortNumber = null;

const PORT = customPortNumber ??= 5000;
// const PORT = customPortNumber || 5000;

console.log("Port is " + PORT);
console.log("Custom port number is: " + customPortNumber);

let dinner = "butter chicken";

// Loose quality, dinner will be coerced into a string!
if (dinner == "butter chicken"){
	console.log("I'm full!");
} else {
	console.log("I'm ready for dessert!");
}

let luckyNumber = 42;

// Strict equality, comparison will not be true!
if (luckyNumber === "42") {
	console.log("Lucky number is the answer to life, the universe, and everything!");
} else {
	console.log("Lucky number is nice, sure, but ehh...");
}

// if (dinner == "butter chicken") console.log("I'm full!");

for (let index = 0; index < 10; index++) {
	console.log(index);
	
}

let fruits = ["apple", "mango", "banana"];

// FOR loops are best for performance
for (let index = 0; index < fruits.length; index++) {
	const fruit = fruits[index];
	console.log(fruit);
}

// FOREACH is better for readability for devs, but it's
// a wrapper around FOR, so it's slower than FOR 
fruits.forEach(fruit => {
	console.log(fruit);
});
