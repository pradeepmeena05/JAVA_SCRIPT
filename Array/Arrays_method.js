const arr=[3,4,5,2,5,88,5];

let a=arr.toString();
console.log(typeof(a));

console.log(arr.indexOf(5));//indexOf()

console.log(arr.includes(88));//includes()

arr.push("push");//  it add at the last 
arr.unshift("push")//it add at Starting
console.log(arr);

arr.pop();//pop()
console.log(arr);

arr.sort();//sort()
console.log(arr);

const subarr=arr.slice(1,5);
console.log(subarr);

let b=arr.join(" and ");
console.log(b);