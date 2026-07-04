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

## New Concepts : 
//notes

```Notes


```
## Project-5 :
```javascript
/*
//approach1
document.getElementById('img1').onclick=function(){
    alert('You clicked on image 1');

}

*/
/*
//approach2
document.getElementById('img1').addEventListener('click',function(){
  alert('You clicked on image 1');

},true);
*/


/*
//attachEvent()
document.getElementById('img1').attachEvent('onclick',function(){
  alert('You clicked on image 1');
});

*/


//jQuery-on event hota tha


document.getElementById('img1').addEventListener('click',function(e){
  console.log(e);

},false);

/*
######### FOR INTERVIEW TOPICS TO LEARN ##########
1.type of Event 
2.timestamp of Event
3.default prevented
4.target
5.toElement
6.srcElement
7.currTarget
8.client Position => clientX,clientY..
9.screenX ,screenY
10.Alt key
12.ctrl key
13.shift key
14.key code
15.keyboard speed


*/


/*

########### Event Propagation ###########

  ka matlab
   hai jab kisi element par event
  (jaise click) hota hai, to
   browser decide karta hai ki
   event kis order me chalega.

$$$$$$$$$$$$  Iske 3 phases hote hain:$$$$$$$$$$$$$$$$$

1> Capturing Phase (Top → Bottom)
    Capturing me event upar se niche aata hai.
    write true condtion so that event run like this

         ex: 

                 //parent
                    document.getElementById('images').addEventListener('click',function(e){
                          console.log("event 1");

                    },true);
                 //child 
                    document.getElementById('img1').addEventListener('click',function(e){
                         console.log("event 2");

                    },true);

     
2> Target Phase (Jis element par click hua)


3> Bubbling Phase (Bottom → Top)=>
     1. Event Bubbling (Sabse common)

           Event pehle target element
             par chalta hai, phir uske
             parent, phir grandparent,
              aur aise hi upar tak jata hai.

              example:
              //parent
                document.getElementById('images').addEventListener('click',function(e){
                     console.log("event 1");

                              },);
              //child
               document.getElementById('img1').addEventListener('click',function(e){
                     console.log("event 2");

                             },);

*/

//parent
document.getElementById('images').addEventListener('click',function(e){
  console.log("event 1");

},false);
//child
document.getElementById('img1').addEventListener('click',function(e){
  console.log("event 2");
  e.stopPropagation(); 

},false);


//to stop Event Propagation we use 
//e.stopPropagation(): this help to stop Event propagtion

//e,defaultPrevented(): ye true ya false writen krega
//Ye browser ke default behavior ko rok deta hai.
//Page reload nahi hogi.
/*
preventDefault() → Browser ka default action rokna.
defaultPrevented → Check karna ki default action roka gaya hai ya nahi.
stopPropagation() → Event ko parent tak jaane se rokna.
*/

document.getElementById('img2').addEventListener('click',function(e){
  e.preventDefault();
  e.stopPropagation();
  console.log("it is clicked");


},false);


```

## project: 6

############### MOVING TOWARD ADVANCE PROJECTS ################
```javascript

//how to remove any image

//method 1

document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.parentNode);

    let removeIt = e.target.parentNode;
    removeIt.remove();
});

//method-2


document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.parentNode);
    let removeIt=e.target.parentNode;
    removeIt.parentNode.removeChild(removeIt);
});



//best approach

document.querySelector('#images').addEventListener('click', function(e) {
    console.log(e.target.parentNode);
    if(e.target.tagName==='IMG'){ 
    let removeIt=e.target.parentNode;
    removeIt.parentNode.removeChild(removeIt);
    }
});


```


## Theory 

```Notes
1> js is synchronous: mtb ek code execute fir uske bad ek code execute hoga
2> single threaded lanmguage:
ek hi thread pe sab kuch execute hoga
slow performence
js engine always with run time environment
                 ||
                \  /                 
ye sab js ka default js behaviour he

//execution context
execute one line of code at atime


call stack and memory heap

###########Blocking vs Non Blocking code############
1>Blocking Code:
Blocking code wo hota hai jo agla code tab tak execute nahi hone deta jab tak current
 task complete na ho.

Block the flow of program
Example:
console.log("Start");

for (let i = 0; i < 1000000000; i++) {
    // Heavy Task
}

console.log("End");



2>Non blocking code:
Non-blocking code heavy ya time-taking task ko background me bhej deta hai aur baaki code turant execute karta hai.

Example:
Non-blocking code heavy ya time-taking task ko background me bhej deta hai aur baaki code turant execute karta hai.

Start
End
(2 seconds later)
Hello

Flow of program maintain









```

