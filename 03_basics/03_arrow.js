//This keyword in JS
// if you wan to access the current context means to access variable within the scope like in fucntion
// this is referred to current context


const user = {
    userName: "Hashir",
    price: 999,


    welcomeMessage: function(params) {
        console.log(`${this.userName}, welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.userName = "Sam"
// user.welcomeMessage()


// +++++++++++++++   this  ++++++++
// in node environment the current context is always empty. 
// this refers to empty object

// but if you write the same line of code in browser it would return Window
// bex browser's global objecct is Windwo object i-e clicking, DOM etc

console.log(this);



//  global environment for node you get to hv global, performance etc 
// function chai() {
//     let username = "Hashir"
//     console.log(this);


//     // if we do it like this it would give us undefined output bex its not the right way we can usee it only 
//     // within the object
//     console.log(this.username);
// }
// chai()


// const chai = function() {
//     let username = "Hashir"
//     console.log(this.userName);
// }


const chai = () => {
    let username = "Hashir"
    // console.log(this.userName);
}

//chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }


// implicit return
// const addTwo = (num1, num2) =>  num1 + num2


// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({userName: "Hashir"})



console.log(addTwo(2,5));