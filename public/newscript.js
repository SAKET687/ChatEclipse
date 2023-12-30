const userName = localStorage.getItem("userName");
const socket = io();

if (userName) {
  socket.emit("user-joined", userName);
}

function addMessage(message, sender) {
  const $messages = $("#messages");
  const $newMessage = $("<li>").text(`${sender}: ${message}`);
  $messages.append($newMessage);
  window.scrollTo({ top: window.scrollHeight, behavior: "smooth" });
  // $messages.scrollTop($messages.prop("scrollHeight"));
}

socket.on("chat message", ({ message, sender }) => {
  addMessage(message, sender);
});

socket.on("user-joined", (message) => {
  $("#messages").append($("<li>").text(message));
});

socket.on("user-left", (message) => {
  $("#messages").append($("<li>").text(message));
});

function sendMessage() {
  const message = $("#inputMessage").val();
  socket.emit("chat message", { message, sender: userName });
  $("#inputMessage").val("");
  window.scrollTo({ top: window.scrollHeight, behavior: "smooth" });
}

function handleKeyPress(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    sendMessage();
  }
}

const send = document.getElementById("send");
send.addEventListener("click", sendMessage);

// function scrollToBottom() {
//   const $messages = $("#messages");
//   $messages.scrollTop($messages.prop("scrollHeight"));
// }
// socket.on("chat message", () => {
//   scrollToBottom();
// });

// function autoScroll() {
//   const $messages = $("#messages");

//   setInterval(() => {
//     $messages.animate({ scrollTop: $messages.prop("scrollHeight") }, 500);
//   }, 5000);
// }
// autoScroll();

// const messagesContainer = document.getElementById("#messages");
// messagesContainer.scrollTo({
//   top: messagesContainer.scrollHeight,
//   behavior: "smooth",
// });
