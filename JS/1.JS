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