let p1=new Promise((resolve,reject)=>{


      setTimeout(()=>{
        resolve("value 1")
      },1000)
})
let p2=new Promise((resolve,reject)=>{


    setTimeout(()=>{
      resolve("value 2")
    reject(new Error("error"));
    },200)
})
let p3=new Promise((resolve,reject)=>{


    setTimeout(()=>{
      resolve("value 3")
    },3000)
})

p1.then((val)=>{
      console.log(val);
})
p2.then((val)=>{
    console.log(val);
})
p3.then((val)=>{
    console.log(val);
})

// let promise=Promise.all([p1,p2,p3]);
// promise.then((val)=>{
//     console.log(val)
// })

// let promise=Promise.allSettled([p1,p2,p3]);
// promise.then((val)=>{
//     console.log(val)
// })

// let promise=Promise.race([p1,p2,p3]);
// promise.then((val)=>{
//     console.log(val)
// })

// let promise=Promise.any([p1,p2,p3]);
// promise.then((val)=>{
//     console.log(val)
// })

// let promise=Promise.resolve(5);
// promise.then((val)=>{
//         console.log(val)
// })

// let promise=Promise.reject(5);
// promise.catch((val)=>{
//         console.log(val)
// })
