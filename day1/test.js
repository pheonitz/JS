const account_id = 145678
// var is global so it is not used frequently
var account_password = "Nitish@143"

let account_email = "Nitish@gmail.com"
account_city = "jaipur"


// undefined
let account_state;

// account_id = 12345  not allowed
account_password = "Nitishgdg@143"
account_email = "Nitishgdg@gmail.com"
account_city = "kotdwar"

console.log(account_id)

// a new way to print values continously
console.table([account_password , account_email , account_city , account_state])