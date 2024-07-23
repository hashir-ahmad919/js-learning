// use for in loops for objects
// use for of loops for arrays



const myObject = {
    js: "JavaScript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}

const prog = ["js", "rb", "py", "cpp"];

for (const key in prog) {
    //console.log(prog[key]);
}


const map = new Map();
map.set("IN", "India");
map.set("PKR", "Pakistan");
map.set("US", "United States");
map.set("GER", "Germany");


// for in doesnt work on map as map isnt iteeratable
for (const key in map) {
    console.log(key);   
}

