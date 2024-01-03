function enter() {
  const userName = document.getElementById("userName").value;
  if (userName.length !== 0) {
    localStorage.setItem("userName", userName);
    window.location = "newindex.html";
  } else {
    alert(
      "Please enter your name to proceed 😃 or choose the 'Continue as Guest' option 🌟."
    );
  }
}

function enterAsGuest() {
  const randomNames = [
    "Luna 👩‍🚀",
    "Neo 😎",
    "Aurora 🌌",
    "Phoenix 🔥",
    "Zephyr 😀",
    "Nova 💫",
    "Jupiter 🪐",
    "Orion 🌌",
    "Seraphina 👼",
    "Atlas 🗺️",
    "Lyra 🎵",
    "Cassius ⚔️",
    "Gaia 🌍",
    "Selene 🌕",
    "Athena 🦉",
    "Griffin 🦅",
    "Serenity ☮️",
    "Kairos ⏳",
    "Ember 🔥",
    "Maven 📚",
    "Ragnar ⚒️",
    "Nyx 🌑",
    "Astrid ✨",
    "Zara 👑",
    "Calypso 🌊",
    "Ezra 📜",
    "Thalia 🌼",
    "Kai 🌊",
    "Sylvan 🌲",
    "Isolde 🏰",
    "Xander ⚔️",
    "Freya ⚡",
    "Nova 🌟",
    "Solstice 🌞",
    "Eclipse 🌒",
    "Raven 🦅",
    "Crimson 🔴",
    "Zephyra 🌀",
    "Stella ✨",
    "Aurora 🌅",
    "Blaze 🔥",
    "Titan 🏋️‍♂️",
    "Iris 🌈",
    "Aria 🎶",
    "Olympia 🏛️",
    "Cypher 🤖",
    "Sable 🌑",
    "Nova 🌌",
    "Electra ⚡",
    "Spectra 🌈",
    "Lumina ✨",
    "Cosmo 🚀",
    "Rogue 🗡️",
    "Zenith 🌠",
    "Echo 🗣️",
    "Elysium 🌅",
    "Mystique 🔮",
    "Reverie 💭",
    "Haven 🏝️",
    "Sapphire 💎",
    "Chaos 🌀",
    "Tempest 🌪️",
    "Oracle 🔮",
    "Mercury ☿️",
    "Cipher 🤫",
    "Aether ☁️",
  ];

  var enteredName = randomNames[Math.floor(Math.random() * randomNames.length)];
  alert(`We've assigned you the name '${enteredName}' for the chat! 🌟`);
  localStorage.setItem("userName", enteredName);
  window.location = "newindex.html";
}
