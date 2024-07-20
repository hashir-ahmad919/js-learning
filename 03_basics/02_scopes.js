let a =300 

if(true){
    let a = 10
    const b = 20
    c = 10
    // console.log(a);
}

// console.log(a)



function one() {
    const userName = "Hashir"
    
    function two(){
        const website = "youtube.com"
        console.log(userName);
    }
    // console.log(website);
    two()
}
one()


if(true) {
    const username = "Hashir"
    if(username === "Hashir"){
        const web = "Youtube.com"
        console.log(username + web);
    }
    // console.log(web);
}

// console.log(username);


// ++++++++++++++=Intersting ++++


// function declaration
console.log(addOne(5));    
function addOne(num) {
    return num+1 
}
// console.log(addOne(5));



//function expression 
//We cannot call function expression before its created

// console.log(addTwo(5));    //This would give error hoisting

const addTwo = (num) => {
    return num +2
}

// console.log(addTwo(5));