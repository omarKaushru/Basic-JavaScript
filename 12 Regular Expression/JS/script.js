////////////////////////////////////////////Introduction to Regular expressions
// Regular Expression
// Pattern Matching Technique
// let re;
// let str;
// re = /hello/; //regular expression has to design between "//"
// re = /Hello/;

// re = /hello/i; //i = case insensitive

// console.log(re);
// console.log(re.source); // printing the regular without "//"

// str = "Hello World";
// str = "Again Hello World";
// str = "zaqHelloxsw world";
// str = "again Hello world Hello"; //still will find out. this time will provide the index of the first "Hello"

// //execution
// //exec() --- returns result in an Array Or NULL

// let result = re.exec(str);

// //test() --- returns true/false

// result = re.test(str);

// //match() --- returns arry or null but it has different sytax compared to exec();
// result = str.match(re);

// // search() --- returns index of the first match or -1

// result = str.search(re);

// //replace() --- returns new string. replaces the first match
// str = "Again Hello World Hello";
// let newStr = str.replace(re, "Omar")

// // console.log(result);
// console.log(newStr);

/////////////////////////////////////////////////////////////Literal and Meta Characters

// let re;
// let str;

// //Literal characters

// re = /hello/;
// re = /hello/i;
// re = /hell/i;
// re = /lo w/i;
// re = /low/i;

// //Mata characters
// //
// re = /^Hello/i; //must start with Hello.
// re = /Hello$/i; //must end with hello
// re = /world$/i;

// re = /^hello$/i; // must start and end with hello
// re = /h.llo/i; //matches any one character
// re = /h*llo/i; // zero or times
// re = /he?a?llo/; // Optional //here 'e', 'a' is optional. 
// re = /hello?/; // escaping
// re = /hello\?/i; //now the question mark will consider as a part of the character // it is called scaping
// str = "Again hello World";
// str = "hello hello";
// str = "hello";
// str = "hallo";
// str = "hillo";
// str = "h llo";
// str = "hllo";
// str = "hillo worlde";
// str = "hello worlde";
// str = "hillo";
// str = "hilo";
// str = "hhfsdhfsuillo";
// str = "hello";
// str = "hllo";
// str = "hallo";
// str = "htllo";
// str = "heallo";
// str = "hello";
// str = "hallo";
// str = "hllo";
// str = "hello";
// str = "hello?";
// console.log(re.exec(str));
// reTest (re,str);
// function reTest (re, str){
// if(re.test(str)){
//     console.log(`'${str}' matches '${re.source}'`);
// }
// else{
//     console.log(`'${str}' doesn't match '${re.source}'`);
// }
// }

//////////////////////////////////////////////////////////////Character Sets, Quantifier and Grouping
// Character Set using Brackets []
// let re;
// let str;
// re = /h[eai]llo/; // Must be one of them inside brackets
// re = /[HA]ello/i;
// re = /[^ha]ello/; // Anything except those inside brackets
// re = /^[ha]ello/; // Must start with h or a
// re = /[A-Z]ello/; // Start with Uper Case
// re = /^[A-Z]/; // First Letter must be upper case
// re = /^[a-z]/;
// re = /[A-Za-z]ello/;
// re = /[0-9]ello/;
// re = /^[0-9]ello/;
// re = /[^0-9]ello/; // Not digit
// re = /^[0-9][0-9][0-9]ello/; // three digits
// re = /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits

// // Braces {} - Quantifier
// re = /el{2}o/; // Must occur exactly 2 times
// re = /el{3}o/; 
// re = /hel{2,5}o/; // Range
// re = /hel{2,}o/; // At least 2 times

// // Parentheses () - Grouping
// re = /^([0-9]){5}/; // /^[0-9][0-9][0-9][0-9][0-9]/ // 5 digits
// re = /^([0-9]xy){4}/;

// // Bangladeshi Phone Number
// // total 11 digits
// re = /^01[0-9]{9}$/;
// re = /^+8801[0-9]{9}$/;

// /////////////////////////////////shorthand character classes
// // Shorthand Character Classes
// re = /w/; // Word Character - alpha numeric or _
// re = /w+/; // One or more
// re = /W/; // Non Word Character //use upper "W"
// re = /W+/; // one or more
// re = /d/; // Digit
// re = /d+/;
// re = /D/; // Non digit
// re = /s/; // Match white space
// re = /S/; // Match non white space
// re = /Hello\b/; // Word Boundary
// re = /bHello\b/;

// str = "2xy3xy7xy8xy";
// str = "01788888888";
// str = "+8801811888889";

// /////////////////////////////////// Assertions
// re = /x(?=yz)/; // Matches x only if x is before y
// re = /x(?!yz)/;


// str = "fsdfxyzfdsf";

// console.log(re.exec(str));
// reTest(re, str);
// function reTest(re, str) {
//     if(re.test(str)) {
//         console.log(`'${str}' matches '${re.source}'`);
//     }
//     else {
//         console.log(`'${str}' doesn't match '${re.source}'`);
//     }
// }


////////////////////////////////////////Some Examples

let re;
let str;

///postal code checking 

re = /^[0-9]{4}$/;
str = "2350";

//// phone number checking

re = /^(\+)?(88)?01[0-9]{9}$/;
str = "01712166516"

///Email Address 
re = /^([a-zA-Z0-9].?)+[^.]@([a-zA-Z0-9].?)+[^.]$/ ;
str = "touchthesky.2099@gmail.com"
console.log(re.test(str));
