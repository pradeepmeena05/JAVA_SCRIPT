class password{
    constructor()
    {
        console.log("Welcome to password generator");
        this.pass=""
    }

    generatepassword(len){
        let num="abcdefghigklmnopqrstwxyz123456789!@#$%^&*()"

        if(len<3)
        {
            console.log("your password lenght should be 3 length")
        }
        else{
            let i=0;

             while(i<len)
            {
                this.pass+=num[Math.floor(Math.random()*num.length)]
                 i++;
            }
           
        return this.pass;
        
        }
    }
}

let obj=new password();

console.log(obj.generatepassword(10))