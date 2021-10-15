import Component from "./Component/Component.js";

const searchButton = document.querySelector(".clicked");
const userInput = document.querySelector("#html-Tag");

searchButton.addEventListener("click", async () => {
  const userInputWord = userInput.value;
  const newElement = new Component(userInputWord.toLowerCase(), userInputWord);
});
