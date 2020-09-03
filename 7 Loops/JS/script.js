/////////// Loops

/////////////////////////// While Loop ///////////////

/*

let i = 1;

while(i<=9)
{
    console.log("Value of i: " +i);
    i++;
}

let i = 10;

do{
    console.log("Value of i: " +i);
    i++;
}while(i<=20);

*/

/////////////////////////////////// for loop  ////////////////////////////
/*
for (var j = 1; j<=5 ; j++) {
    console.log(j);
}

for (var k = 5; k >=1; k-- ) {
    console.log(k);
}
*/

/////////////////////////Break and Continue//////////////////////////////////

/* 
// break 

for(var i=1; i<=5; i++ ) {
    if ( i == 3) {
        break;
    }
    console.log(i);
}



// continue

for (var i =1; i <= 10; i++){
    if(i % 2 == 1) {
        continue;
    }
    console.log(i);
}

*/

//////////////////// String and Array Iteration ///////////////
// String and array
/*
let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];
let len = food.length;

for(var i = 0; i < len; i++) {
    console.log(`Index : ${i}`);
    console.log(food[i]); 
}

//reverse

for(var i = len-1; i =>0; i--) {
    console.log(food[i]); 
}


len = name.length;
for(var i =0; i<len; i++)
{
    console.log(`Index : ${i}`);
    console.log(name[i]); 
}

//reverse

for(var i = len-1; i =>0; i--) {
    console.log(name[i]); 
}
*/

/////////////////////////////// For-in and For-of ////////////////////////////////////

//for-in works with string, array, object
// for of 
// string, array 

let name = "I am learning Javascript!";
let food = ["Cake", "Chocolate", "Ice Cream"];
let person = {
    Name: "Md Omar Kaushru",
    Profession: "Software Enginner",
    Company : "Own",
    Age: 28
};
//it takes the indexes of a varible and keeps them in a value for example "x" 
/* for (var x in name) {
console.log(name[x]);
// document.writeln(name[x]);
} */
/*
//it takes the values of a varible and keeps them in a value for example "x" 
for (var x of name){
    console.log(x);
}
*/
// objects don't have index

/*
for (var x in person){
    console.log(`Property: ${x}
    Value: ${person[x]}`)
} */

// For-of won't work for objects

// Exercise and Solution

var n = prompt("Enter the value of N");
var sum=0;
var series = ""; //creating an empty string 
for(var i=1; i<=n; i++)
{
    sum = sum + i**2;
    series += (i ** 2).toString();
    if (i == n) 
    { 
        continue; 
    }
    series += " + ";
}
// for n =5 it will have such output: 1 + 4 + 9 + 16 + 25 = 55
console.log(`${series} = ${sum}`);
