// ##Primitive Types
// 7 in Number
// String, Number, Boolean, null(empty), undefined, Symbol, BigInt
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');
console.log(id === anotherId);



// DataTypes return 
// String => string
// Number => Number
// Null => object

// ###Reference type/ Non Primitive Type
// Array, Objects, Functions


const heros = ["SuperMan", "BatMan", "SpyderMan"]
let obj1 ={
    name: "Hashir"
}

const myFunction = function(){
    console.log("Hello Hashir")
}

// console.log(typeof anotherId);


// functions => function
// array => object
// object => object




// ++++++++++++++++++++


// stack(Primitivd DT) copy    ,   Heap(Non-Primitive) reference


let myYoutubeName = "HashirAhmadDotCom"
let anotherName = myYoutubeName;
anotherName = "ChaiAurEcom"

console.log(myYoutubeName)
console.log(anotherName)



let userOne = {
    email: "hak47dev@gmail.com",
    name : "Hashir"
}

let userTwo = userOne;
userTwo.email = "hadev@gmail.com";

console.log(userOne.email);
console.log(userTwo.email)