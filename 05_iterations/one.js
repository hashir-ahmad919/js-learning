 for(let i=0; i<=7; i++){

 }

 for (let index = 0; index <= 10; index++) {
    const element = index;

    if(element ==5){
      //console.log("5 is best number");
    }

    //console.log(element);
    
}

// console.log(element);


for (let i = 1; i <= 10; i++) {
   //console.log(`outer loop ${i}`);
   for (let j = 0; j <= 10; j++) {
      //console.log(`Inner loop: ${j}`);
      //console.log(`${i} * ${j} = ${i*j}`);
   }
}

let myArray = ["flash", "batman", "superman"] 
//console.log(myArray.length);

for (let i = 0; i < myArray.length; i++) {
   const element = myArray[i];
   //console.log(element);
   
}

// break n continue


// break basically breaks the loop
// for (let i = 1; i <= 20; i++) {
//    if (i == 5) {
//       console.log('Detected 5');
//       break;
//    }
//    console.log(`Value of i is ${i}`);
// }




// continue skips one iteration
for (let i = 1; i <= 7; i++) {
   if (i == 5) {
      console.log('Detected 5');
      continue;
   }
   console.log(`Value of i is ${i}`);
}



// practice of break in nested for loop:

// for (let index = 0; index < 5; index++) {
//    console.log(`outer loop ${index}`);
//    for (let j = 0; j < 5; j++) {
//       if(j == 3){
//       console.log(`detected`);
//       break;   
//       }
//       console.log(`inner loop ${j}`);
//    }
// }