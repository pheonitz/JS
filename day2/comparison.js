// console.log("2" > 1)
// console.log("02" > 1)

console.log(null == 0)
console.log(null > 0)

// imp 
console.log("Null is greater than 0 :" , null >= 0)
console.log(null < 0)

console.log(undefined == 0)

// === check not only the value but also the datatype

console.log(2 === "2")

//  primitive data types : call by value always
// string  number null boolean undefined bigint symbol

// Non primitive :always called by reference: ARRAY , OBJECTS , FUNCTIONS

// +++++++++++++++++++++++++++++++++++

// Stack(primitive) heap (Non primitive)
// eg ::: 
let employee = {
    age : 20,
    name : "nitish"
}

let emp1 = employee
let emp2 = employee

console.log("befor changing : ")
console.log(emp1.age)
console.log(emp2.age)

console.log('after changing : ')
emp1.age = 23
console.log(emp1.age)
console.log(emp2.age)
