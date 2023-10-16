 async function fun(){
let p1=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("initializing hack program......")
    },1000)
})
let p2=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("hacking user name...... ")
    },2000)
})
let p3=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("hacking start for password......")
    },4000)
})
let p4=new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("successfully user name and password hack.....")
    },6000)
})

let f1=await p1;
console.log("done", f1)

let f2=await p2;
console.log("done", f2)

let f3=await p3;
console.log("done", f3)

let f4=await p4;
console.log("done", f4)
}


fun();