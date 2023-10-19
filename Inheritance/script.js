class Animal{

    constructor(name,color){
        this.name=name;
        this.color=color;
    }

    Name()
    {
        console.log(` monkey name is ${this.name} `)
    }
    Color(){
        console.log(` monkey color is ${this.color} `)
    }
}
class Monkey extends Animal{

    run()
    {
        console.log("monkey is running")
    }
}


let ani=new Animal("chinku","red")
let monk=new Monkey("minku")

ani.Name();
ani.Color();
monk.run();
monk.Name();
