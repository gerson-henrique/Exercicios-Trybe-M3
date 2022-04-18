const readline = require('readline-sync');
const { questionInt } = readline;

const factorial = () => {
const number = questionInt("pick a number ");
let i = number;
let sum = 1;
while ( i > 1) {
  sum *= i;
  i--;
}


console.log(sum);

}
factorial();