const CHARACTER_LIMIT = 140;

const userMessage = prompt("Write your message:");

// Slice from 0 to the limit
const acceptedText = userMessage.slice(0, CHARACTER_LIMIT);

// Slice from the limit to the end of the string
const truncatedText = userMessage.slice(CHARACTER_LIMIT);

if (userMessage.length > CHARACTER_LIMIT) {
    alert(`Your message was truncated to: [${acceptedText}]. 
    The following text was removed: [${truncatedText}]`);
} else {
    alert("Message accepted!");
}
