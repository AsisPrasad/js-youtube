// array

const myArr = [10, 11, 12, 13, 14, 15]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) 
// myArr.shift()

// console.log(myArr.includes(9));  // Show if 9 is in the aray or nor (T/F)
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()  // Join binds the Array & converts it into string 

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) //this will include the first range & upto the second range values

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //this will exclude the first range & upto the second range values
                                //  and return the remaining elements
console.log("C ", myArr);
console.log(myn2);