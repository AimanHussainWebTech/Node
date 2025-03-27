let bcrypt = require('bcryptjs');
let mypswd = `aiman123`
let salt = 12
let encrypted_pswd = bcrypt.hashSync(mypswd, salt);
let check = bcrypt.compareSync(mypswd,encrypted_pswd);
if(check){
    console.log("Password is correct");
}
else{
    console.log("Password is incorrect");
}
console.log(`original Password: ${mypswd}/n Encrypted Password: ${encrypted_pswd}`);