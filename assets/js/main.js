// Initial variables definition link to HTML
var highscoreSection = document.getElementById("high-scores");
var highscoreDisplay = document.getElementById("display-hscores")
var timer = document.getElementById("timer");
var stimer = document.getElementById("stimer");
var mainPage = document.getElementById("main-page");
var questionsGroup = document.getElementById("questions-group");
var question = document.getElementById("question");
var answerButton = document.getElementById("answer-button1");
var finishedQuestions = document.getElementById("finished-questions");

// Array - Quiz questions
var questions = [
    {   listQuestion: "Commonly used data types DO Not Include (20pts):",
        a:"3. Alerts",
        choices: 
        [{choice: "1. Strings"},
        {choice:  "2. Booleans"},
        {choice:  "3. Alerts"},
        {choice:  "4. Numbers"}]
    },
    {   listQuestion: "The condition in an if / else statement is enclosed width___________.(20pts)",
        a:"3. Parenthesis",
         choices:
        [{choice: "1. Quotes"},
        {choice: "2. Curly brackets"},
        {choice: "3. Parenthesis"},
        {choice: "4. Square brackets"}]
    },
    { 
        listQuestion: "Arrays in JavaScript can be used to store ____________.(20pts)", 
        a:"4. All of the above",
        choices: 
        [{choice: "1. Number and strings"},
         {choice: "2. Other arrays"},
         {choice: "3. Booleans"},
         {choice: "4. All of the above"}]
    },
    { 
        listQuestion: "String values must be enclosed within _______ when being assigned to variables.(20pts)", 
        a:"3. Quotes",
        choices: 
        [{choice: "1. Commas"},
         {choice: "2. Curly brackets"},
         {choice: "3. Quotes"},
         {choice: "4. Parenthesis"}]
    },
    { 
        listQuestion: "A very useful tool used during development and debugging for pinting content to the debugger is:(20pts)",
        a:"4. Console.log",
        choices: 
        [{choice: "1. JavaScript"},
         {choice: "2. Terminal/bash"},
         {choice: "3. For loops"},
         {choice: "4. Console.log"}]
    },
    ];

// Variable definitions - sores and input form
var scoreDend = document.getElementById("score-banner");
var inputForm = document.getElementById("input-form");
var form = document.getElementById("form");
var submit = document.getElementById("submit");
var goBack = document.getElementById("go-back");
var clearScores = document.getElementById("clear-scores");
var correct = document.getElementById("correct");
var incorrect = document.getElementById("incorrect");
var highscoreLT = document.getElementById("highscoreL")

// Variable definitions - Triggers Start Quiz
var startQuiz = document.querySelector("#start-quiz");




//return section to scores page
var renderStartPage = function () {
    highscoreSection.classList.add("hide")
    highscoreSection.classList.remove("show")
    mainPage.classList.remove("hide")
    mainPage.classList.add("show")
    scoreDend.removeChild(scoreDend.lastChild)
    questionIndex = 0
    finished = ""
    timerVisual.textContent = 0 
    score = 0

    if (correct.className = "show") {
        correct.classList.remove("show");
        correct.classList.add("hide")
    }
    if (incorrect.className = "show") {
        incorrect.classList.remove("show");
        incorrect.classList.add("hide");
    }
}

// Variable definitions - time and index
var timerVisual= document.querySelector("#timer");
var score = 0;
var timeLeft;
var finished
timerVisual.innerText = 0;
var highScores = [];
var questionsRandom
var questionIndex = 0



// Quiz time for quiz and time interval

var setTime = function () {
    timeLeft = 60;

var timeInterval = setInterval(function () {
    timerVisual.innerText = timeLeft;
    timeLeft--

    if (finished) {
        clearInterval(timeInterval)
    }
    else if (timeLeft < 0) {
        clearInterval(timeInterval)
        showScore()
        timerVisual.innerText = 0
        
    }
    }, 1000)
}

// Function to start Quiz 
var startTest = function() {
    mainPage.classList.add("hide");
    mainPage.classList.remove("show");
    questionsGroup.classList.add ("show");
    questionsGroup.classList.remove("hide");
    questionsRandom = questions.sort(() => Math.random() - 0.5);
    setTime()
    setQuestion()
}

// Function for random questions
var setQuestion = function() {
    resetAnswers()
    testQuestion(questionsRandom[questionIndex]);
}

// Function to clear answers selected
var resetAnswers = function () {
    while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild)
    };
};

// Function to check answer vs solution
var testQuestion = function(index) {
    question.innerText = index.listQuestion
    for (var i = 0; i < index.choices.length ; i++) {
    var selectAnswer = document.createElement('button')
    selectAnswer.innerText = index.choices[i].choice
    selectAnswer.classList.add('button-answer')
    selectAnswer.classList.add('button-select')
    selectAnswer.addEventListener("click", solutionVerification)
    answerButton.appendChild(selectAnswer)
    }
};

