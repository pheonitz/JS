// object iterable
const myobject = {
    js : 'javascript',
    cpp : 'c++',
    c : 'c',
    py:'python'
}

for (const key in myobject) {
   console.log(`${key} : ${myobject[key]}`)
}

// for in for array
const arr = [1 , 2 ,3 , 4  ,5]
for (const key in arr) {
   console.log(key);
   
}
// for each do not return a values 
const values = arr.forEach((item) => {
   console.log(item);
   
})

console.log(values)