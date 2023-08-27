// Get a reference to the button element
const button = document.querySelector("button");

// Add a click event listener to the button
button.addEventListener("click", () => {
  // Get a reference to the input element
  const input = document.querySelector("input");

  // Get the value of the input element
  const inputValue = input.value;

  // Create a new paragraph element
  const paragraph = document.createElement("p");

  // Set the text content of the paragraph element
  paragraph.textContent = `You entered: ${inputValue}`;

  // Add the paragraph element to the page
  document.body.appendChild(paragraph);
});

// Get a reference to the Web Chat control
const webchat = document.querySelector("#webchat");

// Add an event listener for when the user sends a message
webchat.addEventListener("submitSendBox", (event) => {
  // Get the user's message from the event data
  const message = event.detail;

  // Send the message to the bot using the Direct Line API
  window.WebChat.sendEvent({
    name: "userMessage",
    value: message,
  });
});

// Add an event listener for when the bot sends a message
window.WebChat.renderWebChat(
  {
    directLine: window.WebChat.createDirectLine({
      secret: "7BvfwB7877k.bi4e-4SxmUQVEOwgB5oSsKREppWQpBePQTNqMOfXp_c",
    }),
    userID: "YOUR_USER_ID_HERE",
    username: "YOUR_USERNAME_HERE",
    locale: "en-US",
    botAvatarInitials: "Bot",
    userAvatarInitials: "You",
  },
  document.getElementById("webchat")
);

window.WebChat.waitForBotConnection(async () => {
  // Send a welcome message to the user
  await window.WebChat.sendEvent({
    name: "webchat/join",
    value: { language: "en" },
  });
});
