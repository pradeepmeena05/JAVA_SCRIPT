
let p1=new Promise((resolve,reject)=>{

     console.log("promise not resolved")

     setTimeout(()=>{
        resolve(2)
     },2000)
})

p1.then(()=>{
    console.log("hurray")
})
p1.then(()=>{
    console.log("congrats promise resolved")
})
