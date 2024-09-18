const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item) {
//     console.log(item);
    
// })

// coding.forEach( (item) => {
//     console.log(item);
    // this is arrow function which is just similer to the function 
// })


// // can we assign a function in foreach 
// function printme(item){
//     console.log(item)
// }

// coding.forEach(printme)  // yes you can as a parameter in forEach section

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr); // here in forEach section there is not only one access of parameter there is multiple access 
    
// } )


const myCoding = [
    {
        langName: 'javascript',
        langFilename: 'js'
    },
    {
        langName: 'java',
        langFilename: 'java'
    },
    {
        langName: 'python',
        langFilename: 'py'
    }

]

myCoding.forEach( (item) => {

    console.log(item.langName);// so if know about forEach function then you able to access the object within a array
    
})

