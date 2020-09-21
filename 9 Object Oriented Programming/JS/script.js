class Person{
    constructor(fName, lName, DOB)
    {
        this.firstName = fName;
        this.lastName = lName;
        this.dateOfBirth = DOB;
    }
    fullName()
    {
        return (this.firstName +" "+ this.lastName);
    }
    calculateAge() {
        let birthday = new Date(this.dateOfBirth);
        let diff = Date.now() - birthday.getTime();
        let ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

}

let person1 = new Person("Omar", "Kaushru","01-01-2000");
let person2 = new Person("Umar Ibn", "Hasan", "01-10-1992");
let person3 = new Person("Omar", "Faruk", "01-01-1982");

console.log(person1.fullName());
console.log(person2.fullName());
console.log(person3.fullName());

console.log(person1.calculateAge());
console.log(person2.calculateAge());
console.log(person3.calculateAge());