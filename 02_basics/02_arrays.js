const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)  // Its not correct way as it will take array as a element as give 
 // the output as : 
 [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
 
 console.log(marvel_heros);
console.log(marvel_heros[3][1]);//Here we have to take 3rd element which is a array & we have to
// take the [1], for the 1st element ,  but it not not appropriate way of fetching the element 

const allHeros = marvel_heros.concat(dc_heros) // here using 'concat' we can able to merge 2 arrays
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // Spread operator: it spread all the elements

console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // Flat is used to give a single array 
//   which is having all the elements despite having numerous arrays, & also we habve to provide the 
// depth upto which depth we have to get the output, using "Infinity" we do not have to specify the 
// limit, although it is not suggested way
console.log(real_another_array);


console.log(Array.isArray("Hitesh")) // we are asking whether it is array or not
console.log(Array.from("Hitesh")) // we are making the string to array using this 
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));