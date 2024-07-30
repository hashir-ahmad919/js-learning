// let myName = "Hitesh    "
// let channel = "chai    "

// console.log(myName.trim().length);
// // console.log(myName.trueLength();



let myHeros = ['thor', 'spiderman']

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        // console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.hashir = function() {
    // console.log(`Hashir is everywhere`);
}

Array.prototype.heyHashir = function() {
    // console.log(`Hashir says hello`);
}

// heroPower.hashir()
myHeros.hashir()
myHeros.heyHashir()
// heroPower.heyHashir()




// inheritance 


const user = {
    username: "hak",
    email: "hashir@google.com"
}


const teacher = {
    makeVidepo: true,
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "Js Assignment",
    fullTime: true,
    __proto__:  teachingSupport 
}

// teacher.__proto__ = User


// modern syntax

Object.setPrototypeOf(teachingSupport, teacher)

let anotherUsername = "Hak47    "

String.prototype.trueLength = function() {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}

anotherUsername.trueLength()

"hashir".trueLength()
"hk".trueLength()