// //Noraml Function 

// // function helloWorld(){
// //     console.log("Hello World");
// // }

// //arrow function 

// // let arrowFunction = ()=>{
// //     console.log("Hello Bro");
// // }

// let  arrowFunctionSingleParameter = name =>{
//     console.log(name);
// }

// let arrowFunctionMultipleParameter = (name, dob)=>{
//     console.log(name,dob);
// }

// // arrowFunctionSingleParameter("Md Omar Kaushru");
// //while arrow functions body contains single statement only but this will not applicable for return statment
// let arrowFunction = ()=> console.log("Hello Bro");

// // arrowFunction();
// // arrowFunctionMultipleParameter("Omar", "12-12-12")

// //Both fuctions are same
// // let getSquare = (num)=>{return num*num};
// let getSquare = (num)=> num*num;
// console.log(getSquare(4));


//................................................Template literals (ES6)
// Backtick ``

// let name = "Rahim";
// let age = "38";
// let dob = "21 June, 1983";

// console.log(`His name is ${name}
// His age is ${age}
// Date of Birth ${dob}`);

// let a = 34
// let b = 67
// console.log(`${a} + ${b} = ${ a + b }`);

//..................................................Array Destructuring
// Syntax

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a); // 10
// console.log(b); // 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // [30, 40, 50]

// ({ a, b } = { a: 10, b: 20 });
// console.log(a); // 10
// console.log(b); // 20

// // Stage 4(finished) proposal
// ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
// console.log(a); // 10
// console.log(b); // 20
// console.log(rest); // {c: 30, d: 40}

// Examples
// Array destructuring
// Basic variable assignment

// const foo = ['one', 'two', 'three'];

// const [red, yellow, green] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // "three"

// Assignment separate from declaration
// A variable can be assigned its value via destructuring separate from the variable's declaration.

// let a, b;

// [a, b] = [1, 2];
// console.log(a); // 1
// console.log(b); // 2


// Default values

// A variable can be assigned a default, in the case that the value unpacked from the array is undefined.

// let a, b;

// [a=5, b=7] = [1];
// console.log(a); // 1
// console.log(b); // 7

// Swapping variables

// Two variables values can be swapped in one destructuring expression.


// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1,2,3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]

// Parsing an array returned from a function

// It's always been possible to return an array from a function. Destructuring can make working with an array return value more concise.

// function f() {
//     return [1, 2];
//   }
  
//   let a, b;
//   [a, b] = f();
//   console.log(a); // 1
//   console.log(b); // 2
  
// Ignoring some returned values
// You can ignore return values that you're not interested in:

// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1
// You can also ignore all returned values:
// [,,] = f();

// Assigning the rest of an array to a variable
// const [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]


// ................................................................Spread Operator

// Spread Operator ...
// let str = "Bohubrihi";
// let newStr = [...str];

// //console.log(newStr);

// let fruit1 = ["Apple", "Pine-apple", "Mango"];
// let fruit2 = ["Orange", "Grape"];
// let newFruit = "Jackfruit";

// let newArr = [...fruit1, newFruit, ...fruit2];

// //console.log(newArr);
// // Spread on Object (ES8)
// let person = {
//     fname: "Simanta",
//     lname: "Paul"
// }

// let newPerson = {...person, dob: "08-26-1995"}
// console.log(newPerson);

// .......................................Spread Operator with function Parameters
// Spread Operator ...
 
// let numbers = [23, 1, 0, -1];

// //console.log(Math.max(...numbers));

// let person = ["Simanta", "Paul"]

// let test = (fname, lname) => {
//     console.log(`Hello ${fname} ${lname}`);
// }

// test(...person);

// ..................................................Rest Operator


// Rest Operator ...

// let fruits = ['apple', 'grape', 'mango', 'jackfruit'];
// let [first, second, ...third] = fruits

// // console.log(first);
// // console.log(second);
// // console.log(third);

// let person = {
//     fname: "Simanta",
//     lname: "Paul",
//     dob: "8-26-1995"
// }

// let {fname, ...lname} = person

// // console.log(fname);
// // console.log(lname);

// let moreNum = [78,1,2,5,6];

// let test =(name, ...numbers) => { // Rest
//     console.log(name);
//     console.log(numbers);
// }

// test("Simanta", 67,3,3);
// test("Simanta", ...moreNum); // Spread

// .....................................................................Sets

// Set
// let mySet = new Set([1, 2, 2, 4, 4]);

// // Add
// mySet.add("Hello");
// mySet.add(2);
// // Delete
// mySet.delete(4);

// // Check
// //console.log(mySet.has(4));
// // Size
// //console.log(mySet.size);

// // Iterating Sets

// // for (x of mySet.values()) {
// //     console.log(x);
// // }

// // let iter = mySet.entries();

// // console.log(iter.next());

// // console.log(iter.next());

// // console.log(iter.next());

// // for (let [x] of mySet.entries()) {
// //     console.log(x);
// // }

// let iter = [...mySet.values()];

// console.log(iter);

// mySet.forEach(value => console.log(value));