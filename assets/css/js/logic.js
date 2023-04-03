// Purpose: Javascript for the quiz
var current = 0; // current question
var time = questions.length * 15; // time left
var timer; // timer

// function to start the quiz
var questionsE1 = document.getElementById("questions"); // questions
var timerE1 = document.getElementById("time");  // timer
var choicesE1 = document.getElementById("choices"); // choices
var submitBtn = document.getElementById("submit");  // submit button
var startBtn = document.getElementById("start");    // start button 
var initialsE1 = document.getElementById("initials");   // initials input
var feedbackE1 = document.getElementById("feedback");  // feedback

//sound effects
var correct = new Audio("assets/sounds/correct.wav");
var wrong = new Audio("assets/sounds/wrong.wav");

// function to start the quiz
function start() { 
    var startScreenE1 = document.getElementById("start-screen");
    startScreenE1.setAttribute("class", "hide");

    questionsE1.removeAttribute("class");

    timer = setInterval(clockTick, 1000);

    timerE1.textContent = time;

    getQuestion();
}

// function to get the questions
function getQuestion() {
    var currentQuestion = questions[current];

    var titleE1 = document.getElementById("question-title");
    titleE1.textContent = currentQuestion.title;

    choicesE1.innerHTML = "";

    currentQuestion.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button");
        choiceNode.setAttribute("class", "choice");
        choiceNode.setAttribute("value", choice);

        choiceNode.textContent = i + 1 + ". " + choice;

        choiceNode.onclick = questionClick;

        choicesE1.appendChild(choiceNode);
    });
}

