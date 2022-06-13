var add = function (num1, num2, showResult, phrase) {
    // if (typeof num1 !== "number" || typeof num2 !== "number"){
    //     throw new Error('Incorrect input')
    // }
    var result = num1 + num2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
};
var number1 = 2.3;
var number2 = 6;
var printResult = true;
var resultPhrase = "Your result is: ";
var result = add(number1, number2, printResult, resultPhrase);
