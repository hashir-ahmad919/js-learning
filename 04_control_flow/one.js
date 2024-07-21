const temp = 40

// if (temp === 40){
//     console.log("Temperature is less thn 50");
// } else {
//     console.log("Temperature is greater thn 50");
// }

// console.log("Execute");

// const score = 200;

// if(score > 100){
//     const power = "fly";
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


const balance = 1000;

// Not a good practice

//if(balance > 500) console.log("test"), console.log("test2");


// if(balance < 500){
//     console.log("less thnn 500");
// } else if(balance <750){
//     console.log("less thnn 750");
// } else if(balance < 900){
//     console.log("less thnn 900");
// } else {
//     console.log("less   thn 1200");
// }


const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail= true;


if(userLoggedIn && debitCard && 2==3){
    console.log("Allowed to buy a course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("Logged In");
}

