




let a=[5,6,7,17,13,33,4,8,3];

let b=[];
let c=[];

for(let i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    {
        b[i]=a[i];
    }
    else
    {
     c[i]=a[i];
    }
}

console.log("even is",b);
console.log("even is",c);