## synchrounous:Synchronous (Line by Line Execution)

Synchronous ka matlab hai:

Ek kaam complete hoga, tabhi doosra kaam shuru hoga.

JavaScript by default synchronous language hai.
ex:
```javascript
console.log("A");
console.log("B");
console.log("C");
```
## asynchronous in js
Step 3: Asynchronous

Ab maan lo tumne online food order kiya.

Tum order place karte ho.

Restaurant bolta hai

"20 minute lagenge."

Kya tum 20 minute mobile ko dekhte rahoge?

Nahi.

Tum Instagram chalaoge.

Friend se baat karoge.

Movie dekhoge.

20 minute baad food aa jayega.

Ye hi asynchronous hai.

ex:
```javascript
console.log("Start");

setTimeout(() => {
    console.log("Hello");
}, 3000);

console.log("End");
```
## Project-7
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<style>
    #Information{
   height: 400px;
   width: 400px;
   border:solid ;
    }
</style>
<body>
    <h1>chai Aur code</h1>
    <button id="stop">Stop</button>
    <div id="Information">

    </div>
</body>
<script>
/*setTimeout:
   inside this function
   we pass two things:
   1>handler: ek call back hai =>EK Function hai
   2>time after which you want to perform task


*/
console.log("he ram how are you");//execute first

//execute at 4rd
setTimeout(function(){
    console.log("heloo");
},6000)

console.log("he abhi kaise");//execute second




//way 2
//3rd
const sayAshutosh=function(){
      console.log("hi this side ashutosh");
}

setTimeout(sayAshutosh,3000);


//changeText

const changeText=function(){
    document.querySelector('h1').innerHTML="this is best js course";
    document.querySelector('#stop').innerHTML="Click To start";
}

const changeMe=setTimeout(changeText,6000);

const info=function(){
    document.querySelector('#Information')
    .innerHTML="This Is chai aur code related content";
}
setTimeout(info,4000);

//clearTimeout: used to remove setTimeOut

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("stopped");
})






</script>

</html>
```


## project -8:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SetInterval</title>
</head>
<body>
    <h1>Chai Aur JS</h1>
    <button id="start">Start</button>
    <button id="stop">stop</button>
    <p id="data"></p>
</body>
<script>
    //const sayDate=function(str){
      //  console.log(str ,"Hitesh", Date.now());

    //}
    //const intervalId=setInterval(sayDate,1000,"hi");
   
   // clearInterval(intervalId);
    //start
    let intervalID;
    document.querySelector('#start')
    .addEventListener('click',
    function(){
    function  start(str){
        console.log(str,Date.now());
      }
     intervalID=setInterval(start,1000,"hi");

})


//stop
document.querySelector('#stop')
.addEventListener('click',function(){
  clearInterval(intervalID);
})
    

</script>

</html>

```

## project 9:
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Random color generate</title>
</head>
<style>
    .startbtn{
        padding:20px;
        background-color: aquamarine;
        border-radius: 15px;
        width: 200px;
        cursor: pointer;
        border: none;
        font-size: 30px;
        font-weight: bold;

    }
    .stopbtn{
             padding:20px;
        background-color: rgb(255, 172, 127);
        border-radius: 15px;
        width: 200px;
        cursor: pointer;
        border: none;
        font-size:30px;
        font-weight: bold;
    }
    h1{
        font-family: cursive;
        font-size: 50px;
        font-weight: bold;
        color:blueviolet
    }
</style>
<body>
    <h1>Random Color Generator</h1>
    <button id="start" class="startbtn">Start</button>
    <button id="stop"class="stopbtn">stop</button>
</body>
<script>
    //generate a random color
    const randomColor=function(){
        const hex="0123456789ABCDEF";
        let color='#';
        for(let i=0;i<6;i++){
            color+=hex[Math.floor(Math.random()*16)];

        }
        return color;
    }

    console.log(randomColor());



    //start changing color
 let intervalId;
    const startChangingColor=function(){
        if(!intervalId){ 
       intervalId= setInterval(ChangeBgColor,1000)
    }
        function ChangeBgColor(){ 
        document.body.style.backgroundColor=randomColor();
        }
    };
 document.querySelector('#start').addEventListener('click',startChangingColor);


//stop changing color
const stopChangingColor=function(){
    clearInterval(intervalId);
    intervalId=null;
}
document.querySelector('#stop').addEventListener('click',stopChangingColor);

</script>
</html>


```