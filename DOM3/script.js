let ans=document.querySelector("#btn")
let res=document.querySelector("h5")
let flag=0;

ans.addEventListener("click",function(){
    if(flag==0)
    {
        res.innerHTML="Friends"
        res.style.color="green"
       
     flag=1;
    }
    else{
        res.innerHTML="Stranger"
        res.style.color="red"
        
        flag=0;
    }

})