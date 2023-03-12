//create how your calculator works using function

function calculator(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var operation=document.getElementById("operation").value;


    //how to do for calculation 
    //using if else statements
    let result;
    if(operation==="addition"){
        result=parseFloat(num1)+parseFloat(num2);
    }else if(operation=="substraction"){
        result=num1-num2;
    }else if(operation=="multiplication"){
        result=num1*num2;
    }else if(operation=="division"){
        result=num1/num2;
    }
    document.getElementById("result").innerHTML=result;
}