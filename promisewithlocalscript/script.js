let promise=new Promise((resolve,reject)=>{

      setTimeout(()=>{
          console.log("Resolve after 2 seconds")
          resolve(2);
      })
});

promise.then((val)=>{
     console.log(val);

     let p2=new Promise((resolve,reject)=>{
     
        resolve("p2 resolve")
     })
     return p2
}).then((va)=>{
    console.log("we are done")
})