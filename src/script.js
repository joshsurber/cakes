// "use strict";
// const form = document.querySelector("form");

// const handleSubmit = (e) => {
//   e.preventDefault();
//   let myForm = e.target;
//   let formData = new FormData(myForm);
//   fetch("/", {
//     method: "POST",
//     headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     body: new URLSearchParams(formData).toString(),
//   })
//     .then(() => console.log("Form successfully submitted"))
//     .catch((error) => alert(error));
// };
// form.addEventListener("submit", handleSubmit);

// This helps with redraws on the gallery
const cakeimgs = document.querySelectorAll("img.cakeimg");
const cakeimgcss = window.getComputedStyle(cakeimgs[0]);
const cakeimgwidth = cakeimgcss.getPropertyValue("width");
const cakeimgheight = cakeimgcss.getPropertyValue("height");
cakeimgs.forEach((element) => {
  element.style.width = `${cakeimgwidth}px`;
  element.style.height = `${cakeimgheight}px`;
});
