const inputs= document.querySelectorAll('.angle-input');
const isTrianleBtn = document.querySelector('#btn-is-triangle');
const result=document.querySelector('#result');

function sumOfAngles(angle1, angle2, angle3){

    const angleSum=Number(angle1) + Number(angle2) + Number(angle3);
    return angleSum;

}

function isTriangle(){
    const angleSum=sumOfAngles(inputs[0].value,inputs[1].value,inputs[2].value);

    if(angleSum === 180){
        result.innerText="Yay !! Angle forms Triangle";
    }
    else{
        result.innerText="Ahh !! Angles cann't form Triangle";
    }

    

}


isTrianleBtn.addEventListener('click',isTriangle);