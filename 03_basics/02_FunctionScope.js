// let a = 10
// const b = 20
// var c = 30

// Here no problem you easily console log but problem actually there when curly breses come in act

//var c = 300
let a = 300;

if (true) {
    let a = 10
    const b = 20
    var c = 30  // suppose here you remove the var you also have same problem
    // if you want to print the inner a then you have to write this below line

    console.log("INNER: ",a); // it prints 10 becouse it in inner scope
    

} // curly breses means if works only there in scope only line no 7 to 11

//console.log(a); // it throw a error
//console.log(b); // it also throw a error
//console.log(c); // but it works properly so problem is there

console.log(a); // now it never throw error it prints 300 becouse it is in the outer scope
