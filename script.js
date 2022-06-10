const form = document.querySelector("form");

const handleSubmit = (e) => {
  e.preventDefault();
  let myForm = e.target;
  let formData = new FormData(myForm);
  fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => console.log("Form successfully submitted"))
    .catch((error) => alert(error));
};
form.addEventListener("submit", handleSubmit);
