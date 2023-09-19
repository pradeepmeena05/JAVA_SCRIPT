
let a=prompt("age is");
a=Number.parseInt(a);

const write=(age) =>{
  return age>=18?true:false;
}
if(write(a))
{
 alert("you can drive")
}
else{
    alert("you cannot drive")
}