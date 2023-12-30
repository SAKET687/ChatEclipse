function enter() {
  const userName = document.getElementById("userName").value;
  if (userName.length !== 0) {
    localStorage.setItem("userName", userName);
    window.location = "newindex.html";
  } else {
    alert("Please enter your name to proceed.😀");
  }
}
