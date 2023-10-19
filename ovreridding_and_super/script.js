class Employee{

  
    login(){
        console.log("Empolyee has login")
    }
    logout()
    {
        console.log("Empolyee has logout")
    }

    Leaves(leave)
    {
        console.log(`empolyee has requested for ${leave} leaves`)
    }
}
class programmer extends Employee{

    Leaves(leave){
        super.Leaves(4);

    }
}

let e=new programmer()
let p=new Employee()

e.login();
e.logout();
e.Leaves();
p.Leaves(1)