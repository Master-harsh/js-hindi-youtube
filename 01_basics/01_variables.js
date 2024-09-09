const accountId = 144553
let accountEmail = "harsht@google.com"
var accountPassword = "12345"
accontCity = "Jaunpur"

//accountId = 2 // not allowed

accountEmail = "ht@ht.com"
accountPassword = "23323"
accontCity = "Delhi"
let accountState;

// prefer not to use var
// because of issue in block scope and functional scope

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accontCity])

