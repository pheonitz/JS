// filtering in array

const mynums = [1 , 2 , 3 , 4,5 ,6 , 7 , 8 , 9]
const newnums = mynums.filter((num) => num > 4)

//  we need to return values in case of parenthesis
const newnums2 = mynums.filter((num) => {
    return num > 4
})

const arr = []

mynums.forEach((num) =>{
    if(num > 4)
    {
        arr.push(num)
    }
})


console.log(newnums2)
console.log(arr)
