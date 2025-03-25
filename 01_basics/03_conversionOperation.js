let score = 33

console.log(typeof(score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// "33" => 33
// "33abc" => Nan (Not a number)
// true =>1; false =>0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn) //converting no. into boolean
console.log(booleanIsLoggedIn);

// For Boolean: 
// 1 =>true; 0 =>false
// "" =>false
// "Prasad" => true

let anyNumber = 55

let stringNumber = String(anyNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//node 01_basics/03_conversionOperation.js//

// **********Operations***********//

let value = 3
let negvalue = -value
console.log(negvalue);

let str1 = "Hello"
let str2 = " JS"
let str3 = str1 + str2
console.log(str3);



