// Different Types of Data --> Numbers, String, Booleans, Arrays, Objects
// More types of data -->Undefiend, empty value, null, NaN(means not a number)
///////////////// Number    /////////////
var x;
x = 3.141;
x = 34;
x = 123e5; // 123 * 10 ** 5
x = 123e-5; // 123 * 10 ** -5

// Numbers takes 64 bits

// + can be used for both addition and conatenation
"34" + "45" // will be string
34 + "45" // will be string
"34" + 45 // will be string
"The result is " + 34 + 45
34 + 45 + "is the result"
34 + 45 + "13"

//Numeric Strings
"25" - "5"
"25" / "5" // result 10
"25" * "5"
"25" % "5"
"25" + "5" //exception

//Infinity
var num = Infinity;
25 / 0 // will get Infinity


//Hexa Decimal Numbers
var x = 0xBB
var y;
y = x.toString() // Returns number as string
// document.writeln(y);
y = x.toString(16); //converts number accoording to base 16 menas hexa
// document.writeln(y);
y = x.toString(2); //converts number accoording to base 2 means binary
// document.writeln(y);

y = x.toString(3); //converts number accoording to base 3 tough there is no numbers with base 3
// document.writeln(y);

var x = 3.1416;
y = x.toPrecision();
// document.writeln(y);
y = x.toPrecision(2); //3.1 
// document.writeln(y);
y = x.toPrecision(4);
// document.writeln(y);
y = x.toPrecision(6);
// document.writeln(y);
var x = "123"
parseInt(x);  ///convert string into integer
x = "123.45"
parseFloat(x); ///Convert string into float

var x = 3.1416;
var y = parseFloat(x.toString());

isNaN(x); //it detects a variable either  number or not. return true or false

// resources for number 
//https://www.w3schools.com/jsref/jsref_obj_number.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number




////////////// Strings ///////////////
"Hello World"
'Hello World'
"Hello  World"
"Hello \n World" // prints in new line
'Hello \t World' //prints larger space like tabw 

'hello \\ world' //if we wants to print back slash we must to back slash gardually. so that one will support another
//Concatenation
"Hello" + "World"


var x = "Hello World";

//Length of String
x.length; //It is a property
var y = "Md Omar Kausru".length; //this variable will store the length of the string.
//Indexing
x = "Hello World";
// document.writeln(x[0]);
// document.writeln(x[3]);
// document.writeln(x.toUpperCase());
// document.writeln(x.toLowerCase());
//
x = "          Hello                      World     ";
z = x.trim(); //remove unnecessary spaces
// document.writeln(z);
y = z.slice(3, 7); //psitive value sliced string from left to rigt.
// document.writeln(y);
y = z.slice(-5, -1); //negative value sliced string from right to left.
// document.writeln(y);
//sub string 
y = z.substr(2, 5);
// document.writeln(y);

//replace
y = z.replace("ll", "xx");
// document.writeln(y);
// concatanate

y = x.concat("343sdd", "zaqxswcde", y, z);
// document.writeln(y);
//Immutable
x[1]
x[1] = "5"
x[1]


// return a new string, doesn't change x
//These are methods
x.slice(1, 5);
x.slice(-6, -1);
x.substr(3, 2); // 2nd parameter means the length
x.replace("Hello", "World");
x.toUpperCase();
x.toLowerCase();
x.concat("1", "2");
x.trim();


//Resources
//https://www.w3schools.com/jsref/jsref_obj_string.asp
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

/////////////// Booleans ///////////////////

10 > 9
    - 1 > 2
"Hello" == "Hello"
var x = "Hello";
var y = Boolean(x); //returns true because x contains a value.

x = null
y = Boolean(x);

x = 10 / "H";
Boolean(x); //return false beacuse it is well defiened

var myVar;
Boolean(x);

//Resources
//https://www.w3schools.com/jsref/jsref_obj_boolean.asp



/////////////// Arrays Part 1 ///////////////////

var countries = ["Bnagladesh", "Pakistan", "Nepal", "Canada", "USA"];
// document.writeln(countries); //printing whole array
// document.writeln(countries[3]); //indexing begains from 0
// document.writeln(countries.length);
countries.push("Argentina");//pushes elemnts at the end of the array
// document.writeln(countries); //printing whole array
countries.pop(); //deletes an element from the end of the array.
// document.writeln(countries); //printing whole array
countries.push("Japan", "Korea");
// document.writeln(countries); //printing whole array
countries.shift();//deletes elements from the begining of the array
// document.writeln(countries); //printing whole array
countries.unshift("Bnagladesh");///ads elements in the begining of the array
// document.writeln(countries); //printing whole array


