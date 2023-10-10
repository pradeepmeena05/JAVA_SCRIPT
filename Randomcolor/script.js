let Color = () =>{
const num=Math.floor(Math.random() * 16777215);
const code= "#" + num.toString(16); 
text.innerHTML=code
 document.body.style.backgroundColor = code;
text.style.color=code
btn.style.color=code
}

document.getElementById("btn").addEventListener(
    "click",
    Color
    )

Color();