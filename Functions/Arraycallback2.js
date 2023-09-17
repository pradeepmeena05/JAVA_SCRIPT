let arr=[1,2,3,4,,-4,4,5]

let search=(n) =>{
    return n<0;
}
let result=arr.findIndex(search);

console.log(result);