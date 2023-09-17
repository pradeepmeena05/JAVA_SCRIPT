
alert("alert is working")

let a=prompt("Enter number a:");

a=Number.parseInt(a)
alert(`Type of a is ${typeof a}`);

let write=confirm("Do you want to write in to the page")

if(write)
{
    document.write(a);
}
else{
    document.write("please allow me")
}