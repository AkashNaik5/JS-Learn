const accId =144
let accEmail ="ak@gmail.com"
var accPass = "1122"
accCity = "new"

let accState  // gives undefined (js hoisting)

//accId = 2      //not allowed because of const
accEmail ="a@ee"
accPass = "4"
accCity="smg"

console.log(accEmail);
console.log(accPass);     //we can also use
                          //console.table([accId,accEmail,accPass,accCity])
console.log(accCity);
 /*
   prefer not to use var
   because of issue in block scope and functional scope
 */

console.table([accId,accEmail,accPass,accCity])