// Fuction to display if an answer is correct or incorrect
var answerCorrect = function() {
    if (correct.className = "hide") {
        correct.classList.remove("hide")
        correct.classList.add("banner")
        incorrect.classList.remove("banner")
        incorrect.classList.add("hide")
    }
}
var answerIncorrect = function() {
    if (incorrect.className = "hide") {
        incorrect.classList.remove("hide")
        incorrect.classList.add("banner")
        correct.classList.remove("banner")
        correct.classList.add("hide")
    }
}

 // Function to track answer points and time penalization
    var solutionVerification = function(event) {
        var shot1 = event.target
            if (questionsRandom[questionIndex].a === shot1.innerText){
                answerCorrect()
                score = score + 20
            }

            else {
              answerIncorrect()
              score = score - 0;
              timeLeft = timeLeft - 3;
          };

        // Move to next question
          questionIndex++
            if  (questionsRandom.length > questionIndex + 1) {
                setQuestion()
            }   
            else {
               finished = "true";
               showScore();
                }
    }


        // Function to display results
    var showScore = function () {
        questionsGroup.classList.add("hide");
        finishedQuestions.classList.remove("hide");
        finishedQuestions.classList.add("show");

        var scoreDisplay = document.createElement("p");
        scoreDisplay.innerText = ("Your final score is " + score + "!");
        scoreDend.appendChild(scoreDisplay);
    }       
    
    // Function to create high scores
    var createHighScore = function(event) { 
        event.preventDefault() 
        var form = document.querySelector("#form").value;
        if (!form) {
          alert("Enter your Name");
          return;
        }

      inputForm.reset();

      var HighScore = {
      form: form,
      score: score
      } 


      highScores.push(HighScore);
      highScores.sort((a, b) => {return b.score-a.score});

// Clear scores
    while (highscoreLT.firstChild) {
       highscoreLT.removeChild(highscoreLT.firstChild)
    }
    //List scores
    for (var i = 0; i < highScores.length; i++) {
      var highscoreEl = document.createElement("li");
      highscoreEl.ClassName = "high-score";
      highscoreEl.innerHTML = highScores[i].form + " :    " + highScores[i].score;
      highscoreLT.appendChild(highscoreEl);
    }

      saveHighScore();
      displayHighScores();

    }
    //save score
    var saveHighScore = function () {
        localStorage.setItem("HighScores", JSON.stringify(highScores))
            
    }

    //Load scores values
    var loadHighScore = function () {
        var LoadedHighScores = localStorage.getItem("HighScores")
            if (!LoadedHighScores) {
            return false;
        }

        LoadedHighScores = JSON.parse(LoadedHighScores);
        LoadedHighScores.sort((a, b) => {return b.score-a.score})
 

        for (var i = 0; i < LoadedHighScores.length; i++) {
            var highscoreEl = document.createElement("li");
            highscoreEl.ClassName = "high-score";
            highscoreEl.innerText = LoadedHighScores[i].initials + " :    " + LoadedHighScores[i].score;
            highscoreLT.appendChild(highscoreEl);

            highScores.push(LoadedHighScores[i]);
            
        }
    }  

    //display high score screen from link or when intiials entered
    var displayHighScores = function() {

        highscoreSection.classList.remove("hide");
        highscoreSection.classList.add("show");
        finished = "true"

        if (finishedQuestions.className = "show") {
            finishedQuestions.classList.remove("show");
            finishedQuestions.classList.add("hide");
            }
        if (mainPage.className = "show") {
            mainPage.classList.remove("show");
            mainPage.classList.add("hide");
            }
            
        if (questionsGroup.className = "show") {
            questionsGroup.classList.remove("show");
            questionsGroup.classList.add("hide");
            }

        if (correct.className = "show") {
            correct.classList.remove("show");
            correct.classList.add("hide");
        }

        if (incorrect.className = "show") {
            incorrect.classList.remove("show");
            incorrect.classList.add("hide");
            }
        
    }
    //clears scores
    var emptyScores = function () {
        highScores = [];

        while (highscoreLT.firstChild) {
            highscoreLT.removeChild(highscoreLT.firstChild);
        }

        localStorage.clear(highScores);

    } 
    loadHighScore()

    // Event listener to trigger functions with button click and form submmit
      startQuiz.addEventListener("click", startTest);
      inputForm.addEventListener("submit", createHighScore)
      highscoreDisplay.addEventListener("click", displayHighScores)
      goBack.addEventListener("click", renderStartPage)
      clearScores.addEventListener("click", emptyScores)

