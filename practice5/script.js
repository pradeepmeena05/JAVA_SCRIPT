const a= (text)=>{
    return new Promise((resolve,reject)=>{

       setTimeout(()=>{
        resolve(text)
       },3000)
    })
}
(
    async()=>{
        let p1=await a("hello")
        console.log(p1);
        let p2=await a("world")
        console.log(p2);

 }
 )()

//sum using spread 

function sum(a,b,c){
return a+b+c;
}

let s=[33,5,4]

console.log(sum(...s))


function SI(p,r,t){
    return (p*r*t)/100
}

console.log(SI(1000,3,2))