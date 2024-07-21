const userEmail = []

if(userEmail){
    console.log("Got a user Email");
} else {
    console.log("Dont have a user");
}


// falsy values:
//false, 0, -0, BigInt 0n, "", null, undefined, NaN

// remaining truthy values for example:
// "0", 'false', " ", [], {}, function(){} //empty function

// if(userEmail.length === 0){
//     console.log("Array is empty");
// }



const emptyObj = {}

if(Object.keys(emptyObj).length ===0){
    console.log("object is empty");
}


//imp
// the following will return true:
// false == 0,  false == '' , 0 == '' 


// Nullish coalescing Operator(??): null undefined
// mostly used whne calling from database
// if theres a value it would be returned via function or return null, undefined
// if there are ttwo fucntions it would return the value of 1st one i-e last e.g

let val1;

// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20    

console.log(val1);




// +++++++++ ternary  operator
//condition ? true : false

const iceTeaPrice = 100;
iceTeaPrice <= 80 ? console.log("Less thn 80") : console.log("more thn 80"); ;

