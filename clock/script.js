setInterval(()=>{

    let hour=document.querySelector("#hour")
    let sec=document.querySelector("#min")
    let min=document.querySelector("#sec")
let obj=new Date();
let h=obj.getHours();
let m=obj.getMinutes();
let s=obj.getSeconds();

hour.textContent=h 
sec.textContent=m
min.textContent=s
});






  
  
 

