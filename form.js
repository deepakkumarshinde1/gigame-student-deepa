let aForm = document.querySelector("#form");
aForm.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("form submitted");
});