/////////////// Arrays Part 2 ///////////////////


//Empty array
var numbers;
numbers = []
numbers.push(1)
// document.writeln(numbers);
numbers.push(78)
// document.writeln(numbers);
numbers.push("One") //mixed data type but it's a bad practice
// document.writeln(numbers);
//split converted a string into arry
x = "Bangladesh"
var y = x.split("") //empty
//document.writeln(y); ///output B,a,n,g,l,a,d,e,s,h b
x = "Bangladesh is a country"
y = x.split("") //output: B,a,n,g,l,a,d,e,s,h, ,i,s, ,a, ,c,o,u,n,t,r,y 
//document.writeln(y); 
y = x.split("n") // output: Ba,gladesh is a cou,try // it conversts it into array only where it's found 'n'
//document.writeln(y); 
z = x.split(" ") // output: a,gladesh is a cou,try
//document.writeln(y);
x = "Bangladesh, China, Finland"
y = x.split(",") //it's splited based on ',' output: Bangladesh, China, Finland 
// document.writeln(y); 
var z= y;
z.toString()// converted arry into string
//document.writeln(z); 
y = z.join("/") //join let us to decide what to use in ther array to separate 
// output: Bangladesh/ China/ Finland 
//document.writeln(y);
x.concat(z, y); //output: Bangladesh, China, Finland 
//document.writeln(x);
countries.sort() //output: Bnagladesh,Canada,Japan,Korea,Nepal,Pakistan,USA //sorted
//document.writeln(countries)

countries.reverse() //output: USA,Pakistan,Nepal,Korea,Japan,Canada,Bnagladesh //reversed
// document.writeln(countries)

//Reaources
//https://www.w3schools.com/jsref/jsref_obj_array.asp



///////////////// Objects //////////////////

student = {name:"Omar", age:25, hometown:"Cumilla"};
// document.writeln(student.name);
// document.writeln(student.age);
// document.writeln(student.hometown);
// document.writeln(student["name"]);
student.name
student["Occupation"] = "Software Enginner" //adding new properties to the object.

// student["name"] = "Rahim"; 
//  document.writeln(student.Occupation);

delete student.name
subject = {}; //defining empty object
subject.Name = "CSE"; ///adding properties to the empty object
// document.writeln(subject.Name); 

///////////////////// More on Arrays and Objects //////////////////////////
arr = [1, 2, 33, 34, 50];

arr = [1, 2, 33,["aa", "bb", "cs"], 34, 50]; //taking an Array as a element  into another array
arr[3]; // accessing the inserted array
arr[3][1]; //accssing the second element of the inserted array which is "bb"

arr = [1, 2, 33,["aa", "bb",["xxx", "yyy","zzz"], "cs"], 34, 50]; //arrays within array
arr[3][2][0]; // accessing the aary element inside  of iserted array which is "xxx"
//placing object within array
arr = [1, 2, 33,["aa", "bb", "cs"],{food1:"Orange",food2: "Banana"}, 34, 50];  
arr[4]["food1"]//accesing the first properties of the object
arr[4].food1;//accesing the first properties of the object
// array can be also defiened within properties.
//definig an arry within an object properties
var obj ={prop1: "vaue1", prop2: "value2", prop3: ["a","b","c","d","e"]};
obj.prop3[1]; ///accessing 2nd elements if the array within prop3 

////////////////////////// Undefined, Empty values, null, NaN ////////////////

var a; //it itself undifined
a = null; //it's a null

var b = ""; //empty valu. rules: use double cotaion without space.
var c = "abc"/10; //its a NaN type means Not a Number.

/////////////////// Primitive and Reference Types  /////////////////
// Primitive types 
// numbers, string, Boolean
// primtive types deals with value
  a = 5;
  b = a;

 a = 45; // but the value of b won't change
 console.log(a); 

// Reference Types 
// Array, Object 
///deals with address;

let Numbers = [1, 2 , 3, 4];
let newNumbers = Numbers; /// in this case both array has same address
console.log(newNumbers);

Numbers[3] = 7;
console.log(newNumbers); //value changed!
