//error handaling
console.log("Before Error!");

try {
    //test();
    //undefined.test();
} catch(err) {
    //console.log(err);
    console.log(err.message);
    console.log(err.name);
} finally {
    console.log("I am inside finally!"); /// finally block will excute the code weather there are error or not 
}

console.log("After Error!");


// Error Handling

let a = 2;

try {
    if(a>15) throw "Too Big";
    else if (a<5) throw "Too small";
} catch(err) {
    console.log(err);
}

///https://www.w3schools.com/jsref/jsref_obj_error.asp