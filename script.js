// GAME FUNCTIONS
//player must guess a number between min and max
//player gets a certain amount of guesses
//notify player of guesses remaing
////Notify the player correct answer if loose
//Let player to play again


//player must guess a number between min and max
let min = 1;
let max = 10;

let showMin = document.querySelector('.min');
showMin.textContent = min;

let showMax = document.querySelector('.max');
showMax.textContent = max;

let answer = Math.floor(Math.random() * (max - min) + min);
// console.log(answer);

//take user input


let submitGuess = document.querySelector('#submit-guess');
submitGuess.addEventListener('click', result);

let guessLimit = 3;
function result(e) {

    guessLimit -= 1;
    let guess = document.getElementById('user-guess');
    let submitGuess = document.querySelector('#submit-guess');
    let guessValue = Number(guess.value);
    let win;


    if (guessValue === answer) {
        //Correct answer
        win = true;
        console.log('win');
        showMessage(win, `${guessValue} is correct.Congratulation..YOU WIN`);
        guess.disabled = true;
        submitGuess.value = 'Play Again';
        submitGuess.className = 'play-again';
    }
    else {
        if (guessLimit) {
            //guess again
            win = false;
            console.log('guess again');
            showMessage(win, `${guessValue} is not correct.Guess again.You have ${guessLimit} more attempt.`);
            guess.value = '';
        }
        else {
            //player loose
            win = false;
            console.log('loose');
            showMessage(win, `Sorry..You Loose.${answer} is correct answer.`)
            guess.disabled = true;
            submitGuess.value = 'Play Again';
            submitGuess.className = 'play-again';
        }
    }

    if (submitGuess.value === 'Play Again') {

        document.querySelector('.play-again').addEventListener('click', function (e) {
            window.location.reload();
        });


    }
}

//show message
function showMessage(win, message) {

    let messageDiv = document.querySelector('.message');
    messageDiv.textContent = message;

    let guess = document.querySelector('#user-guess');
    let submitBtn = document.querySelector('#submit-guess');
    if (win) {
        guess.style.borderColor = 'green';
        messageDiv.style.color = 'green';
    }
    else {
        guess.style.borderColor = 'red';
        messageDiv.style.color = 'red';
    }
    // let msg=document.createElement('p');
    // msg.innerText=message;

    // if(messageDiv.firstChild){
    //     messageDiv.removeChild(messageDiv.childNodes[0]);
    //     messageDiv.appendChild(msg);
    // }
    // else{
    //     messageDiv.appendChild(msg);
    // }

}
