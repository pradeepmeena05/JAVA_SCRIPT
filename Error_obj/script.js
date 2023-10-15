
try{
    let a=prompt("enter age")
    if(a<=18)
    {
       throw new Error("this is not vaalid age")
    }
}
catch(e)
{
    console.log(e.name)
    console.log(e.message)
}