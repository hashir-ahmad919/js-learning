function sayMyName(){
    console.log("H");
    console.log("A");
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("R");

}



// IMP
// if we use sayMyName  'Its reference'
// if we use sayMyName 'Its execution'

// console.log(sayMyName);
//sayMyName()

function addTwoNumbers(num1,num2) {
    return num1 + num2;
}


const result = addTwoNumbers(2,3)
// console.log(result);


function loginUserMessage (userName = "sam") {
    if(!userName) {
        console.log("Please enter a userName "); 
        return   
    }
    return `${userName} just logged in`
}



// console.log(loginUserMessage("Hashir "))
// console.log(loginUserMessage("Hashir"))



// Most of the time in E-commerce, 
// we add multiple items into the cart 
// thats how its done on backend
// with the help of rest operator



 function calculateCartPrice(...num1) {
    return num1;
 }
//  console.log(calculateCartPrice(200,3000,100));
 
 // for interview purpose , what 
//  function calculateCartPrice(val1, val2,...num1) {
//     return num1;
//  }
 // what would be the output
 // expected outcome = 3000,100
//  console.log(calculateCartPrice(50,200,3000,100));

 const user = {
    userName: "hak47dev",
    price: 199
 }

 function handleObject (anyobject){
    console.log(`Username is ${anyobject.userName}, and the price is ${anyobject.price}`);
 }

 handleObject(user)

// direct way of using object in a function
//  handleObject({userName: "hask", price: 199})


const myNewArray = [200,300,100,50,500]
function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));

// direct way of using object in a function
// console.log(returnSecondValue([20,10,30,40,50]));


// ++++++++++ Practice ++++++++
function addToCart(...items) {
    return items
}

console.log(addToCart(40,60,80,90));
// addToCart(20,30,405,60)


const myArr = [
    [1,2,3,4,5],
    ["hash", "ahmad", "khan", "yesProg"],
    [1,2,3,4,5]
]

function arrPrac(array) {
    return array[1][2]
}

console.log(arrPrac(myArr));



