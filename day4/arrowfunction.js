// arrow function and this keyword
// refers to current instance of class 

const user = {
    name : "nitish",
    age : 20,
    course : "b.tech",

    message : function() {
        console.log(`${this.name} welcome `)
    }
}

user.message(this)
console.log(this)

console.log("context changed : ")
user.name = "nitin"

// function help()
// {
//     console.log(this);
    
// }
// help()


// arrow function
// syntax : () => {}

// const addfunc = (num1 , num2) => num1+num2
const addfunc = (num1 , num2) => ( num1+num2 )

console.log(addfunc(4 , 5))