"use strict";

document.addEventListener("DOMContentLoaded", function() {
const themeModeButton = document.getElementById("light-dark-mode-toggle");
document.documentElement.setAttribute("theme-mode", "light");
themeModeButton.addEventListener("click", function () {
const switchedTheme = document.documentElement.getAttribute("theme-mode") === "dark" ? "light" : "dark";
document.documentElement.setAttribute("theme-mode", switchedTheme);
themeModeButton.textContent = switchedTheme === "dark" ? "Light Mode" : "Dark Mode";
});
});

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessingGame(){

document.getElementById("guessing-game-form").addEventListener("submit", function(e) {
	e.preventDefault();


let computerGuessDisplay = document.getElementById("computer-guess");
let userGuessDisplay = document.getElementById("user-guess");
let userGuessInput = document.getElementById("user-guess-input");
let guessingGameMessage = document.getElementById("gameOutput");

let computerGuess = getRandomNumber (1,10);
let userGuess = parseInt(userGuessInput.value.trim());

computerGuessDisplay.innerHTML = computerGuess;
userGuessDisplay.innerHTML = userGuess;

if(computerGuess === userGuess){
  guessingGameMessage.innerHTML = "Congratulations!<br>You won!";
}else{
guessingGameMessage.innerHTML = "Try Again.";
}
});
}

guessingGame();

document.addEventListener("DOMContentLoaded", function () {
const productButtons = document.getElementsByClassName("product-button");
const productBlocks = document.querySelectorAll("#product-display > .product");

for (let i = 0; i < productButtons.length; i++) {
		productButtons[i].addEventListener("click", function () {
			const productId = productButtons[i].getAttribute("data-product");

for (let j = 0; j < productBlocks.length; j++) {
	productBlocks[j].classList.remove("currentItem");
	productBlocks[j].classList.add("hiddenItem");
}

const chosenProduct = document.getElementById(productId);
if (chosenProduct) {
chosenProduct.classList.remove("hiddenItem");
chosenProduct.classList.add("currentItem");
}
});
}
});

document.addEventListener("DOMContentLoaded", function() {

	const form = document.getElementById("newsletter-form");

// sets regexes //
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,5}$/;
const phoneRegex = /[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

// listens for form to be submitted to execute function //
// prevents default form submission behavior //
form.addEventListener("submit", function (e) {
	e.preventDefault();

const firstName = document.getElementById("first-name").value.trim();
const lastName = document.getElementById("last-name").value.trim();
const email = document.getElementById("email").value.trim();
const phone = document.getElementById("phone").value.trim();
const preferredContactMethod = document.querySelector('input[name="radio"]:checked');
const comments = document.getElementById("comments").value.trim();


// clears displayed error/thank-you messages (if any) //
document.getElementById("first-name-error").textContent = "";
document.getElementById("last-name-error").textContent = "";
document.getElementById("phone-error").textContent = "";
document.getElementById("email-error").textContent = "";
document.getElementById("preferred-contact-method-error").textContent = "";
document.getElementById("thank-you-message").innerHTML = "";

// checks if variables are valid //
let isValid = true;

// stores inputs in an object for the user //
let user = {};

// validates first name //
if (firstName.length < 1) {
document.getElementById("first-name-error").textContent = "Please enter a valid first name.";
isValid = false;
} else {
			user.firstName = firstName;
}

// validates last name //
if (lastName.length < 1) {
document.getElementById("last-name-error").textContent = "Please enter a valid last name.";
isValid = false;
} else {
	user.lastName = lastName;
}

// validates phone number with regex //
if (!phoneRegex.test(phone)) {
document.getElementById("phone-error").textContent = "Please enter a valid phone number (xxx-xxx-xxxx).";
isValid = false;
} else {
	user.phone = phone;
}

// validates email address with regex //
if (!emailRegex.test(email)) {
document.getElementById("email-error").textContent = "Please enter a valid email address.";
isValid = false;
} else {
	user.email = email;
}

	if (!preferredContactMethod) {
		document.getElementById("preferred-contact-method-error").textContent = "Please select a preferred contact method.";
		isValid = false;
	}else{
user.preferredContactMethod = preferredContactMethod.value;
}

if (comments) {
	user.comments = comments;
}

// creates object and display thank-you message if form is valid //
if (isValid) {

// stores thank-you message //
let thankYouMessage = `Thank you, ${user.firstName}! Here's what we received:<br>
        First Name: ${user.firstName}<br>
        Last Name: ${user.lastName}<br>
				Email: ${user.email}<br>
				Phone Number: ${user.phone}<br>
				Preferred Contact Method: ${user.preferredContactMethod}`;

if (comments) {
				thankYouMessage += `<br>Comments: ${user.comments}`;
			}

// displays object and thank-you message //
	document.getElementById("thank-you-message").innerHTML = thankYouMessage;

// resets form //
			form.reset();
}
	});
});
