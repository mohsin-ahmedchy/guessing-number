let screctNumber = Math.trunc(Math.random()*10)+1;
let score = 10;
let highScore = 0;

function displayMessage(message){
    document.querySelector('.message').textContent=message;
}

function displayNumber(number){
    document.querySelector('.number').textContent=number;
}

function displayScore(score){
    document.querySelector('.score').textContent=score;
}

document.querySelector('.check').addEventListener('click',()=>{
    let guess = +(document.querySelector('.guess').value);

    if(!guess){
        displayMessage('No number!');
        //document.querySelector('.message').textContent='No number!';    
    }
    else if(guess===screctNumber){
        displayNumber(screctNumber);
        //document.querySelector('.number').textContent=screctNumber;
        displayMessage('Correct number!');
        //document.querySelector('.message').textContent='Correct number!';  
        document.querySelector('body').style.backgroundColor=' #60b347';
        document.querySelector('.number').style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }

    else if(guess!==screctNumber){
        if(score>1){
            score--;
            displayScore(score);
           // document.querySelector('.score').textContent=score; 
            displayMessage(guess>screctNumber?'Too high!':'Too low!');
            //document.querySelector('.message').textContent=(guess>screctNumber)?'Too high!':'Too low!';
        }
        else{
            displayMessage('You lose the game!');
            //document.querySelector('.message').textContent='You lose the game!';
            //document.querySelector('.score').textContent=0; 
            displayScore(0);
        } 
    }
    /*
    else if(guess<screctNumber){
        if(score>1){
            score--;
            document.querySelector('.score').textContent=score; 
            document.querySelector('.message').textContent='Too low!';
        }
        else{
            document.querySelector('.message').textContent='You lose the game!';
            document.querySelector('.score').textContent=0; 
        } }*/
})

document.querySelector('.again').addEventListener('click',function(){
    screctNumber = Math.trunc(Math.random()*10)+1;
    score = 10;
    displayMessage('Start guessing...');
    //document.querySelector('.message').textContent='Start guessing!'; 
    displayScore(score);
    //document.querySelector('.score').textContent=score; 
    document.querySelector('.guess').value='';
    displayNumber('?');
    //document.querySelector('.number').textContent='?';
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').style.width='15rem';
})