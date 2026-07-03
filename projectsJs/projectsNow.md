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





```