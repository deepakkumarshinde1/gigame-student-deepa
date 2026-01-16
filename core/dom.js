//window.addEventListener("load", () => {
let element = document.querySelector("div > .h1-text > span"); // singleElement
let startButton = document.querySelector("#start");
let stopButton = document.querySelector("#stop");
//document.querySelectorAll(); // [htmlElements].forEach()
let count = 0;
let timerId = null;
startButton.addEventListener("click", () => {
  if (timerId === null) {
    timerId = setInterval(() => {
      count++;
      element.innerHTML = count;
    }, 100);
    startButton.disabled = true;
  }
});

stopButton.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  startButton.disabled = false;
});

//});

// events
let section = document.querySelector(".section");
let spanElement = document.querySelector(".section > span");
let button = document.querySelector(".button");
let inputText = document.querySelector("#input-text");
section.addEventListener(
  "click",
  () => {
    console.log("section is click");
  },
  false
);

button.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("button is click");
  spanElement.innerHTML = inputText.value;
});
// input select textarea => .value to collect data
inputText.addEventListener("keypress", (event) => {
  if (event.charCode === 13) {
    spanElement.innerHTML = inputText.value;
  }
});

// throttling debouncing storage FormData
