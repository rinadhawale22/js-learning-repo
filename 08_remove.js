var array = [10, 20, 30, 40, 15];
console.log(`=== splice() =====`);
const deletedElements = array.splice(2);
console.log(array);
console.log(deletedElements);

console.log(`Removing middle elements from the array`);
var array = [10, 20, 30, 40, 15];
const deleteElements = array.splice(2,2);
console.log(array);
console.log(deleteElements);

console.log(`Only Insert an element without removing any existing element`);
var array = [10, 20, 30, 40, 15];
console.log(array);
array.splice(2, 0, 500);
console.log(array);

console.log(`Inserting multiple elements`);
var array = [10, 20, 30, 40, 15];
console.log(array);
array.splice(1, 0, 400, 900, 200);
console.log(array);

console.log(`Insert an element by deleting or removing few elements`);
var array = [10, 20, 30, 40, 15];
console.log(array);
array.splice(2, 1, 700, 800);
console.log(array);

console.log(`Remove multiple elements`);
var array = [10, 20, 30, 40, 15];
console.log(array);
array.splice(1, 3, 500);
console.log(array);