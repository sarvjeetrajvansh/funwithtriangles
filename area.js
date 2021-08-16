const input=document.querySelectorAll('.triangle-sides');
const btnCalculate=document.querySelector('#btn-calculate');
const output=document.querySelector('#output');

function calculateArea(){

    let area= (Number(input[0].value) * Number(input[1].value))/2;
    output.innerText="The area of Triangle is :" + area ;

}

btnCalculate.addEventListener('click',calculateArea);