class railway{
    summit(){
        console.log(this.name + " your form is summitted for train no." + this.trainno) 
    }
    cancle()
    {
        console.log(this.name + " your form is cancelled")
    }
    fill(name,trainno){
        this.name=name;
        this.trainno=trainno;

    }
}

let  obj1=new  railway();
let  obj2=new  railway();
obj1.fill("pradeep",1001)
obj2.fill("arun",20202)

obj1.summit();
obj2.summit();
obj1.cancle();
obj2.cancle();
