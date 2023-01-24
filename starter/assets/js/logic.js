// Quiz state tracking variable
let currentQuestionIndex = 0
let time = questions.length * 25;
let timerID;


//HTML Elements
let questionsElemnent = document.getElementById("questions");
let timerElement = document.getElementById("time");
let choicesElement = document.getElementById("chioces");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let initialElement = document.getElementById("initials");
let feedBackElement = document.getElementById("feedback");

// Audio variable for Right and Wrong answers
let SfxCorrect = new Audio("assets/sfx/correct.wav");

let SfxIncorrect = new Audio("assets/sfx/incorrect.wav")


//Quiz functions
function questionClick(){
    alert("question was clicked")

}

function getQuestion(){
     let currentQuestionIndex = questions[currentQuestionIndex];

     let titleElement = document.getElementById("question-title");

     titleElement.textContent = currentQuestion.title;
     
     choicesElement.innerHTML = "";

     currentQuestion.choices.forEach(function(choice, index) {
        let choiceButton = document.createElement("button");

        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", "choice");

        choiceButton.textContent = '${index + 1}. ${choice}'

        choiceButton.addEventListener("click", questionClick);

        choicesElement.append(choiceButton);
     })
}




function quizEnd(){
    clearInterval(timerID);

    let endScreenElement = document.getElementById("end-screen");
    endScreenElement.removeAttribute("class");

    let finalScoreElement = document.getElementById("final-score");
    finalScoreElement.textContent = time;

    questionsElemnent.setAttribute("class", "hide");

}

function clockTick(){
    time--;
    timerElement.textContent = time;

    if(time <= 0){
        quizEnd();
    } 

}

function startQuiz(){
    let startScreenElement = document.getElementById("start-screen");
    startScreenElement.setAttribute("class", "hide");    

    questionsElemnent.removeAttribute("class");

    timerID = setInterval(clockTick, 1000)

    timerElement.textContent = time;

    getQuestion();
}

function saveHighScore(){

}




function checkForEnter(event){

}

startButton.addEventListener("click", startQuiz);

submitButton.addEventListener("click",saveHighScore);

initialElement.addEventListener("keyup", checkForEnter);