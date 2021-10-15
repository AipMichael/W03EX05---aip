import Component from "./Component/Component.js";
import Image from "./Image/Image.js";

const searchButton = document.querySelector(".clicked");
const userInput = document.querySelector("#html-Tag");

searchButton.addEventListener("click", async () => {
  const userInputWord = userInput.value;
  const newElement = new Component(userInputWord.toLowerCase(), userInputWord);
});

// for img
const imageCreator = document.querySelector(".clicked-image");
const inputImageUrl = document.querySelector("#src-image");

imageCreator.addEventListener("click", async () => {
  const userInputUrl = inputImageUrl.value;
  const newElement = new Image(userInputUrl);
});
