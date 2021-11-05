//Function declarations

function func1(number1, number2) {
    return sum1 = (number1 * number1) + (number2 * number2);
}

func1(5, 10);
console.log(sum1);

//Function expressions

const func2 = function (number3, number4) {
    return sum2 = (number3 * number3) + (number4 * number4);
};

func2(5, 10);
console.log(sum2);

// Arrow functions

const func3 = (number5, number6) => {
    return sum3 = (number5 * number5) + (number6 * number6);
};

func3(5, 10);
console.log(sum3);