
console.log(document.cookie);

document.cookie="name=pradeep"
document.cookie="name1=pradeep123"

let key=prompt("enter key")
let value=prompt("enter value")

document.cookie=`${encodeURIComponent(key)}=${encodeURIComponent(value)}`
console.log(document.cookie)

