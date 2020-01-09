/**
 * Reverse Polish Notation Calculator
 */

const arguments = process.argv.slice(2);

const operand1 = Number(arguments[0]);
const operand2 = Number(arguments[1]);
const operator = arguments[2];

console.log('Calculating:', operand1, operand2, operator);
console.log('Result:');

let result;

switch (operator) {
  case '+':
    result = operand1 + operand2;
    break;
  case '-':
    result = operand1 - operand2;
    break;
  case '/':
    result = operand1 / operand2;
    break;
  case '*':
    result = operand1 * operand2;
    break;
  default:
    console.error('Not implemented:', operator);
}

console.log(result);
