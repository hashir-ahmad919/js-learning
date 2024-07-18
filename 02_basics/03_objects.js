// Objects:
// Singleton : Object.create  // created useing constructor 


// Object Literals:

const mySym = Symbol("key1")

const JsUser = {
    name: "Hashir",
    "full name": "Hashir Ahmad Khan",
    [mySym]: "mykey",
    age: 24,
    location: "Lahore",
    email: "hashir@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}


// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);


JsUser.email = "hashir@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "hashir@microsoft.com"
// console.log(JsUser);


JsUser.greeting = function() {
    console.log(`Hello JS users`);
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS users, ${this["full name"]}`);
}

console.log(JsUser.greetingTwo());
console.log(JsUser.greeting());
