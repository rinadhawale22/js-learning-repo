const { loadavg } = require("os");

const arrayNumbers=[1,-7,14,40 -77,91,108,89,601];
arrayNumbers.forEach((element)=>{
    console.log(element);

})
console.log(`======sum ======`);
const newArr=arrayNumbers.forEach((element)=>{
    sum=0;
    const newArr = sum + element;
    console.log(newArr);

})
console.log(`=======add the number======`);
arrayNumbers.forEach((element)=>{
    sum=1;
    sum=sum + element;
    console.log(sum);
    
})
console.log(`=====even number foreach ====`);
arrayNumbers.forEach((element)=>{
    if(element%2==0){
        console.log(element);
    }
})
console.log(`=======sum of all  arraynumber======`);
arrayNumbers.forEach(()=>{
    sum =0;
    sum =sum + arrayNumbers;
    console.log(sum);

})

arrayNumbers.forEach((currentvalue,index,array)=>{
    if (arrayNumbers%2==0) {
        console.log(currentvalue,index,array);
    }
})