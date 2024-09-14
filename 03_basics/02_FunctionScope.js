// let a = 10
// const b = 20
// var c = 30

// Here no problem you easily console log but problem actually there when curly breses come in act

//var c = 300
let a = 300;

// if (true) {
//     let a = 10
//     const b = 20
//     var c = 30  // suppose here you remove the var you also have same problem
//     // if you want to print the inner a then you have to write this below line

//     console.log("INNER: ",a); // it prints 10 becouse it in inner scope
    

// } // curly breses means if works only there in scope only line no 7 to 11

//console.log(a); // it throw a error
//console.log(b); // it also throw a error
//console.log(c); // but it works properly so problem is there

//console.log(a); // now it never throw error it prints 300 becouse it is in the outer scope


// NESTED SCOPE

function One(){
    const username = "Harsh"

    function Two(){
        const website = "Youtube"

        //console.log(username); // Two use the function one's variable but Two never use the one's variable
        
    }
    // console.log(website);
    
    //Two()
}

One()

if(true){
    const username = "Harsh"
    if(username === "Harsh"){
        const website = " youtube"
       // console.log(username + website);
        
    }
    // console.log(website); // it throws error you accessing inner variable outside the scope of that
    
}
// console.log(username); // it also throws an error same problem

// ********************************* A very intesting example ***********************************
addone(5)
console.log(addone(5));


function addone(num){ // first way of function creation
    return num + 1
}

// addone(5) // if you move function from here line number 67 to 59 then what happend no problem at all it executes if you want to check see in line number 60 it results 6

addTwo(5)

const addTwo = function(num){ // second way of function creation
    return num + 2
}

// addTwo(5) // now its time for seconde function to move from line no 75 to line no 69 actually it throws an error but why first on e is executed then why not second one // error: Cannot access 'addTwo' before initialization
// you can not able to access function before decleration if you declare function like in variable okkk
