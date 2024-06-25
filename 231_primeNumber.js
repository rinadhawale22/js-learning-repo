const { count } = require("console");

const array =[3,9,7,6,19,29,53];
const IsPrime=function (num){
    for (let index = 2; index < num; index++) {
        if(num%index==0){
            return false;
        }
        
    }
    return true;
}
var result=IsPrime(3);
console.log(`given number 3 is prime :${result}`);
console.log(`given number 9 is prime :${result}`);
console.log(`given number 7 is prime :${result}`);
console.log(`given number 6 is prime : ${result}`);
console.log(`given number 19 is prime : ${result}`);
console.log(`given number 29 is prime : ${result}`);
console.log(`given number 53 is prime : ${result}`);
 
    