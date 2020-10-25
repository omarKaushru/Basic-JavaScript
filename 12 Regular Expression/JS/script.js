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
