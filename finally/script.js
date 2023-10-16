let fun=() =>{

    try{
        // console.log(a)
        console.log("successfully")
// return 
    }
    catch(err)
    {
        console.log("this is error" ,err.name)
    }
    finally{
        console.log("finally always execuet")
    }
}
fun()