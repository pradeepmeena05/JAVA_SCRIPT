let elem1=document.querySelectorAll(".elem")

elem1.forEach(function(val){
    
    val.addEventListener("mouseenter",function(){
        val.childNodes[3].style.opacity=1
        val.childNodes[1].style.backgroundColor="red"
        
    });
    val.addEventListener("mouseleave",function(){
        val.childNodes[3].style.opacity=0
        val.childNodes[1].style.backgroundColor="transparent"
    });

    val.addEventListener("mousemove",function(dets){
     val.childNodes[3].style.left=dets.x+"px"
     val.childNodes[3].style.top=dets.y+"px"
     

    });
    
});