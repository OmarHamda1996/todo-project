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

let answers = [];

function askQuestion(question) {
  let answer = prompt(question);
  if (answer === null || answer.trim() === '') {
    answer = 'invalid';
  }
  return answer.toLowerCase();
}

function addAnswer(answer) {
  answers.push(answer);
}


function printAnswers() {
  for (let i = 0; i < answers.length; i++) {
    console.log(answers[i]);
  }}

let question1 = 'Do you have any experiance in programming ?';
let answer1 = askQuestion(question1);
addAnswer(answer1);

let question2 = 'Have you ever took any programing courses ';
let answer2 = askQuestion(question2);
addAnswer(answer2);

let question3 = 'Do you enjoy this course?';
let answer3 = askQuestion(question3);
addAnswer(answer3);

printAnswers();


