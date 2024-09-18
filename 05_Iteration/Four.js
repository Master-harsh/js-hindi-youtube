// MOre dicussion on Objects:

const myObject = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// when we talk about forof loop then we remember that one thing is that forof loop not work on objects so for objects we use "forin"

// for (const key in myObject) {
//     console.log(key);
    // it just prints the key of the object
// }

// for (const key in myObject) {
//     console.log(myObject[key]);
//         // so it prints all the values of the keys
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut for ${myObject[key]}`);
// }

// **** forin loop used in others like array

const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//     console.log(key);

//     // haan ji arrays also have keys values which start from 0 and is number but in object you give it according to you
    
// }

for (const key in programming) {
    // console.log(programming[key]);
    // it prints the keys values of array 
}


const map = new Map()
map.set('IN', "India")
map.set('USA', "United State Of America")
map.set('Fr', "France")
map.set('IN', "India")

for (const key in map) {
    // console.log(key);
    // it not print anything becouse it is not iterable further we talk about that
}





