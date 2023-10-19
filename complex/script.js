class complex
{
    constructor(real,imag){
        this.real=real;
        this.imag=imag;
    }

    add(num){
        this.real=this.real +  num.real;
        this.imag=this.imag +  num.imag;
    }
}

let a=new complex(2,4)
let b=new complex(8,6)

a.add(b);

console.log(`${a.real} + ${a.imag}i`)