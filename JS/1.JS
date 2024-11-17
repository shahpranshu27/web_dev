console.log("hi");

fullName = "abc";
console.log(fullName);

// var -> variable can be redeclared and updated. A global scope variable.
// let -> variable can not be redeclared but can be updated. A block scope variable.
// const -> variabke can neither be redeclared nor updated. A block scope variable.

const student = {
    name : "abcd",
    rollNo : 1,
    marks : 90,
    isPass : 1
}

console.log(student)
// console.log(student.name)
console.log(student['name'])

const product = {
    prodName : "Ball Pen",
    rating : 4,
    reviews : 7002,
    offerPercent : 5,
    priceOfTheDay : 270
}

console.log(product)

const profile = {
    userName : "abcd",
    posts : 100,
    followers : 200,
    following : 12,
    isFollowing : true

}

console.log(profile)

// ---------------------------------------------------------------------------------------

let a = 4, b = 5;

console.log(a)
console.log(++a)
console.log(a)
console.log(a++)
console.log(a)
console.log(--a)
console.log(a)
console.log(a--)
console.log(a)


// ternary operator
let age = 25;
let result = age>18?'vote':'not vote';
console.log(result)

let result1 = age>18?console.log('vote'):console.log('not vote');

let num = document.getElementById("enter number: ");
console.log(num);