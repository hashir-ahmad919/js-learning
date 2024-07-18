const tinderUser1 = new Object() //singleton object

const tinderUser = {}    // non singleton object 

tinderUser.id = "123abc"
tinderUser.name = "Hashir"
tinderUser.age = 24
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Hashir",
            lastName: "Khan"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b"
}
const obj3 = {
    5: "a",
    6: "b"
}

const obj4 = {...obj1, ...obj2, ...obj3}     //{obj1, obj2}
// const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4);

const user = [
    {
        id: 1,
        emaail: "hashir@gmail.com"
    },
    {
        id: 2,
        emaail: "hash@gmail.com"
    },
    {
        id: 3,
        emaail: "ha@gmail.com"
    },
]

user[1].email

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


// to avoid crashing we check whether the property exists or not it returns boolean
console.log(tinderUser.hasOwnProperty('isLoggedIn'));