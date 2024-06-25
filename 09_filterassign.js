const { log } = require("util");

const arrayNumbers=[20,11,40,25,49,9,90,60,2,19];
arrayNumbers.forEach((element)=>{
    if (element>=50) {
        console.log(element);
    }

})
console.log(`=====even number=====`);
arrayNumbers.forEach((element)=>{
    evenNumber=element%2==0;
    console.log(evenNumber);

})
console.log(`====odd number====`);
arrayNumbers.forEach((element)=>{
    ODDNumber=element%1==0;
    console.log(ODDNumber);

})
console.log(`========multiply by 5========`);
arrayNumbers.forEach((element)=>{
    element= 5/arrayNumbers;
    console.log(element);
})
console.log(`=========number between 20 to 50========`);
arrayNumbers.forEach((element)=>{
    element=element>=20 && element<=50;
    console.log(element);
})