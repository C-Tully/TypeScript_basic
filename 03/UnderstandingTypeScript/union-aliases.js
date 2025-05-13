"use strict";
//type Alias
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultConversion === "as-number") {
    //   return +result; //converts result to a number
    // } else {
    //   return result.toString();
    // }
    return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);
const combinedNames = combine("Chris", "Joe", "as-text");
console.log(combinedNames);
const combinedStringAges = combine(30, 26, "as-number");
console.log(combinedStringAges);
//litteral types
// A way to Expressing a specific value that would be acceptable
// function combine(
//   input1: number | string,
//   input2: number | string | boolean,
//   resultConversion: 'as-number' | 'as-text' //this means ONLY as-number or as-text is accepted
// ) {
//   let result;
//   if (
//     (typeof input1 === "number" && typeof input2 === "number") ||
//     resultConversion === "as-number"
//   ) {
//     result = +input1 + +input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   // if (resultConversion === "as-number") {
//   //   return +result; //converts result to a number
//   // } else {
//   //   return result.toString();
//   // }
//   return result;
// }
// const combinedAges = combine(30, 26, "as-number");
// console.log(combinedAges);
// const combinedNames = combine("Chris", "Joe", "as-text");
// console.log(combinedNames);
// const combinedStringAges = combine(30, 26, "as-number");
// console.log(combinedStringAges);
//the problem with the above as-* then we have to memorize that format So lets set a literal
//Union type
//Note that we have to handle each concat/math seperately
//due to a union issue not identenfying the types, only that we're doing a union.
// function combine(input1: number | string, input2: number | string | boolean) {
//   let result;
//   if (typeof input1 === "number" && typeof input2 === "number") {
//     result = input1 + input2;
//   } else {
//     result = input1.toString() + input2.toString();
//   }
//   return result;
// }
// const combinedAges = combine(30, 26);
// console.log(combinedAges);
// const combinedNames = combine("Chris", "Joe");
// //litteral types
// // A way to Expressing a specific value that would be acceptable
