// Date method

// let mydate = new Date()
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);
// console.log(mydate.getDay());
// console.log(mydate.getMonth());

// ARRAYS IN JS : can have diff data type values
const arr = [4 ,5 , 3 , 1 , 2 , true , "Nitish"]

console.log(arr);

arr.push(3)
arr.push(6)
console.log(arr)

arr.pop()
console.log(arr)

console.log(arr.includes(6));

// SLICE ADN SPLICS
// SPLICE manipulates the array while slice do not changes the array

let names = ["rajat" , "nitish" , "sristi" , "ammy"]

let names2 = ["bobby" , "mohit"]

// it will not push in it
names = names.concat(names2)
console.log(names);

