const accountId = 134529
let accountEmail = "asis@google.com"
var accountPassword = "12345"
accountCity = "Delhi"

console.log(accountEmail);
console.log(accountCity);
console.log(accountId);

/* Prefer not to use "var" because of issue in block scope and funtional scope */

console.table([accountId, accountEmail, accountPassword, accountCity])
