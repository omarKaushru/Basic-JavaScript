// Define UI element
let start = document.querySelector('#startBtn');


// define event listener

start.addEventListener('click',play);


class Game{
    constructor(number){
        this.number= number;
    }
    guessNumber(){
        let number = this.number;
        console.log(number);
        let display = document.querySelector('#display');
        let h4 = document.createElement('h4');
        h4.innerHTML = `Choose a number between 1 and 10`;
        display.appendChild(h4);
        let i; let flag = false;
        for(i=1; i<=3; i++)
        {
            let guess = prompt("Enter a number");
            if(number == guess)
            {
                alert("You Win!")
                flag = true;
                break;
            }
            else if(guess>number){
                alert(`Correct answer is smaller! \n You have ${3-i} chances left`);
            }
            else{
                // alert("Correct answer is greater!");
                alert(`Correct answer is greater! \n You have ${3-i} chances left`);
            }

        }
        if(!flag){
            display = document.querySelector('#display');
             h4 = document.createElement('h4');
            h4.innerHTML = `You Lose! The correct answer was ${number}! Click the Play Button to Restart again.`;
            display.appendChild(h4);
            // alert(`You Lose! \nThe correct answer was ${number}!`);
        }
        
    }
    static clear(){
        let display = document.querySelector('#display');
        display.innerHTML= '';
    }
}


//define function

function play(e){
    let number = getRandomIntInclusive(1, 10);
    Game.clear()
    let game = new Game(number);
    game.guessNumber();
    e.preventDefault();
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}