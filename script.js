"use strict";

// Elements
const form = document.querySelector("form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  checkInputs();
});

function checkInputs() {
  input.forEach((input) => {
    // Get the values from the inputs without whitespaces
    const inputValue = input.value.trim();

    // Check if input is an email
    if (input.getAttribute("type") === "email") {
      // Check if email is empty or is invalid
      if (!inputValue || !isValid(inputValue)) {
        setErrorFor(input);
      } else {
        removeErrorFrom(input);
      }
    } else {
      // Show error after check if input is empty
      if (!inputValue) {
        setErrorFor(input);
      } else {
        // Remove error
        removeErrorFrom(input);
      }
    }
  });
}

function setErrorFor(input) {
  const formControl = input.parentElement; // Getting the div where input is inside;

  // add error class
  input.classList.add("error");
  formControl.querySelector("small").style.opacity = 1;

  if (input.getAttribute("type") === "email" && input.value != 0) {
    formControl.querySelector("small").textContent =
      "Looks like this is not a valid email";
  } else {
    formControl.querySelector("small").textContent = "Email cannot be empty";
  }
}

function removeErrorFrom(field) {
  field.classList.remove("error");
  field.parentElement.querySelector("small").style.opacity = 0;
}

function isValid(email) {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}
