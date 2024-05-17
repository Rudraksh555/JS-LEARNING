const accountId = 144553
let accountEmail = "rudraksh@google.com"
var accountPassword = "12345"
accountCity = "Wardha"
let accountState;

// accountId = 2 // not allowed
console.log(accountId);

accountEmail = "hdfbu@wr.com"
accountPassword = "212323"
accountCity = "Nagpur"

console.table([, accountEmail, accountPassword, accountCity, accountState])

/*
Prefer not to use var
because of issue in block scope and functional scope
*/