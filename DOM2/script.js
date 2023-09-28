let ans=document.querySelector("#bulb")
let btn=document.querySelector("button")

let flag=0;
btn.addEventListener("click",function(){
if(flag==0)
{
    ans.style.backgroundColor="yellow"
    flag=1;
}
else{
    ans.style.backgroundColor="white"
    flag=0;
}

})