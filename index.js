var read = require("readline-sync");

var score = 0;

// data of high score
var highScores=[
  {
    name: "Priyanshu",
    score: 4,
  },
  {
    name: "Aniket",
    score: 3,
  },
  {
   name: "Shilp",
   score: 2,
  }
]

//Welcome
function welcome(){
  var name = read.question("What's your name? ");

  console.log("Welcome "+ name);
  console.log("----------------");
  console.log("Let's play how well DO YOU KNOW ME?");
}

var questions=[
  {
    ques:"Who is my role model? ",
    ans:"Ratan Tata",
  },
  {
    ques:"What is my favorite sports? ",
    ans:"Cricket",
  },
  {
    ques:"Which country is my dream vacation? ",
    ans:"Japan", 
  },
  {
    ques:"What is my favorite food? ",
    ans:"Any Street food",
  },
  {
    ques:"What is my favorite colour? ",
    ans:"Blue",
  }
]

//play
function play(ques, ans) {
  var userans = read.question(ques);

  if (userans.toUpperCase() === ans.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    play(questions[i].ques, questions[i].ans)
  }
}

welcome();
game();
console.log("Thanks for participating in this quiz. Your final score is "+ score);
console.log("Highest scores of this quiz are:");
for(var i=0; i<highScores.length; i++){
  console.log(highScores[i].name + " : "+ highScores[i].score);
}

function scoreCompare(){
  var count=0;
  for(var i=0; i<highScores.length; i++){
  if(highScores[i].score<score){
    count++;
  }
  if(count === 1){
    console.log("Congratulations, your score is the highest score of this quiz. Please send me a screenshot so that I can update the high score list.")
  
  }
}
}

scoreCompare();