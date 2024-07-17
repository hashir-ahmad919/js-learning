const marvelHeros = ["Thor", "Ironman", "Spiderman"]
const dcHeros = ["Superman", "Flash", "Batman"]

// marvelHeros.push(dcHeros)

// console.log(marvelHeros);
// console.log(marvelHeros[3][1]);

const newArr = marvelHeros.concat(dcHeros)
// console.log(newArr);


const allNewHeros = [...marvelHeros, ...dcHeros]
// console.log(allNewHeros);

const anotherArray = [1,2,3,[4,5,6], 7, [6,7, [4,5]]]

const realAnotherArray = anotherArray.flat(Infinity)
console.log(realAnotherArray);



// returns boolean if its array or not
console.log((Array.isArray("Hashir")))

// create an array from iterable objects
console.log((Array.from("Hashir")))
console.log((Array.from("3456")))

// it would return empty 
// we would have to mention whether we need key or values
console.log((Array.from({name: "Hashir "})))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

