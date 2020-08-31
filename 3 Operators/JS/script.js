// Arithmetic Operators
var number1, number2, result;
number1 = 23;
number2 = 5;
result = number1 + number2;
document.writeln(result);
result = number1 - number2;
document.writeln(result);
result = number1 * number2;
document.writeln(result);
result = number1 / number2;
document.writeln(result);
result = number1 % number2;
document.writeln(result);
result = number2 ** 5; //it means numbe2 to the power 5
document.writeln(result);

number2++;
document.writeln(number2);
number2--;
document.writeln(number2);
//post increment
result = number1++; // it store first the value of number after than increment number1
document.writeln(result);
//pre increment
result = ++number1; // it first increments then store it into result.
document.writeln(result);

// String Operators
var firstName = "Md Omar ";
var lastName = "Kaushru Robel";
var fullName = firstName + lastName; //Strin Concatanation
document.writeln(fullName);

// Comparison, Logical and Conditional Operators
var a = (4 == "4"); //In JS will print true becaue it tooks both of the operand as string.

var b = (4 === "4"); // in this case its will print false. beacue when we use this "=" three times it considers the data type.
// rest of the things like C or C++
// for example: 
var c= (5< 10) ? "Omar": "Kaushru";
document.writeln(c);


// Assignment Operators

//nothing diffrent from other languages like C/C++

// Exercise of Operators

var celcius = prompt("Enter temperatue in celcius");
var F = 9/5*celcius + 32;
alert("Farhenhit: "+F);
console.log("Task Complete!");
