const arrayNumber=[20,31,40,25,23,11,29,9,60,2,11];
console.log(`total element of is : ${arrayNumber}`);
const array =arrayNumber.length;
console.log(`${array}`);

arrayNumber.splice(0,0);
console.log(arrayNumber);
arrayNumber.splice(10,0);
console.log(arrayNumber);

const element=arrayNumber.length;
console.log(`${element}`);

for (let index = 0; index < arrayNumber.length; index++) {
    const element1 = arrayNumber[index];
    if (element1%2==0) {
        console.log(element1);
    }
    
}

for (let index = 0; index < arrayNumber.length; index++) {
    const element2 = arrayNumber[index];
    if (element2%2==1) {
        console.log(element2);
    }
}

sum =  element + arrayNumber;
console.log(sum);

sum = element + arrayNumber;
console.log(sum);


for (let index = 5; index <arrayNumber.length; index++) {
    const element = arrayNumber[index];
    console.log(element);
}

arrayNumber.splice(3,1,55,66);
console.log(arrayNumber);

arrayNumber.pop(4,3);
console.log(arrayNumber);

