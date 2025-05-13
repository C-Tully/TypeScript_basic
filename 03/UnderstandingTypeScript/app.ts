let userInput: unknown;
let userName: string;

//The nice part of unknown is that we can
//set any type of value to it
userInput = 5;
userInput = "Chris";
//the above works
//the below fails
// userName = userInput;

//With the unknown type, it's a bit more rule specific, vrs tje
//any usage. We must first identenfy what the 'unknown' variable
//is before we can reassign it.

//this extra type check is required to allow us to be
//able to override a value at some point
//just make the extra type to ensure it'll work
//thus unknown is better then 'any' type
//as it can have rules enforced upon it once
// it as been assigned.
if (typeof userInput === "string") {
  userName = userInput;
}

//Never Type

function generateError(message: string, code: number): never {
  throw {
    message: message,
    errorCode: code,
  };
  //while(true){}
}

generateError("An error occoured", 500);
