# projects related to DOM

## project link
 [https://www.google.com]



 #solution code
## project 1

```javascript
//code

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);

    if (e.target.id === "grey") {
      body.style.backgroundColor = "grey";
    } else if (e.target.id === "blue") {
      body.style.backgroundColor = "blue";
    } else if (e.target.id === "white") {
      body.style.backgroundColor = "white";
    } else if (e.target.id === "yellow") {
      body.style.backgroundColor = "yellow";
    }
    else if(e.target.id==='purple'){
        body.style.backgroundColor="purple";
    }
  });
});
    

```

## project 2


//code

```javascript
let form=document.querySelector("form");
form.addEventListener("submit",function(e){
    e.preventDefault();
     const height=document.querySelector("#height").value;
     const weight=document.querySelector("#weight").value;
     const result=document.querySelector("#results");

     if(height==='' || height<=0 || isNaN(height)){
        result.innerHTML=`please enter valid height ${height}`;

     }else if(weight===''|| weight<=0 || isNaN(weight)){
        result.innerHTML=`please enter valid weight ${weight}`;

     }else{
        const bmi=(weight/(height*height)*10000).toFixed(2);
        //result
        result.innerHTML=`<span>Your bmi is: ${bmi}</span>`;

     }


});

```
## project-3 

//code

```javascript

let clock=document.querySelector("#bttn");

setInterval(function(){
let date=new Date();
clock.innerHTML=date.toLocaleTimeString();
},1000);


```

## Project-4

## adavance project

```javascript


  //random number generator
const randomNumber=parseInt(Math.random()*100+1);
//submit button
const submit=document.querySelector('#subt');
//user input
const userInput=document.querySelector('#guessField');
//Previous Guesses: No of time we guess
const guessSlot=document.querySelector('.guesses');
//Remaining Guesses: No of time we have left
const remaining=document.querySelector('.lastResult');
//Low or High: if the guess is low or high
const lowOrHi=document.querySelector('.lowOrHi');
//Start Over: to start the game over
const startOver=document.querySelector('.resultParas');
  
//Create a paragraph element to display messages
const p=document.createElement('p');


//Variable to keep track of the number of guesses
let prevGuess=[];
//Variable to keep track of the number of guesses
let numGuess=1;
//playGame variable to keep track of the game state
let playGame=true;

/*first of all we check you are 
 available to play the game or not
*/
if(playGame){
    //Add an event listener to the submit button
    submit.addEventListener('click',function(e){
        //Prevent the default form submission behavior taki server pe na chale
        e.preventDefault();

          //Get the user's guess from the input field
            const guess=parseInt(userInput.value);
            //Validate the guess
            console.log(guess);
            validateGuess(guess);
    });


}


function validateGuess(guess){
    //Check if the guess is a number between 1 and 100
    if(isNaN(guess) ){
        alert('Please enter a valid number between 1 and 100');
    }else if(guess<1){
        alert('Please enter a number greater than 0');
    }else if(guess>100){
        alert('Please enter a number less than 100');
    }else{
        //If the guess is valid, check if it is correct
        prevGuess.push(guess);
        if(numGuess===11){
            displayGuesses(guess);//Display the previous guesses to the user
            displayMessage(`Game Over! The number was ${randomNumber}`);//Display the message to the user
            endGame();//End the game
        }else{
            displayGuesses(guess);//Display the previous guesses to the user
            checkGuess(guess);//Check if the guess is correct, too high, or too low
        }
    }

}

function checkGuess(guess){
    //Check if the guess is correct, too high, or too low
    if(guess===randomNumber){
        displayMessage(`you guess right`);
        endGame(); 
   }else if(guess<randomNumber){
        displayMessage(`Your guess is too low`);
   }else if(guess>randomNumber){
         displayMessage(`Your guess is too high`);

   }

}
 

function displayGuesses(guess){
    //Display the previous guesses to the user
    //algorithm to display the previous guesses
    /*
    algorithm:
    1. Create a variable to store the previous guesses
    2. Loop through the prevGuess array and add each guess to the variable
    3. Display the variable in the guessSlot element
    4. Increment the numGuess variable
    5. Update the remaining guesses in the remaining element    
    */
   userInput.value='';
   guessSlot.innerHTML+=` ${guess}   `;
   numGuess++;
   remaining.innerHTML=`Remaining Guesses: ${11-numGuess}`;

}


function displayMessage(message){
    //DOM work come in this function to display messages to the user
    //display the message in the p element
    lowOrHi.innerHTML=`<h1>${message}</h1>`;
}

function endGame(){
    //Disable the input field and submit button
    //Create a new button to start the game over
    //Add an event listener to the new button to reset the game
    userInput.value='';
    userInput.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newgame">Start New Game?</h2>`;
    startOver.appendChild(p);
    playGame=false;
    startGame();
}

function startGame(){
    //Reset the game state and variables
    //Clear the previous guesses and messages
    //Enable the input field and submit button
    //Remove the start over button if it exists
    const newGameButton=document.querySelector('#newgame');
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random()*100+1);
        prevGuess=[];
        numGuess=1;
        guessSlot.innerHTML='';
        remaining.innerHTML=`Remaining Guesses: ${11-numGuess}`;
        lowOrHi.innerHTML='';
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    });

}










```