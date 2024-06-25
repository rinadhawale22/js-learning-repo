const fruits_seasonal=["banana","orange","apple","Mango","water Melon"];
const fruit=fruits_seasonal[0];
console.log(`first element is :${fruit}`);

const array = fruits_seasonal[4];
console.log(`last element is :${array}`);

const array1 = 'papaya';
const array2=fruits_seasonal.unshift('0,1,2,3,4');
console.log(` after unshift() : ${array1}`);

const array4= fruits_seasonal.pop('3');
console.log(`${array4}`);

const array5=fruits_seasonal.slice('0,1,2,3,4');
console.log(`${array5}`);

const apple='pinapple';
const array6= fruits_seasonal.push();
console.log(`${array6}`);