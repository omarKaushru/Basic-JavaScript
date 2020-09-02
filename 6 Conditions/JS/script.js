///////////////////// If Statement /////////////////////////////////////

// nothing different from  C/C++
// Synatax are Same 
/*
if (true) {
    console.log("If statement executed!");
  }
  
  if (false) {
    console.log("If statement executed!");
  }
  // use of else
  else {
    console.log("Else Executed!");
  }
  
  var age = prompt();
  
  if ( age >= 50 ) {
      console.log("Old!");
  } else if ( age < 50 && age >= 30 ) {
      console.log("Under 50 but above or equal 30!")
  } // 30 <= age < 50
  else if (age < 30 && age >= 18 ) {
      console.log("Under 30 but above or equal 18");
  } else if ( age < 18 && age > 0) {
      console.log("Under 18!");
  } else {
      console.log("Invalid Input!");
  }/*

//////////////////////////////// Nested If Statement //////////////////// 

// nothing different from  C/C++
// Synatax are Same 

/*
//Find the largest number
var n1 = prompt("First Number: ");
var n2 = prompt("Second Number: ");
var n3 = prompt("Third Number: ");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if (n1 >= n2) {
    if (n1 >= n3) {
        console.log(n1 + " is the largest!");
    }
    else {
        console.log(n3 + " is the largest!");
    }
} else {
    if (n2 >= n3) {
        console.log(n2 + " is the largest!");
    }
    else {
        console.log(n3 + " is the largest!");
    }
}
*/



//////////////////////////////// Switch //////////////////// 

// nothing different from  C/C++
// Synatax are Same 

/*
console.log("Select an option:\na. Option 1 \nb. Option 2 \nc. Option 3 ");

choice = prompt();

var text;

switch (choice) {
    case "a": //if(choice=="a")
        text = "Option 1 Selected!";
        break;
    case "b":
        text = "Option 2 Selected!";
        break;
    case "c":
        text = "Option 3 Selected!";
        break;
    default: // else
        text = "No option is selected!";
        break;
}

console.log(text);
*/


// Exercise and Solution

var number = prompt("What is your number?");
number = parseInt(number);
var grade;

if ( number <= 100 && number >= 80 ) {
    grade = "A+";
} else if ( number < 80 && number >= 70 ) {
    grade = "A";
} else if ( number < 70 && number >= 60 ) {
    grade = "A-";
} else if ( number < 60 && number >= 50 ) {
    grade = "B";
} else if ( number < 50 && number >= 40 ) {
    grade = "C";
} else if ( number < 40 && number >= 33 ) {
    grade = "D";
} else if ( number < 30 && number >= 0 ) {
    grade = "F";
} else {
    grade = "Invalid Input!";
}

console.log("Your Grade: " + grade);


console.log("Select an Option: \n1. Add \n2. Subtract\n3. Mulitply \n4. Divide");
var option = prompt("Choose an operation: ");
var num1 = prompt("Enter First Number: ");
var num2 = prompt("Enter Second Number: ");

var result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if (num1Con || num2Con || optionCon) {
    console.log("Invalid Input!");
} else {
    switch (option) {
        case 1:
            result = num1 + num2;
            break;
        case 2:
            result = num1 - num2;
            break;
        case 3:
            result = num1 * num2;
            break;
        case 4:
            result = num1 / num2;
            break;
        default:
            break;
    }

    if (result == null) 
    {
        console.log("No Result!");
    }
    else {
        console.log("Result: " + result);
    }
}