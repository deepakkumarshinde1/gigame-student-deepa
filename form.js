let aForm = document.querySelector("#form");
aForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = new FormData(aForm);
  let myData = {};
  formData.forEach((value, name) => {
    myData[name] = value;
  });

  fetch("/login", {
    method: "POST",
    body: formData,
  });
  console.log("form submitted");
});
