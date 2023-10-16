let key=prompt("enter key")
let value=prompt("enter value")

localStorage.setItem(key,value)

if(key=="red")
{
    localStorage.removeItem(key)
}

console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

if(key==0)
{
    localStorage.clear()
}
console.log(localStorage.length);
console.log(localStorage.key(0));