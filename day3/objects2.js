const bumble = new Object()

bumble.id = 123
bumble.name = "mohit"
console.log(bumble);


// nesting
const user2 = {
    email:"nitish@gmail.com",
    full_name : {
        firstname : "nitish",
        last_name : "chaudhary"
    }
}
console.log(user2);

const obj1 = {1:"A" , 2:"b"}
const obj2 = {3 : "c" , 4 : "d"}

const obj3 = Object.assign(obj1 , obj2)
console.log(obj3);

// check if the object has that attribute
console.log("do it have property:" , bumble.hasOwnProperty('name'));
