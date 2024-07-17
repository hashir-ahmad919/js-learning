const name = "Hashir "
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello ${name} your repo count is ${repoCount}`);

const gameName = new String("hashir-Hc");

// console.log(gameName[0])
// console.log(gameName.__proto__);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.length)

//tells us whats on the index
// console.log(gameName.charAt(1))

//tells us what index is of char we've inputed
// console.log(gameName.indexOf('H'))



const newString = gameName.substring(6,6)
console.log(newString);


const anotherString =  gameName.slice(-8, 5 )
// console.log(anotherString)



// Used mostly in input forms name where users type whitespaces 
// To avoid that we use trim()
const newStringOne = "      hashir      "
console.log(newStringOne)
console.log(newStringOne.trim())


// sometimes if theres a void space or other thu=ings we wan to ignore like in the below ur
// we use replace thn
const url = "https://sortaid.com/hashir%20ahmad"
console.log(url.replace("%20", '-'))

//ex 2
const paragraph = "I think Ruth's dog is cuter than your dog!";
console.log(paragraph.replace("Ruth's", 'my'));
// Expected output: "I think my dog is cuter than your dog!"



// includes helps in sense like what available at the string 
console.log(url.includes("hashir"))
console.log(url.includes("shandar"))


// repeat it used for repeatition 
const mood = 'Happy! ';
console.log(`I feel ${mood.repeat(3)}`);


// split is used if we want to split the stirng on the basis
// of -, " ", "", etc
const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ');
console.log(words[3]);
// Expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// Expected output: "k"