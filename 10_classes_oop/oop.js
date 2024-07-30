// object literal
const user = {
    username: "hak47",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got use details from database");
        console.log(`username: ${this.username}`);
    }

 }

//  console.log(user.username);
//  console.log(user.getUserDetails());
// console.log(this);



// new keyword is basically construction function
// const promiseOne = new Promise()
// const date = new Date()


function User(userName, loginCount, isLoggedIn) {
    //value/variable    what you're passing
    this.userName  = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function() {
        console.log(`Welcome ${this.userName}`);
    }

    return this
}


// new keyword gives you a new instance eacch time
// when mentioning new an empty object is created known 
// as instance
//1st object is created 
//2nd constructor ftn is called through new keyword
//3rd through this keyword all the values are injected
//4th you receive the result
const userOne = new User("hak474", 4, true);
const userTwo = new User("shah74", 12, false);
console.log(userOne);
console.log(userTwo);

