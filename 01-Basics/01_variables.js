const accountId = 125463
let accountEmail = "shivam@gmail.com"
var accountPassword = "987654321"
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed

accountEmail = "abc@gmail.com"
accountPassword = "2563412"
accountCity = "Bihar"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);