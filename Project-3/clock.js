let clock=document.querySelector("#bttn");

setInterval(function(){
let date=new Date();
clock.innerHTML=date.toLocaleTimeString();
},1000);