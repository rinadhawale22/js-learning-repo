console.log(`===== Sum the numbers from 1 to 5 =======`);
var sum = 0;
for (let i = 1; i <=5; i++) {
    sum = sum + i;  
}
console.log(sum);

console.log(`===== Sum the even numbers from 0 to 50 =======`);
var sumEven = 0;
for (let i = 0; i <=50; i=i+2) {
    sumEven = sumEven + i;  
}
console.log(sumEven);

console.log(`Reverse the string`);
var word = "JavaScript"; 
var result = "";// tpircSavaJ
for (let index = word.length-1; index >=0; index--) {
    var ch = word.charAt(index);
    result = result + ch;
}
console.log(result);