// 1. Capture user input
var name = prompt("What is your name?");

// 2. Convert the entire string to lowercase to start with a clean slate
var convert = name.toLowerCase();

// 3. Isolate and capitalize the first character
var firstChar = convert.slice(0, 1);
var firstCharCap = firstChar.toUpperCase();

// 4. Isolate the rest of the name
var restChar = convert.slice(1, name.length);

// 5. Combine the capitalized first letter with the lowercase remainder
alert("Hello, " + firstCharCap + restChar);
