// for of loop

// ["", "", ""]
// [{}, {}, {}]


const arr = [1,2,3,4,5];

for (const val of arr) {
    //console.log(val);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    if(greet == " "){
        //console.log("space detected");
        continue
    }
    //console.log(`Each char is ${greet}`);
}

const map = new Map();
map.set("IN", "India");
map.set("PKR", "Pakistan");
map.set("US", "United States");
map.set("GER", "Germany");


// console.log(map);

for (const [key, value] of map) {
    //console.log(key, ':-', value);
}

const myObject = {
    game1: "batman",
    game2: "spiderman"
}


//for of doesnt work on objects

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
