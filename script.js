/* 
Q1: Evaluate each of the following Javascript expressions and show the value


// 1. -5*3
console.log(-5 * 3); // Output: -15

// 2. "JavaScript " + 50
console.log("JavaScript " + 50); // Output: "JavaScript 50"

// 3. 17 % 5
console.log(17 % 5); // Output: 2

// 4. 5 % 17
console.log(5 % 17); // Output: 5

// 5. 5/10
console.log(5 / 10); // Output: 0.5

// 6. (4 === '4')
console.log(4 === "4"); // Output: false

// 7. (4 != 5)
console.log(4 != 5); // Output: true

// 8. (7 <= 8)
console.log(7 <= 8); // Output: true

// 9. "Hello" + 5
console.log("Hello" + 5); // Output: "Hello5"

// 10. Math.ceil(x) - Math.floor(x)
let x = 4.7; // Example value for x
console.log(Math.ceil(x) - Math.floor(x)); // Output: 1

// 11. Math.pow(x, 2)
console.log(Math.pow(x, 2)); // Output: 22.09 (for x = 4.7)
*/

// Q2 : Read a number (using prompt) and display it using alert

// let number = prompt("Enter a number : ");
// alert(number);

/*
 Q3 : Read in two numbers and display them in ascending order.

let number1 = Number(prompt("Enter number 1 : "));
let number2 = Number(prompt("Enter number 2 : "));

if (number1 > number2) {
  alert(number2);
  alert(number1);
} else {
  alert(number1);
  alert(number2);
}
*/
/*
  Q4: Read in two numbers and display the larger

let num1 = Number(prompt("Enter number 1 : "));
let num2 = Number(prompt("Enter number 2 : "));
let larger = Math.max(num1, num2);
alert(larger);
*/

/**
 * Q5: Read two numbers and display their sum. 
  let num1 = Number(prompt("Enter number 1 : "));
  let num2 = Number(prompt("Enter number 2 : "));
  let sum = num1 + num2;
  alert(sum);
 */

/* Q6: If you have a “Number” variable,  Your task is to print:

- ONE, if it is equal to 1 .
- TWO, if it is equal to 2.
- THREE, if it is equal to 3 .
- FOUR, if it is equal to 4.
- FIVE, if it is equal to 5.
- SIX, if it is equal to 6 .
- SEVEN, if it is equal to 7.
- EIGHT, if it is equal to 8.
- NINE, if it is equal to 9.
- PLEASE TRY AGAIN, if there is none of the above.


let number = Number(prompt("Enter Number from 1 to 9"));

switch (number) {
  case 1:
    alert("ONE");
    break;
  case 2:
    alert("TWO");
    break;
  case 3:
    alert("THREE");
    break;
  case 4:
    alert("FOUR");
    break;
  case 5:
    alert("FIVE");
    break;
  case 6:
    alert("SIX");
    break;
  case 7:
    alert("SEVEN");
    break;
  case 8:
    alert("EIGHT");
    break;
  case 9:
    alert("NINE");
    break;
  default:
    alert("PLEASE TRY AGAIN");
}
*/

/* Task 2 */

// Q7: Use a loop to display the numbers 0 through 5, each in a separate alert window.
// for (let i = 0; i <= 5; i++) {
//   alert(i);
// }

// Q8: Use a loop to display the numbers 0 through 5 in a single alert window
// let sum = "";
// for (let i = 0; i <= 5; i++) {
//   sum += i + ", ";
// }
// alert(sum);

// Q9: Use a loop to display the numbers in the range 0…20 that are multiples of 3.
// for (let i = 0; i <= 20; i++) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

// Q10: Prompt the user for a number in the range 0…100.  If the number is out of range, display an error message and prompt again until a valid number is entered.  Assume the user enters a number each time
// let number = Number(prompt("Enter a number between 0 .. 100"));
// while (number > 100 || number < 0) {
//   alert("Invalid Number");
//   number = Number(prompt("Enter a number between 0 .. 100"));
//   if (number >= 0 && number <= 100) {
//     break;
//   }
// }

// Q11: Prompt for an integer, then display the sum of the integers from 0 through the number entered.  For example, if you enter 10, then display 55 which is the sum of   0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

// let sum = 0;
// let num = Number(prompt("Enter a number : "));

// for (let i = 0; i <= num; i++) {
//   sum += i;
// }
// alert(sum);
