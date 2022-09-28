const input = document.querySelectorAll(".angle-input")
const isbtn = document.querySelector('#is-triangle-btn')
const OutputEl = document.querySelector(".output")


function calculateSumOfAngles(angle1,angle2,angle3){
  const SumOfAngles = angle1 + angle2 + angle3;
  return SumOfAngles;
}

function istriangle(){
 const SumOfAngles = calculateSumOfAngles(Number(input[0].value),Number(input[1].value),Number(input[2].value))

//  console.log(SumOfAngles)
 if(SumOfAngles === 180){
  // console.log("yeah you are right")
  OutputEl.innerText = "Yay, The angle form a Triangle"
 }
 else{
  // console.log("you are wrong")
  OutputEl.innerText = "Oh Oh! The angle don't form a triangle"
 }
}

isbtn.addEventListener("click", istriangle)