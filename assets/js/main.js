
var testQuestions = [
    { 
        Question : "Commonly used data types DO Not Include:",
        options: {
           1: "1. strings",
           2: "2. booleans",
           3: "3. alerts",
           4: "4. numbers",
        },
        answer: 1
    },

    { 
        Question : " The condition in an if / else statement is enclosed width___________.",
        options: {
            1: "1. quotes",
            2: "2. curly brackets",
            3: "3. parenthesis",
            4: "4. square brackets",
        },
        answer: 1
    },

    { 
        Question : " Arrays in JavaScript can be used to store ____________.", 
        options: {
            1: "1. number and strings",
            2: "2. other arrays",
            3: "3. booleans",
            4: "4. all of the above",
        },
        answer: 1
    },

    { 
        Question : " String values musbe enclosed within _______ when being assigned to variables.", 
        options: {
            1: "1. commas",
            2: "2. curly brackets",
            3: "3. quotes",
            4: "4. parenthesis",
        },
        answer: 1
    },

    { 
        Question : " A very useful tool used during development and debugging for rpinting content to the debugger is:",
        options: {
            1: "1. commas",
            2: "2. curly brackets",
            3: "3. quotes",
            4: "4. parenthesis",
        },
        answer: 1
    },
    ];

var highScores = document.getElementById("high-scores");
var timer = document.getElementById("timer");
var stimer = document.getElementById("stimer");
var mainPage = document.getElementById("main-page");
var startQuiz = document.getElementById("t=start-quiz");
var questionsGroup = document.getElementById("questions-group");
var question = document.getElementById("question");
var answer = document.getElementById("answer");
var finishedQuestions = document.getElementById("finished-questions");
var score = document.getElementById("score");
var inputForm = document.getElementById("input-form");
var form = document.getElementById("form");
var submit = document.getElementById("submit");
var goBack = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");

var timerEl= document.querySelector("#timer");
var score = 0;
var timeLeft;
var finished;
var highScores = [];


var startTest = function() {
    mainPage.classList.add('hide');
    mainPage.classList.remove('show');
    questionsGroup.classList.add ('show');
    questionsGroup.classList.remove('hide');
}

var startQuestion = function () {
    resetAnswers()
    
}



// Access toggle switch HTML element
var themeSwitcher = document.querySelector("#theme-switcher");
var container = document.querySelector(".container");

// Set default mode to dark
var mode = "dark";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function() {
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
  }
  // If mode is light, apply dark background 
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
  }
});


var viewScore = document.createElement("p");
viewScore.classList.add("banner", "view-score");
viewScore.textContent = "View High Scores";

header.appendChild(viewScore);
header.appendChild(time);

//Timer
var finished
timerEl.innerText = 0;

var setTime = function () {
    timeLeft = 50;

var timerInterval = setInterval(function() {
    timerEl.innerText = timeLeft;
    timeleft--

    if (finished) {
        clearInterval(timerInterval)
    }
   
    if (timeLeft < 0) {
        showScore()
        timerEl.innerText = 0
        clearInterval(timerInterval)
    }

    }, 1000)
}









/*
    var startquizButton = 

    var startButton = document.createElement("button");
    startButton.classList.add("btn", "btn-start");
    startButton.textContent = "Start Quiz";

var startButton = 
// Click event causes alert light theme toggle
startquizButtonMaurci.on('click', function () {
    if (isDark) {
      $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
      isDark = !isDark;
    } else {
      $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
      isDark = !isDark;
    }
  });

  var startButton = document.querySelector('.button1');
  btn.addEventListener('click', (e) => {
      e.preventDefault();}



          // click to start, the timer start countdown
    document.querySelector(".btn-start").addEventListener("click",timer);

    // click to view high scores
    document.querySelector(".view-score").addEventListener("click", viewHighScore);
}

function clearTest() {
window.localStorage.clear();
document.querySelectorAll(# ).forEach(clearTest => clearTest.remove()));
}

start();

*/


