const inputs = document.querySelectorAll('.side-input');
const btn=document.querySelector("#btn-calculate");
const output=document.querySelector('#output');

function SumOfSquaresOfSides(a, b){
    const sumOfSides= a*a + b*b;
    return sumOfSides;
}

function calculateHypotenous(){
     const sumOfSquare=SumOfSquaresOfSides(Number(inputs[0].value),Number(inputs[1].value));
     const length=Math.sqrt(sumOfSquare);
     output.innerText="The Length of Hypotenous is :" + length;

}

btn.addEventListener('click',calculateHypotenous);