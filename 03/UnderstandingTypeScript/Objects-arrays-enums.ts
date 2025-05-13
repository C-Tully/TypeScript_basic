//ENUMS
//CUSTOM TYPE:: make sure to use a capital letter

enum Role {
  ADMIN = 5, // 0
  READ_ONLY, //
  AUTHOR, // 2
}

const person = {
  name: "Chris",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// Then you can use the Role.ADMIN (or other properities) through the site. This is similar to the const ADMIN = 1 type of global varaible idea.
//OBJECTS
// const person: object = {
//   name: "Chris",
//   age: 30,
// };

//doing the person: {} is a special TS format which tells it that is a object
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; //denotes a tuple
// } = {
//   name: "Chris",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// let favoriteActivities: string[];
// //mix arrays won't work in this case.
// favoriteActivities = ["Sports", 1];

// let tempArray: any[];
// //this is the anyType, which should be used sparringly
// //due to the fact that anything can be usedin the array types
// //which defeats the purpose of TS

// //Note that this throws an error, no property exists.
// // console.log("Person::", person.nickname);
// // console.log("Person::", person.nickname);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase()); //Note that TS knows this is a string so the .toUpperCase.
// }
