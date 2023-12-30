const socket = io();
const userName = localStorage.getItem("userName");
if (userName) {
  socket.emit("user-joined", userName);
}

function addMessage(message, sender) {
  const $messages = $("#messages");
  const $newMessage = $("<li>").text(`${sender}: ${message}`);
  $messages.append($newMessage);
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
