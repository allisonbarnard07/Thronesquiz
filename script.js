// code by webdevtrick (https://webdevtrick.com)
function tQuiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

tQuiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

tQuiz.prototype.choice = function(answer) {
    if(this.getQuestionIndex().isRightAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;
}

tQuiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}


function Question(text, options, answer) {
    this.text = text;
    this.options = options;
    this.answer = answer;
}

Question.prototype.isRightAnswer = function(option) {
    return this.answer === option;
}


function populate() {
    if(thronesQuiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = thronesQuiz.getQuestionIndex().text;

        // show options
        var options = thronesQuiz.getQuestionIndex().options;
        for(var i = 0; i < options.length; i++) {
            var element = document.getElementById("option" + i);
            element.innerHTML = options[i];
    choice("btn" + i, options[i]);
        }

    }
};

function choice(id, choice) {
    var button = document.getElementById(id);
    button.onclick = function() {
        thronesQuiz.choice(choice);
        populate();
    }
};

function showScores() {
    var gameEndHTML = "<h1>Result</h1>";
    gameEndHTML += "<h2 id='score'> Your scores: " + thronesQuiz.score + "</h2>";
    var element = document.getElementById("thronesQuiz");
    element.innerHTML = gameEndHTML;
};



var count = 10;
var interval = setInterval(function(){
  document.getElementById('count').innerHTML=count;
  count--;
  if (count === 0){
    clearInterval(interval);
    document.getElementById('count').innerHTML='Done';
    // or...
    alert("You're out of time!");
  }
}, 1000);

// create questions here
var questions = [
    new Question("Who is not a Lannister?", ["Jamie", "Cersei","Tywin", "Rob"], "Rob"),
    new Question("Who is related to the Hound?", ["The Mountain", "Tyrion", "Grey Worm", "Jon Snow"], "The Mountain"),
    new Question("How many Episodes of GoT have aired?", ["150", "92","73", "75"], "73"),
    new Question("Name the squire in service to Brienne of Tarth", ["Sam", "Podrick", "Rodrick", "Arya"], "Podrick"),
    new Question("Who is responsible for the creation of the Night King?", ["Children of the Forest", "Lord of Light", "Melisandre", "Maggy"], "Children of the Forest"),
    new Question("What is Hodor's real name?", ["Jon", "Wylis", "Tywin", "William"], "Wylis"),
    new Question("What is the name of the giant crossbow that was used to protect King's Landing from dragons?", ["Spider", "Millipede", "Crossbow", "Scorpion"], "Scorpion"),
    new Question("Whose skull was crushed by The Mountain?", ["Joffrey", "Bran", "Oberyn", "Sansa"], "Oberyn"),
    new Question("Which House's motto is 'Fire and Blood'?", ["Targaryen", "Lannister", "Stark", "Baratheon"], "Targaryen"),
    new Question("In the books, what body part was Tyrion missing?", ["Nose", "Eye", "Arm", "Hand"], "Nose")
];

// create quiz
var thronesQuiz = new tQuiz(questions);

// display quiz
populate();