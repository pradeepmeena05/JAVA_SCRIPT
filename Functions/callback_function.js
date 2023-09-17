

const calculate=(a,b,operation) =>{
    return operation(a,b);
}

const result=calculate(5,5,function(num1,num2){

    return num1*num2;
});
console.log(result);
