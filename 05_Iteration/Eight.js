const myNums = [1, 2, 3, 4, 5]

// const myTotal = myNums.reduce(function (acc, currval) {
// console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0)
// console.log(myTotal);

// const array1 = [1, 2, 3, 4];

// **************** Actual working of reduce function
// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


// now we take it in arrow function

const myTotal = myNums.reduce( (acc, curr) => (acc + curr, 0))

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },

]

const priceToPay = shoppingCart.reduce( (acc, item) => acc + item.price,0)

console.log(priceToPay);


