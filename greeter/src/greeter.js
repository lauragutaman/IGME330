

"use strict";

window.onload = (event) => {
    console.log("page fully loaded");
}



// querySelectorAll is used to grab all of tu[es ]

const firstNameInput = document.querySelector("#first_name");
const lastNameInput = document.querySelector("#last_name");
const btnHello = document.getElementById("hello_button");
const btnGB = document.getElementById("goodbye_button");
const greetingOutput = document.querySelector("#greeting");

const checkbox = document.querySelector("#s");

function setGreeting(text) {
    greetingOutput.textContent = checkbox.checked ? text.toUpperCase() : text;
}

// need to get if works with console 
checkbox.addEventListener('change', (e) => {
    console.log(e.target.checked ? "checkbox is checked" : "uncheckboxed")
});



btnHello.addEventListener('click', (evt) => {
    console.log('click happened');
    const firstName = firstNameInput.value.trim() || "Peter";
    const lastName = lastNameInput.value.trim() || "Parker";

    setGreeting(`Hello, ${firstName} ${lastName}`);

});



btnGB.addEventListener('click', (e) => {
    console.log('clicked');
    const firstName = firstNameInput.value.trim() || "Peter";
    const lastName = lastNameInput.value.trim() || "Parker";
    setGreeting(`Hello, ${firstName} ${lastName}`);

});

