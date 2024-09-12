// Singalton

// object literals
// Object.create // this is called as using constructor method



const jsUser = {
    name : "Harsh",
    "full name": "Harsh Tiwari",
    age: 18,
    location: "Jaunpur",
    email: "Harsh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

} // in object you are able to give any thing like array or other things

// to access the object people remember only one thing is that

// console.log(jsUser.email);// this  correct but is another method to access the object is to use the square bracket

// console.log(jsUser["email"])
// console.log(jsUser["full name"]);// so here you cannot access the fullname with above dot approch ok if you forget to use [] then it automatically takes

// //if you want to change the email or any value then use
// jsUser.email = "Harsh@chatgpt.com"

// //and if you want to no one change the value of that element then use just fress keyword

// Object.freeze(jsUser)
// jsUser.email = "Harsh@microsoft.com"

// console.log(jsUser["email"])
// console.log(jsUser);

// now we want to add functions in object then whats happens

jsUser.greeting = function(){
    console.log("Hello JS users")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS users, ${this.name}`)
}


console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

