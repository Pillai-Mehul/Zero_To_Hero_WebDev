// --- Initial Declaration ---
var count = 250; // Your character limit
var message = prompt("Paste your Message Please:");

// Correcting the spelling to .length
var messageCount = message.length; 

// Logic: Limit minus current length
var remaining = count - messageCount; 

// --- Output ---
// Fixed the spelling of .length here as well
alert("You have written " + messageCount + " characters. Your remaining character count is " + remaining);
