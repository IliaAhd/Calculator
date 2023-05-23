"use strict";

// Elements
const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.querySelector(".result");

// Functions
const clearResult = () => {
  inputFieldEl.value = "";
};

const calcResult = () => {
  inputFieldEl.value = eval(inputFieldEl.value);
};

const appendValue = (value) => {
  inputFieldEl.value += value;
};

// Event Handlres
buttonsEl.forEach((btn) =>
  btn.addEventListener("click", () => {
    const buttonValue = btn.textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calcResult();
    } else {
      appendValue(buttonValue);
    }
  })
);
