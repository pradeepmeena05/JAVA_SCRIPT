
let promise=Promise.race([p1,p2,p3]);
promise.then((val)=>{
    console.log(val)
})