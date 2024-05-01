function bmical(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let bmi  = weight / (height/100) **2
    let resultMsg = "Your BMI is "+ bmi.toFixed(2)+" ";

    if(bmi<18.5){
        resultMsg = resultMsg + " (Underweight) "
    }
    else if(bmi >=18.5 && bmi< 25){
        resultMsg += " (Normal) ";
    }
    else if(bmi >=25 && bmi< 30){
        resultMsg += " (Overweight) "
    }
    else if(bmi >=30){
        resultMsg += " (Obese) "
    }
    else{
        resultMsg += "Enter valid Height or weight!";
    }

    document.getElementById("result").innerHTML = resultMsg;
}