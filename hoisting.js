/* 1st case in this if we will run this we will get outpust as 9 and My name is lalit */

// var x=9

// function printName(){
// console.log('My name is lalit')
// }

// console.log(x)
// printName()

/* 2nd case in this if we will run this we will get outpust as undefined and My name is lalit.
  This is what hoisting is you can still get the values before intialization.
*/

console.log(x)
printName()

var x=9

function printName(){
    var x=1000;
console.log('My name is lalit')
}
