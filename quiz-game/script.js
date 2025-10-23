//Questions array
const questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Jupiter", "Venus"],
    answer: "Mars"
  },
  {
    category: "Geography",
    question: "Which continent is the Sahara Desert located on?",
    choices: ["Africa", "Asia", "Australia"],
    answer: "Africa"
  },
  {
    category: "History",
    question: "Who was the first President of the United States?",
    choices: ["George Washington", "Abraham Lincoln", "John Adams"],
    answer: "George Washington"
  },
  {
    category: "Math",
    question: "What is the value of π (pi) rounded to two decimal places?",
    choices: ["3.14", "3.15", "3.13"],
    answer: "3.14"
  },
  {
    category: "Sports",
    question: "How many players are there on a soccer team on the field?",
    choices: ["11", "10", "12"],
    answer: "11"
  }
];

//Function to get a random question
function getRandomQuestion(questionsArray) {
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

//Function to get a random computer choice
function getRandomComputerChoice(choicesArray) {
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

//Function to get results
function getResults(questionObj, computerChoice) {
  if (computerChoice === questionObj.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObj.answer}`;
  }
}

//Example usage:
const randomQuestion = getRandomQuestion(questions);
const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log(randomQuestion.question);
console.log("Computer chose:", computerChoice);
console.log(getResults(randomQuestion, computerChoice));