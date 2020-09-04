
// //////////////////// What is function///////////////////

// /*
// //Execution of Function
// dosomethihg();



// // Declaration of function

// function dosomethihg()
// {
//     console.log("Md Omar");
//     console.log("01712-166516");
// }
// */
// //////////////////// Parameters and Return Value ///////////////////
// /*
// function add (a, b)
// {
//     return a+b;
// }

// function multiplication(a, b)
// {
//     return a*b;
// }

// function subtraction(a, b)
// {
//     return a-b;
// }

// function division (a, b)
// {
//     return a/b;
// }
// function remainder(a,b)
// {
//     return a%b;
// }

// var x = parseInt(prompt("Enter 1st number"));
// var y = parseInt(prompt("Enter 2nd number"));

// var z = add(x,y);
// console.log("Addition: "+ z);
// console.log("Substraction: "+subtraction(x,y));
// console.log("Multiplication: "+ multiplication(x,y));
// console.log("Division: "+ division(x,y));
// console.log("Remainder: "+ remainder(x,y));
// */

// //////////////////Function Expression and Arrow Function (ES6)////////////////

// /*
// function  usualWay()
// {
//     console.log("Usual Way");
// }

// // Function Expression

// var fExpression = function()
// {
//     console.log("Thi is Function expression.");
// }

// // Arrow Function
// //in an arrow function if there are only one parememter we can ignore first braket as follow
// // var arrowFunction = parameter1 => {
// //     console.log("This is arrow function" + parameter1);
// // }


// var arrowFunction = () => {
//     console.log("This is arrow function");
// }

// usualWay();
// fExpression();
// arrowFunction();


// */


// ////////////////////// Function in Array Iteration /////////////////////

// /// Array Iteration using forEach

// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
// var numbers = [1, 32, 31, 2];
// /////////parameter format to follow while set the parameter
// /// firt parametr : Items of the array
// /// second parameter: Index of the array
// /// third parameter: whole array
// foods.forEach(function(aItem,aIndex, wholeArray)
// {
//     console.log(aIndex +" "+ aItem );
//    // console.log(wholeArray);
// })


// let anotherStyle = function(aItem,aIndex, wholeArray)
// {
//    // console.log(aIndex +" "+ aItem );
//     console.log(wholeArray);
// }

// foods.forEach(anotherStyle);


// ///////////// Array Iteration using maping ////////////

// //while using mapping we must return from that function 

// console.log("this Array Iteration using maping");
// var foods = ["Cake", "Ice Cream", "Chocolates", "Bread"];
// var numbers = [1, 32, 31, 2];


// function addSomething(item)
// {
//     return `${item} is a food`;
// }

// let newGenaratedArray = foods.map(addSomething); ///mapping foods array

// console.log(newGenaratedArray);

// function numberSquare(item) 
// {
//     return item**2;
// }

// let square = numbers.map(numberSquare); //maping numbers array
// console.log(square);


// ////////////////////Object Methods//////////

// person = {
//     firstName: "Md Omar",
//     lastName: "Kaushru Robel",
//     dob:  1-1-2000,

//     fullName: function(){ ///method
//         return (this.firstName +" "+this.lastName);
//     }

// }

// console.log(person.firstName);

// console.log(person.fullName());

// var str = person.fullName();

// console.log(str.length);
// console.log(str.split());




// //////// Math and Date Objects //////
// // Math Object
// let val;

// val = Math.PI;  ///3.141592653589793

// val = Math.E;  ///output 2.718281828459045

// val = Math.round(23.5); //24
// // console.log (val); 
// val = Math.ceil(3.2); // 4
// // console.log (val); 
// val = Math.floor(3.9); //3
// // console.log (val); 
// val = Math.sqrt(81);
// val = Math.abs(-56);
// val = Math.pow(2, 8);
// val = Math.min(2,3,1,0,-8);
// val = Math.max(-1,2,4,5);
// val = Math.random();  //0.831289705901479
// // console.log (val); 
// val = Math.floor(Math.random() * 30 + 1); //genarating random nuber betwwen 0 and 30
// console.log (val); 


// //////////date object
// // Date Object
// let val;
// let today = new Date();

// val = today;
// val = today.toString();

// let birthday = new Date('11-2-1995 8:25:00');
// birthday = new Date('November 2 1995');
// birthday = new Date('11/2/1995');
// val = birthday;
// val = today.getMonth(); // Start from 0
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); //timestamp
// // timestamp -> amount of time passed since Jan 1st 1970

// birthday.setMonth(0);
// birthday.setDate(12);
// birthday.setFullYear(1996);
// birthday.setHours(3);

// console.log(val);
// console.log(birthday)



// ////////////////////// Global and Local Scope with let and const (ES6) ////////////////

// if we use var to declare a variable we can declare that variable as many times we want in that program by using same name.
// but if we use let to declare a variable we can't use the same varibale name in that program.
// if use const to declare a variable we can't change that value.
// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;


// console.log(`Global Scope: `, a, b, c);

// function test() {
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log(`Functions Scope: `, a, b ,c);
// }

// test();

// console.log(`Global Scope: `, a, b, c);
// // in if scope if we use var to declare a variable it will change globally but by using let, const won't change
// if (true) {
//     var a = 7;
//     let b = 8;
//     const c = 9;
//     console.log(`If Scope: ` , a, b, c); 
// }

// console.log(`Global Scope: `, a, b, c); // here a becomes 7 instead of 1

// // in for scope if we use var to declare a variable it will change globally but by using let, const won't change
// for (let a = 0; a <10; a ++) {
//     console.log(`Loop Scope: `, a);
// }


// console.log(`Global Scope: `, a, b, c); //here a becomes 10
