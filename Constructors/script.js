class railway{
    constructor(name,trainno,address){
this.name=name;
this.trainno=trainno;
this.address=address
    }

    preview(){
        console.log(this.name + " your train number is " +this.trainno + " your address is"+ this.address)
    }
    summit(){
        console.log(this.name + " your form is summitted for train no." + this.trainno) 
    }
    cancle()
    {
        console.log(this.name + " your form is cancelled")
        this.trainno=0;
    }
}

let  obj1=new  railway("pradeep",1000,"bhopal pincode 4622001");


obj1.preview()
obj1.summit();
obj1.cancle();
obj1.preview();

