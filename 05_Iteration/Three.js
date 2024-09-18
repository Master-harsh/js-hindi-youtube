// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
   // console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    // console.log(`Each char is ${greet}`);
    
}


// Maps in JAVASCRIPT
// The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value.
const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")

// suppose if you want to add india again in the list then what happens
map.set('IN', "India") // there is no any change in map because it holds only unique values and same order

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
    
}

const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}

