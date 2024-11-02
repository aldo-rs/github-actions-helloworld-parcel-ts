import message from "./message";

console.log(message);

// 1. Select the div element using the id property
const app = document.getElementById("app");
// 2. Create a new <p></p> element programmatically
const h1 = document.createElement("h1");
// 3. Add the text content
h1.textContent = message;
// 4. Append the p element to the div element
app?.appendChild(h1);
