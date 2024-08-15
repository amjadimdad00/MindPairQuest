const emojis = [
  "❤️",
  "❤️",
  "🥰",
  "🥰",
  "😎",
  "😎",
  "😇",
  "😇",
  "🤨",
  "🤨",
  "😵",
  "😵",
  "👍",
  "👍",
  "☠️",
  "☠️",
];

const game = document.querySelector(".game");
let shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

shuffledEmojis.forEach((emoji) => {
  const box = document.createElement("div");
  box.classList.add("item");
  box.textContent = emoji;
  box.addEventListener("click", () => {
    box.classList.add("boxOpen");
    setTimeout(() => {
      const openBoxes = document.querySelectorAll(".boxOpen");
      if (openBoxes.length > 1) {
        if (openBoxes[0].textContent === openBoxes[1].textContent) {
          openBoxes.forEach((box) => box.classList.add("boxMatch"));
          if (document.querySelectorAll(".boxMatch").length === emojis.length) {
            alert("Win!");
          }
        } else {
          openBoxes.forEach((box) => box.classList.remove("boxOpen"));
        }
      }
    }, 500);
  });
  game.appendChild(box);
});
