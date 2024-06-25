console.log(`To remove duplicate element from the array`);
let array = [40, 20, 30, 40, 15, 30, 20];
array = [...new Set(array)];
console.log(array);
// const mySet = new Set();
// for (const element of array) {
//     mySet.add(element);
// }
// console.log(mySet);
// const newArray = [];
// for (const value of mySet) {
//     newArray.push(value);
// }
// console.log(newArray);
// array = newArray;
// console.log(array);