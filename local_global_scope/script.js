{
    let local=77;
    console.log(local)
    console.log("This is local scope")
}
// console.log(local) it gives error

let global=1010;
{
    console.log(global)
}
console.log(global) 

function fun(){
    let func=1330

    console.log(func)
    console.log("This is functional Scope")
}
fun()