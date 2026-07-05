//object


const user={
    username:"ashutosh",
    logincaount:9,
    signedIn:true,

    getUserDetails:function(){
        console.log("Got user Detail from Data Base");
        console.log(`username: ${this.username}`);
        console.log(this);//return window object   
    }


}

console.log(user.username);
console.log(user.logincaount);
console.log(user.getUserDetails());



function User(username,logincount,isLoggedIn){
    this.username=username
    this.logincount=logincount
    this.isLoggedIn=isLoggedIn

    this.greeting=function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne= new User("Ashu",12,true);
console.log(userOne);

