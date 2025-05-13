// // function add(n1: number, n2: number): number {
// //   return n1 + n2;
// // }

// function printResult(num: number): void {
//   console.log("Result: " + num);
// }

// //this is used for the callback examples.
// //what we see is that we're declaring a function, its arguments types
// //and a call back, and this cb must align with a given function type format.

// function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
//   const result = n1 + n2;
//   cb(result);
// }

// // printResult(add(5, 12));

// //function types

// // let combineValues;
// // let combineValues: Function;
// //The function Type must be defined ina specific way.
// let combineValues: (a: number, b: number) => number;

// // combineValues = add;
// // combineValues = 5;
// // console.log(combineValues(8, 8));

// //Using the CB function:
// // One of the key things to note here is that because of the
// // the declaration above, TS knows that the "result" value in the
// // anonymous function is going to be a number type
// // because it was declared that way, this means we don't need to add a
// // type to the function again. Passing in another thing
// // will throw an error.  By specifying void on the function, we are letting TS
// // know that we will not do anything with the return type,
// addAndHandle(10, 20, (result) => {
//   console.log(result);
// });
