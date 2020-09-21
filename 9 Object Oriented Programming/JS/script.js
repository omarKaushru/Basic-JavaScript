// class Person{
//     constructor(fName, lName, DOB)
//     {
//         this.firstName = fName;
//         this.lastName = lName;
//         this.dateOfBirth = DOB;
//     }
//     fullName()
//     {
//         return (this.firstName +" "+ this.lastName);
//     }
//     calculateAge() {
//         let birthday = new Date(this.dateOfBirth);
//         let diff = Date.now() - birthday.getTime();
//         let ageDate = new Date(diff);
//         return Math.abs(ageDate.getUTCFullYear() - 1970);
//     }

// }

// let person1 = new Person("Omar", "Kaushru","01-01-2000");
// let person2 = new Person("Umar Ibn", "Hasan", "01-10-1992");
// let person3 = new Person("Omar", "Faruk", "01-01-1982");

// console.log(person1.fullName());
// console.log(person2.fullName());
// console.log(person3.fullName());

// console.log(person1.calculateAge());
// console.log(person2.calculateAge());
// console.log(person3.calculateAge());

                            //////// Sub-Classes///////
// class Person{
//     constructor (fName, lName){
//         this.firstName = fName;
//         this.lastName = lName;
//     }
//     grettings()
//     {
//         return `Hello ${this.firstName} ${this.lastName}!`;
//     }
// }

// // adding Sub class 
// class Customer extends Person{
//     constructor (fName, lName, phone, id)
//     {
//         super(fName, lName);
//         this.phoneNumber = phone;
//         this.customerId = id;
//     }

//     getFullName()
//     {
//         return `${this.firstName} ${this.lastName}`;
//     }
// }

// let customer1 = new Customer("Omar", "Kaushru", "01712121212", "990000")
// console.log(customer1.grettings());
// console.log(customer1.getFullName());

//                                                                              Static Function
// Static Function

class Person {
    constructor(fname, lname) {
        this.firstname = fname;
        this.lastname = lname;
    }

    greeting() {
        console.log(`Hello ${this.firstname} ${this.lastname}!`);
    }

    // static
    static test() {
        console.log("I am staic!");
    }
}

let person1 = new Person("Md Omar", "Kaushru");

console.log(person1.greeting());
console.log(Person.test()); //we can not call static funciotn by an object its(the caller) must to be a class