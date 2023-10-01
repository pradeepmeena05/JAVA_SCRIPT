var m=document.querySelector("#main")
var cur=document.querySelector(".cursor")

m.addEventListener("mousemove",function name(dets)
 {

    cur.style.left=dets.x+"px"
    cur.style.top=dets.y+"px"
    
})