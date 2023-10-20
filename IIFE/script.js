let fun=()=>{

    return new Promise((resolve,reject) => {

        setTimeout(() =>{
            resolve(2);
        },1000)
    })
}

(async()=>{
      let a=await fun()
      console.log(a);
      let b=await fun()
      console.log(b);

})()
