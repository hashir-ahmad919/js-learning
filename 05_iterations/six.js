// const coding = ["js", "ruby", "java", "python", "cpp"]



// forEach doesnt returns any value
// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item
// } )

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10]



// alternative to forEach it works the same but it also return values by giving a condition
// const newNums = myNums.filter( (num) => num > 4 ) 
// const newNums = myNums.filter( (num) => {
//     return num > 4 
// }) 
// co
// console.log(newNums);



// same above work can be done on forEach

// const newNums = []

// myNums.forEach( (num) => {
//     if(num >4){
//         newNums.push(num)
//     }
// } )

// console.log(newNums);


let books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        publish: "1925",
        edition: 2004
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Novel",
        publish: "1960",
        edition: 2008
    },
    {
        title: "Pride and Prejudice",
        genre: "Romance",
        publish: "1813",
        edition: 2007
    },
    {
        title: "1984",
        genre: "Dystopian",
        publish: "1949",
        edition: 2010
    },
    {
        title: "The Catcher in the Rye",
        genre: "Coming-of-Age",
        publish: "1951",
        edition: 2004
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        publish: "1997",
        edition: 1998
    },
    {
        title: "The Hobbit",
        genre: "Fantasy",
        publish: "1937",
        edition: 2016
    },
    {
        title: "The Lord of the Rings",
        genre: "Fantasy",
        publish: "1954-1955",
        edition: 2014
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy",
        genre: "Science Fiction",
        publish: "1979",
        edition: 1995
    }
];

//console.log(books);

const userBooks = books.filter( (book) => book.genre === "Fantasy"  )
const userBooks2 = books.filter( (book) => book.edition <= 2000 && book.genre=== "Fantasy" )


//console.log(userBooks);
console.log(userBooks2);


