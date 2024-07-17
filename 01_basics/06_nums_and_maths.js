const score = 400;

const balance = new Number(100)
//  

//mostly used in e-commerce web apps
console.log(balance.toFixed(2))
//expected output: 100.00


// toPrecision
const otherNumber = 123.8966
// console.log(otherNumber.toPrecision(4))

const hundreds = 10000000;
// console.log(hundreds.toLocaleString())
// console.log(hundreds.toLocaleString('en-PK'))
// console.log(hundreds.toLocaleString('en-IN'))


//+++++++++++++++++++++++++  Maths +++++++++++++

// console.log(Math);
// console.log(Math.abs(-3));
// console.log(Math.round(4.4));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(6.7));
// console.log(Math.pow(2,3));
// console.log(Math.min(0,-1,2,3,4,5,6,7,));

// random imp
console.log(Math.random);
console.log(Math.floor(Math.random() * 10 )+ 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1) )+ min);