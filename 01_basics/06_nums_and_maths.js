// NUMBERS

// const score = 400
// console.log(score);


// const balance = new Number(100)
// console.log((balance));

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const otherNumber =  123.8966

// console.log(otherNumber.toPrecision(3));

 const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));



/*Number.prototype.toPrecision()
Returns a string representing the number to a specified precision in fixed-point or exponential notation.

Number.prototype.toString()
Returns a string representing the specified object in the specified radix ("base"). Overrides the Object.prototype.toString() method.

Number.prototype.valueOf()
Returns the primitive value of the specified object. Overrides the Object.prototype.valueOf() method.*/

// Examples of these

// const biggestNum = Number.MAX_VALUE;
// const smallestNum = Number.MIN_VALUE;
// const infiniteNum = Number.POSITIVE_INFINITY;
// const negInfiniteNum = Number.NEGATIVE_INFINITY;
// const notANum = Number.NaN;


//***********************************MATHS IN JAVASCRIPT********************

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.3));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.2));
// console.log(Math.min(34,4,6,2,1));
// console.log(Math.max(42,5,6,3,9));


console.log(Math.random());

console.log(Math.random()*10);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)