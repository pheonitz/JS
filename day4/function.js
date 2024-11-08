function myname(s)
{
    console.log(s);
}

myname("nitish")
// myname is used for reference

function add(a , b){
    return a+b;
}

let result = add(3  , 4)
console.log("result outside funv "  , result);


function messgae(username){
    return `${username} just logged in`;
}

let result1 = messgae("nitish")
console.log(result1)

// rest operator

function calcprice(...num1)
{
    return num1;
}

console.log(calcprice(200 , 300 , 500))

//  IMP CONCEPT
function calculate(val1 , val2 , ...num1){
    return num1
}

console.log(calculate(200 , 400 , 500 , 2000))