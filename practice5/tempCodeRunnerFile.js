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