const inputs=document.querySelectorAll(".input");
const calculateAreaBtn=document.querySelector("#btn");
const outputBox=document.querySelector("#output-box");

function calculateBaseMulHeight(a,b){
    const height= a*b;
    return height;
}
function calculateArea(){
    const mulOfBaseAndHeight=calculateBaseMulHeight(Number(inputs[0].value),Number(inputs[1].value));
    const areaOfTriangle=(mulOfBaseAndHeight)/2;
    outputBox.innerText="The area of triangle is "+areaOfTriangle+" cm²"
}

calculateAreaBtn.addEventListener("click",calculateArea);