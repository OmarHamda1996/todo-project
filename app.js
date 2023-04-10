var name = prompt("Please enter your name:");
var gender = prompt("Please enter your gender (male or female):");
var age = parseInt(prompt("Please enter your age:"));
if (age <= 0) {
  alert("Invalid age! Age must be greater than zero.");
}
var skipWelcoming = confirm("Do you want to skip the welcoming message?");
var greeting;
if (gender === "male") {
  greeting = "Mr. " + name;
} else if (gender === "female") {
  greeting = "Ms. " + name;
} else {
  greeting = name;
}
if (!skipWelcoming) {
  alert("Welcome, " + greeting + "!");
}
