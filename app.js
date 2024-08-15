const emojis = [
  "❤️", "❤️", "🥰", "🥰", "😎", "😎",
  "😇", "😇", "🤨", "🤨", "😵", "😵",
  "👍", "👍", "☠️", "☠️"
];

const game = document.querySelector(".game");
let shuffledEmojis = emojis.sort(() => Math.random() - 0.5);

shuffledEmojis.forEach((emoji) => {
  const box = document.createElement("div");
  box.classList.add("item");
  box.textContent = "";
  box.dataset.emoji = emoji;

  box.addEventListener("click", () => {
    box.classList.add("boxOpen");
    box.textContent = emoji; // Show the emoji when the box is opened

    const openBoxes = document.querySelectorAll(".boxOpen:not(.boxMatch)");

    if (openBoxes.length === 2) {
      setTimeout(() => {
        if (openBoxes[0].dataset.emoji === openBoxes[1].dataset.emoji) {
          openBoxes.forEach((box) => {
            box.classList.add("boxMatch");
            box.classList.remove("boxOpen");
          });
        } else {
          openBoxes.forEach((box) => {
            box.classList.remove("boxOpen");
            box.textContent = ""; // Hide the emoji if it's not a match
          });
        }

        if (document.querySelectorAll(".boxMatch").length === emojis.length) {
          alert("You win!");
        }
      }, 500);
    }
  });

  game.appendChild(box);
});
