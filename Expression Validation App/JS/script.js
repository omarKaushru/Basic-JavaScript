// Define UI element
let choose= document.querySelector('#chooseBtn');

// define event listener

choose.addEventListener('click',validate);


//define function

class Validation{
    constructor(sNumber){
        this.sNumber = sNumber;
    }
    
    checkExpression(){
    
        let number = this.sNumber;
        let exp;
        if(number == 1)
        {
            exp = prompt("Enter Post Code");
            this.validPostCode(exp);
        }
        else if(number==2){
            exp = prompt("Enter Phone Number");
            this.validPhoneNumber(exp);
        }
        else if(number==3){
            exp = prompt("Enter Email");
            this.validEmail(exp);
        }
    }
    validPostCode(postCode){
        const regex = /^\d{4}$/;
        const found = postCode.match(regex);
        this.displayResult(found,postCode);
    }
    validPhoneNumber(phoneNumber){
        const regex = /^\d{11}$/;
        const found = phoneNumber.match(regex);
        this.displayResult(found,phoneNumber);
    }
    validEmail(Email){
        const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const found = Email.match(regex);
        console.log(found);
        this.displayResult(found,Email);
    }

    displayResult(found,exp){
        this.clearfield();
        if(found!=null)
        {
            let result = document.querySelector('#result');
            let h4 = document.createElement('h4');
            h4.innerHTML = `${exp} is  Valid!`;
            result.appendChild(h4);
        }
        else{
            let result = document.querySelector('#result');
            let h4 = document.createElement('h4');
            h4.innerHTML = `${exp} is not Valid!`;
            result.appendChild(h4);
        }
    }
    clearfield(){
        let result = document.querySelector('#result');
        result.innerHTML = '';
    }
}


function validate(e){
    let select = prompt("Enter 1 or 2 or 3 to choose the menu");
    let EValidation = new Validation(select);
    EValidation.clearfield();
    EValidation.checkExpression();
    e.preventDefault();
}

