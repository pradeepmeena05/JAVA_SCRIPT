// let promise=new Promise(function(reslove,reject){
// console.log("hello")
// reslove(1);
// });

let promise=new Promise(function(resolve,reject)
{     
    console.log("promise is pending");
      setTimeout(()=>{
        console.log("promise resolve")
        resolve(true);
      },2000);
});

let promise2=new Promise(function(resolve,reject)
{     
    console.log("promise is pending");
      setTimeout(()=>{
        

        reject(new Error("promise rejected"))
      },2000);
});

promise.then((val)=>{
     console.log(val);

});

promise2.catch((error)=>{
   console.log("some error occur in promise2")
})