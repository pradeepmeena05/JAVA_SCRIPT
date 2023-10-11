let plus=() =>{
     
   
    const value = Number(count.innerText);
  count.innerHTML = value +1;
    
}
let minus=() =>{
    const value = Number(count.innerText);  
    count.innerText = value -1;
    
}




document.getElementById("first").addEventListener("click",plus)
 document.getElementById("second").addEventListener("click",minus)

