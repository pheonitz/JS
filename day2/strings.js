
let myname = new String("NitIsh")

console.log(myname[0])
console.log(myname.length)
console.log(myname.toLowerCase())
console.log(myname.charAt('2'))
console.log(myname.indexOf('N'))

console.log(myname.substr(0 , 3));

// slicing a string
console.log(myname.slice(0,2))
console.log(myname)


// trimming a method

let name = new String("   Nitish chaudhary   ")

// trim method remove white space character
console.log(name.trim())

// replace replaces a keyword in string
const URL = "https://nitish.com"
console.log(URL.replace('nitish' , 'hitesh'))

console.log();

// splitting a string
const text = "Hello my name is nitish and i am a computer science student"

console.log(text.split(' '));

console.log(text.split('e'))

