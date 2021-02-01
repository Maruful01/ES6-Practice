//
function doubleIt (num) {
    return num * 2;
}
const answer = doubleIt (10);
console.log (answer);
//
const doubleIt2 = function (num2) {
    return num2 * 3;
}
const answer2 = doubleIt2 (10);
console.log (answer2);

// Using ES6 
// A parameter
const doubleIt3 = num => num * 4; // This is called function

const answer3 = doubleIt3 (5);
console.log (answer3);
// Multiple parameter
const add = (a, b) => a + b;

const answer4 = add (5, 4);
console.log (answer4);
// Without parameter 
const result = () => 12;

const answer5 = result ();
console.log (answer5);

// Multi line arrow function 
const multiLine = (a, b, c) => {

    const plus = a + b + c;
    const result = plus * 2;
    return result
}
const answer6 = multiLine (5, 10, 5);
console.log (answer6);