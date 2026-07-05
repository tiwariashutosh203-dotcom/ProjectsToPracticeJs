function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power=2;


console.log(multiplyBy5(5));//25
console.log(multiplyBy5.power);//2
console.log(multiplyBy5.prototype);//{}

function createUser(username,score){
    this.username=username
    this.score=score
}

//own functionality not ..
createUser.prototype.increment=function(){
    this.score++//ab jisne boola he usi ka km hoga
}

createUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const chai=new createUser("chai",23)
const tea= new createUser("tea",34) //new keyword solve error
chai.printMe();

/* 
 Here 's what Happen Behind The scenes when new keyword used :

 A new object is created : The new keyword initiates 
 the creation of nre js object
A prototype is linked : The newly Created object gets linked 
tto the prototype of the constructor function .
this means it has access to the properties and methods 
defined one the constructor prototype .

the constructor is called :  the constructor function is 
called with the specified arguments and this is bound to the 
newly created object.
if no explicit return value is specified from the constructor 
, js assume this,the newly created object , to be 
the intended return value.

the new object is returned : after the constructor function
has been called if it doesn't return a non -primitive 
value ( object , array ,function, etc.), the newly created 
object is returned . 

*/