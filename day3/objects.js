// object literals
// it treats every variable as string by default
const user = {
    name : "nitish",
    age : 20,
    course : "b.tech"
}

// acessing objects
console.log(user.name);

// lock
Object.freeze(user)