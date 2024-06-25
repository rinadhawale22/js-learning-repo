

const arrayRollNumber=[113,45,56,11,32,45,109,799,56,45];
arrayRollNumber.reverse(arrayRollNumber);
console.log(arrayRollNumber);

arrayRollNumber.sort((n1,n2)=>{
    return n1>n2 ? 1:-1;
})
console.log(arrayRollNumber);

arrayRollNumber.sort();
console.log(arrayRollNumber);

arrayRollNumber.forEach((element)=>{
   result= element>=arrayRollNumber;
   console.log(result);

});

arrayRollNumber.forEach((element)=>{
    result=element<=arrayRollNumber;
    console.log(result);
});
const arrayRollNumbers1=[113,45,56,11,32,45,109,799,56,45];
const arrayRollNumbers2= [...new Set(arrayRollNumbers1)];
console.log(`Removing Duplicate using set method${arrayRollNumbers2}`);
