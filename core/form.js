let aForm = document.querySelector("#form");
aForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(aForm);
  const myData = Object.fromEntries(formData);

  fetch("/login", {
    method: "POST",
    body: formData,
    });
  console.log("form submitted", myData);
});
