"use strict";

// Create your references to the html elements here
const ageInputEl = document.getElementById("age-input")
const submissionBtn = document.getElementById("submission-btn");
const responseEl = document.getElementById("response");// Immutable variable

// create a mutable variable called age and do not assign it a value
let age

function checkAgeAndRespond() {
    age = parseInt(ageInputEl.value);
    
    // Write your conditional logic inside this function
    if (age >= 18) { 
       responseEl.innerText = "You are an adult."; 
    } else if (age > 0) { 
       responseEl.innerText = "You are a minor.";
    } else { 
       responseEl.innerText = "Please enter a valid age.";
    }
}


submissionBtn.addEventListener("click", function () {
    checkAgeAndRespond();
});


function validateInput(event) {
    const invalidCharacters = ["e", "E", "-", "0", "+"];
    if (invalidCharacters.includes(event.key)) {
        event.preventDefault();
    }
}

ageInputEl.addEventListener("keydown", validateInput);
