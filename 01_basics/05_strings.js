const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Here ${} injects variable to be used for string interpollation

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
console.log(gameName.__proto__); // 


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t')); // To get the character is at which position

const newString = gameName.substring(0, 4) // It will give the 0th to 4th position string
console.log(newString);

const anotherString = gameName.slice(-8, 4) //m It will give 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim());  // It will remove blankspaces & /n form string &
//  give only the String as output

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))  // It will show the string/char is present in the above url

console.log(gameName.split('-'));