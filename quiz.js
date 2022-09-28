var QuizyForm = document.querySelector(".Quiz-form")
var btn = document.querySelector(".submit-btn")
var OutputEl = document.querySelector("#OutputEl")

var CorrectAnswer = ["90°","right angled"]

function calculateScore(){
  let score = 0;
  let index = 0;
  const formResults = new FormData(QuizyForm)
  for(let value of formResults.values()){
    if(value === CorrectAnswer[index]){
      score = score + 1
    }
    index = index + 1;
  }
    OutputEl.innerText = "Your Score is " + score;
}

btn.addEventListener('click', calculateScore)