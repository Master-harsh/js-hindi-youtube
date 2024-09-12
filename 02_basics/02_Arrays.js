const marvalheros = ["Thor", "Spiderman", "Ironmaan"]
const dc_heros = ["Superman", "flash", "batman"]

//marvalheros.push(dc_heros)

//console.log(marvalheros);  // As we know that array takes any type of data so it takes dc_heros array as a data [ 'Thor', 'Spiderman', 'Ironmaan', [ 'Superman', 'flash', 'batman' ] ] so here FOUR elements in marvelheros

// Let suppose if we want to access third element of marvalheros then you have

// console.log(marvalheros[3]); // so you that array becouse it is a element of array [ 'Superman', 'flash', 'batman' ]

// console.log(marvalheros[3][1]); // now it print element 1 in dc_heros is flash but it is a wrong way to access element

// const all_heros = marvalheros.concat(dc_heros) // now it is best way to concat the array in js
// console.log(all_heros);// it prints which is correct [ 'Thor', 'Spiderman', 'Ironmaan', 'Superman', 'flash', 'batman' ]

const all_new_heros = [...marvalheros, ...dc_heros]
// console.log(all_new_heros)

const anotherarr =  [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = anotherarr.flat(Infinity)

console.log(real_another_array);



//console.log(Array.isArray("Harsh")); // False

console.log(Array.from("Harsh")); // creates new array 

console.log(Array.from({name: "Harsh"})); // it gives a empty array becouse it cannot understand ki kiska array banau

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// it also make a array 








