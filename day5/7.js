const mynums = [1, 2, 4, 5, 6, 7, 8, 9, 3];

// const nums = mynums.map((nums) => {return nums+10})

const newnums = mynums.map((num) => (num = num * 10)).map((num) => num + 1).filter((num) => (num > 30));

console.log(newnums);
