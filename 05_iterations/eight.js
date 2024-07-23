// reduce

const myNums = [1,2,3]

// const myTotal = myNums.reduce( (acc, currval) =>{
//     return acc + currval
// }, 0 )

const myTotal = myNums.reduce( (acc, currval) => acc + currval,0 )

// console.log(myTotal);



const shoppingCart = [
    {
        itemName: "Js course",
        price: 2999 
    },
    {
        itemName: "Py course",
        price: 999 
    },
    {
        itemName: "Mobile development course",
        price: 5999 
    },
    {
        itemName: "Data Science course",
        price: 6999 
    },
]

const priceToPay = shoppingCart.reduce( (acc, item) =>  acc + item.price,0 )

console.log(priceToPay);


