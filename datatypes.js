var num1 = 10;
var num2 = 20;
var isTrue = true;
var message = "Result is :";
function addMethod(number1, number2, checkIsTrue, msg) {
    var result = number1 + number2;
    if (checkIsTrue) {
        console.log(msg + result);
    }
    else {
        return number1 + number2;
    }
}
addMethod(num1, num2, isTrue, message);
