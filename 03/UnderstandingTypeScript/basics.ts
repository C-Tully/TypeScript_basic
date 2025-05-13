// function add(n1: number, n2: number, showResult: boolean, phrase: string) {
//   //Make sure to do the math first
//   const result = n1 + n2;
//   if (showResult) {
//     //then the console log, other wise it will make for a messed up out put.
//     console.log(phrase + result);
//   } else {
//     return n1 + n2;
//   }
// }

const num1 = 5;
const num2 = 2.8;
// const printResult = true;
let resultPhrase = "Result is:  ";
// resultPhrase = 0;

// add(num1, num2, printResult, resultPhrase);

//A good practice where you do declare a varaibles type, is when you do not
//initalize the value
//let var:number;

//Note: You could declare a number in TS such as
//let number1:number = 5
//...its pretty redundent and bad practice

// @ts-ignore comment
//Core data types and how to work with them
// function add(n1, n2) {
//   return n1 + n2;
// }
/**values
// const num1 = 5;
// const num2 = 2.8;
// const result = add(num1, num2);
// console.log(result);  output:: 7.8
**/
//example of breaking typescript
//values
// const num1 = "5"; //change to text
// const num2 = 2.8;
// const result = add(num1, num2);
// console.log(result);
//output:: 52.8  -- this is a normal JS bug that can happen as it just concated the values together.
//Adding type Assignments will help to avoid type mismatchs.
// function add(n1: Number, n2: Number) {
//   return n1 + n2;
// }

// const num1 = "5"; //Since this is a number, it will break
// const num2 = 2.8;

// const result = add(num1, num2);
// console.log(result);
//With the above changes, what we will see is that when running the terminal command `tsc app.ts` an error is generated stating the
//input values into add are not correct.
//The errof flagging is only run at compile time. By default, TS will not block compilitation, though that can be set.
