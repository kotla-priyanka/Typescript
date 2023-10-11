const num1 = 10;
const num2 = 20;
const isTrue = true;
const message = "Result is :"

function addMethod( number1: number, number2: number, checkIsTrue: boolean, msg:string ){
    const result = number1 + number2;
    if(checkIsTrue){
        console.log(msg+result);
    }else{
        return number1+number2;
    }
}
addMethod(num1,num2,isTrue,message);