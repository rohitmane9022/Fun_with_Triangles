const Side  = document.querySelectorAll(".side-input")
const clickbtn = document.querySelector("#btn")
const Output = document.querySelector(".output")


function CalculateSum(a,b){
  const sumofsqures  = a*a + b*b;
  return sumofsqures;
}
function CalculateHypotenuse(){
  const sumofsqures = CalculateSum(Number(Side[0].value),Number(Side[1].value));
  const lengthofHypotenuse = Math.sqrt(sumofsqures)
  Output.innerText = "The lenght of Hypotenuse "+ lengthofHypotenuse
}

clickbtn.addEventListener('click', CalculateHypotenuse)