/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    if(str === ''){
        return 'This is an empty string!' //Here an if statement to return if its an empty string
    } else { // here the magic starts
    let lower = str.toLowerCase(); // turn everything to lower case
    let split = lower.split(' '); // now to split everything separated by spaces
    for (let i = 0; i < split.length; i++){ //a for loop

        let splitW = split[i].split('') // here to split every word
        splitW[0] = splitW[0].toUpperCase(); //turn to uppercase every first letter
        joinW = splitW.join('');//to re-join words
        split[i] = joinW
    }
    return split.join('-'); // to join the sentences using a hypen
    }
   }


console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

