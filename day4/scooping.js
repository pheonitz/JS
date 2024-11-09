if(true)
{
    let a = "nitish"
    const b = "bobby"
    var c = "excel"
}

// console.log(a)
// console.log(b);
console.log(c);

// function chaining

function one(){
    const username = "Nitish"

    function two()
    {
        const website = "video"
        console.log(username)
    }
    // console.log(Website) will not be printed
    two()
}

one()

// another syntax of writing function

const addtwo = function(num){
    return num + 2;
}

console.log(addtwo(2))