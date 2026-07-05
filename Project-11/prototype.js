//let myName="hitesh"
//console.log(myName.trim().length);

//console.log(myName.trueLength);
let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",


    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh= function(){
    console.log(`hitesh is present in all objects`);

}

Array.prototype.heyHitesh= function(){
    console.log("hitesh say hello");
}
//heroPower.hitesh();
//myHeros.hitesh();
//myHeros.heyHitesh();//run
//heroPower.heyHitesh()//error  bottom->top->power not share



//Inheritance

const User= {
    name:"chai",
    email:"chai@google,com"
}

const Teacher= {
    makeVideo:false
}

const TeachingSupport= {
    isAvailable:false
}

const TASupport= {
    makeAssignment:"js assignment ",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__=User

//modern syntax 

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername= "chaiAurCode      "

String.prototype.trueLength= function(){
    console.log(` ${this}`);
   // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);

}

anotherUsername.trueLength();
"hitesh".trueLength()
"iceTea".trueLength();