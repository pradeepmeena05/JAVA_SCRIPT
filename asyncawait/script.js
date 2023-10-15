async function harry(){

    let delhi=new Promise((resolve,reject)=>{
 
          setTimeout(()=>{
            resolve("35 deg")
          },2000)
    })
    let bang=new Promise((resolve,reject)=>{
 
        setTimeout(()=>{
          resolve("30 deg")
        },3000)
  })

console.log("please wait delhi weather featching")
  let d=await delhi;
  console.log("done",d)

  console.log("please wait bnaglor weather featching")
  let b=await bang;
  console.log("done",b)

  return [d,b];
}

async function cherry(){
console.log("this is cherry execute parrllel")
}

async function main1(params) {
    let a= await harry()
let b= await cherry()
}

main1();
