function greaterNumber(argOne,argTwo){
    var result=(argOne&&argTwo);
    console.log(`greatest number  is ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

function isEvenOrOddNum(arg1,arg2){
    var result=(arg1%0 == arg2%1);
    console.log(`number is even :${result}, number is odd ${result}`);
}
isEvenOrOddNum(29,44);
isEvenOrOddNum(0,101);

function wordLength(arg){
    var result=(arg%0 &&arg%1);
    console.log(`value is even or odd are :${result}`);
    
}
wordLength("Javascript");
wordLength("developer");
wordLength("google");

function maleMarriageEligibility(gender ,age ,boyName){
    var boyName=(gender && age>21);
    console.log(`you are eligible for marriage :${boyName}`);
    var result=(gender && age>21);
    console.log(`you are not eligible for  marriage : ${result}`);
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"stew jobs");

function femaleMarriageEligibilty(age,gender,girlname){
   var girlname=(gender && age>=18);
console.log(`${girlname}`);
}
var resultValue=femaleMarriageEligibilty("Female",16,"jenifer");
console.log(`${resultValue}`);
var resultValue = femaleMarriageEligibilty("Male",17,"jobs");
console.log(`${resultValue}`)

