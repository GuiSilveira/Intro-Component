"use strict";

// Elements
const inputs = document.querySelectorAll("input");

const errorMsgs = Array.apply(null, Array(4));

const text = [
  "First Name cannot be empty",
  "Last Name cannot be empty",
  "Email cannot be empty",
  "Password cannot be empty",
];

function createEventListeners(element, phrase) {
  element.addEventListener("blur", function () {
    if (element.value == 0) {
      element.removeAttribute("required");
      element.removeAttribute("placeholder");
      element.classList.add("error");
      element.after(phrase);
    } else if (element.getAttribute("type") === "email" && element.value > 0) {
      let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      phrase.textContent = "Looks like this is not an email";
      element.classList.add("error");
      element.after(phrase);
    }
  });

  element.addEventListener("focus", function () {
    element.classList.remove("error");
    phrase.remove();
  });
}

for (let i = 0; i < errorMsgs.length; i++) {
  errorMsgs[i] = document.createElement("p");
  errorMsgs[i].textContent = text[i];
  errorMsgs[i].classList.add("error-msg");

  createEventListeners(inputs[i], errorMsgs[i]);
}
