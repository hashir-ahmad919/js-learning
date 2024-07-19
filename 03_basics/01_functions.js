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
console.log(result);


function loginUserMessage (userName = "sam") {
    if(!userName) {
        console.log("Please enter a userName "); 
        return   
    }
    return `${userName} just logged in`
}



// console.log(loginUserMessage("Hashir "))
console.log(loginUserMessage("Hashir"))