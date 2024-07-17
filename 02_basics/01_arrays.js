// array


// const myArr = [1,2,3,4,5]
// console.log(myArr[2]);


// Array methods
// myArr.push(6)

// myArr.pop()
// myArr.push()

myArr.unshift(0)
// console.log(myArr);


myArr.shift()
// console.log(myArr);




// unshift => add in start 
// shift => remove from start
// push => add at the end
// pop => remove from the end


// console.log(myArr.includes(9));

// indexOf will return -1 if the value doesnt exists
// console.log(myArr.indexOf(9));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr)





// splice, slice 
const myArr = [1,2,3,4,5]


console.log("A",  myArr);


// it doesnt mutate original array it returns a chunk of what we want   
const myn1 = myArr.slice(1,3)
console.log("B",  myArr);
console.log(myn1);



// It mutates original array and return the deleted items
const myn2 = myArr.splice(1,3)
console.log("C",  myArr);
console.log(myn2);




