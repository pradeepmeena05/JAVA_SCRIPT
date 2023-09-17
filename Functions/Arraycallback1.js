let arr=[1,2,44,3,-2,0,55,-3,4,-6]

const negative=(n) =>{
    return n<0;
}

const result=arr.find(negative);

console.log(result);