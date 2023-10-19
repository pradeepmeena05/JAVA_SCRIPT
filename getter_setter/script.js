class Main{
    constructor(name)
    {
        this._name=name;
    }

    fly(){
        console.log("mai ud rha hu")
    }

    get name(){
        return this._name
    }

    set name(newname){
        this._name=newname
    }
}
let a=new Main("bruno");
a.fly()
console.log(a.name)
a.name="jack"
console.log(a.name);

console.log( a instanceof Main)