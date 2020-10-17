////////////////////////////////////////////Introduction to Regular expressions
// Regular Expression
// Pattern Matching Technique
let re;
let str;
re = /hello/; //regular expression has to design between "//"
re = /Hello/;

re = /hello/i; //i = case insensitive

console.log(re);
console.log(re.source); // printing the regular without "//"

str = "Hello World";
str = "Again Hello World";
str = "zaqHelloxsw world";
str = "again Hello world Hello"; //still will find out. this time will provide the index of the first "Hello"

//execution
//exec() --- returns result in an Array Or NULL

let result = re.exec(str);

//test() --- returns true/false

result = re.test(str);

//match() --- returns arry or null but it has different sytax compared to exec();
result = str.match(re);

// search() --- returns index of the first match or -1

result = str.search(re);

//replace() --- returns new string. replaces the first match
str = "Again Hello World Hello";
let newStr = str.replace(re, "Omar")

// console.log(result);
console.log(newStr);