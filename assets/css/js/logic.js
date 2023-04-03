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

// function to check the answer
function questionClick() {
    if (this.value !== questions[current].answer) {
        time -= 15;

        if (time < 0) {
            time = 0;
        }

        timerE1.textContent = time;

        feedbackE1.textContent = "Wrong!";
        wrong.play();
    } else {
        feedbackE1.textContent = "Correct!";
        correct.play();
    }

    feedbackE1.setAttribute("class", "feedback");
    setTimeout(function() {
        feedbackE1.setAttribute("class", "feedback hide");
    }, 1000);

    current++;

    if (current === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// function to end the quiz
function quizEnd() {
    clearInterval(timer);

    var endScreenE1 = document.getElementById("end-screen");
    endScreenE1.removeAttribute("class");

    var finalScoreE1 = document.getElementById("final-score");
    finalScoreE1.textContent = time;

    questionsE1.setAttribute("class", "hide");
}

// function to save the score
function saveHighscore() {
    var initials = initialsE1.value.trim();

    if (initials !== "") {
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        var newScore = {
            score: time,
            initials: initials
        };

        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        window.location.href = "highscores.html";
    }
}

// function to check for enter key
function checkForEnter(event) {
    if (event.key === "Enter") {
        saveHighscore();
    }
}

// function to clock tick
function clockTick() {
    time--;
    timerE1.textContent = time;

    if (time <= 0) {
        quizEnd();
    }
}

// submit button
submitBtn.onclick = saveHighscore;

// start button
startBtn.onclick = start;

// initials input
initialsE1.onkeyup = checkForEnter;

// user clicks on elements containing choices
choicesE1.oneclick = questionClick;

initialsE1.onkeyup = checkForEnter;

function addNumbers(number_one, number_two) {
    return number_one + number_two;
}

var num1 = prompt('first number')
var num2 = prompt('second number')

var result = addNumbers(num1, num2)

alert(result)





