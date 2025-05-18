const messages = [
  "You are the sunshine in my darkest days 🌞,",
  "My partner in crime, my safe space, my smile 💫",
  "You mean the world to me 🌍",
  "Thank you for being mine 🥺💗",
  "You are my heart ❤",
  "You are my life 💓",
  "You are my diamond 💎",
  "You are my last 7 min ",
  "You are my everything 💞💝",
  "I love you soooooo  sooooooooo soooooooo soooooooo muchhhhhhhhh babyyyyyyyyy 🥹",
  "Thank you for coming into my life 🌈",
  "For making me happy, for loving me 🌹",
  "Thank youuuuu 🌝 🥹🥹🥹",
  "I love you forever and ever! 💘"
];

let index = 0;
const messageBox = document.getElementById("messageBox");
const gallery = document.getElementById("gallery");
const restartBtn = document.getElementById("restartBtn");

function typeWriter(text, i = 0, el) {
  if (i < text.length) {
    el.textContent += text.charAt(i);
    setTimeout(() => typeWriter(text, i + 1, el), 40);
  }
}

function showNextLine() {
  if (index < messages.length) {
    const p = document.createElement("p");
    messageBox.appendChild(p);
    typeWriter(messages[index], 0, p);
    index++;
    scrollToBottom();
  } else if (index === messages.length) {
    gallery.style.display = "flex";
    createSparklesBurst();
    restartBtn.style.display = "block";
    index++;
    scrollToBottom();
  }
}

function createFloatingHeart(x, y) {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = "💗";
  heart.style.left = x + "px";
  heart.style.top = y + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

function createSparklesBurst() {
  for (let i = 0; i < 30; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = (window.innerWidth / 2 + (Math.random() * 200 - 100)) + "px";
    sparkle.style.top = (window.innerHeight / 2 + (Math.random() * 100 - 50)) + "px";
    sparkle.style.animationDuration = (1 + Math.random()).toFixed(1) + "s";
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  }
}

function restart() {
  messageBox.innerHTML = "";
  gallery.style.display = "none";
  restartBtn.style.display = "none";
  index = 0;
  showNextLine();
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

// Start with first message
showNextLine();

// Trigger next line on key press or click
document.addEventListener("keydown", showNextLine);
document.addEventListener("click", function(e) {
  showNextLine();
  createFloatingHeart(e.pageX, e.pageY);
});
