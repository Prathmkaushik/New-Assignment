const operator = prompt('Enter operator ( either +, -, * or / ): ');
// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));
let result;
// using if...else if... else
if (operator == '+') {    
	result = number1 + number2;
}
else if (operator == '-') {    
	result = number1 - number2;
}
else if (operator == '*') {    
	result = number1 * number2;
}
else {    
	result = number1 / number2;
}
// display the result
console.log(`${number2} ${operator} ${number1} = ${result}`);