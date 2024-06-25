const { log } = require("util");

function show(){
    console.log("hey..my name is rina..");
}
show();

console.log("========== square() ============");
function square(){
    console.log("Finding the square of 10...");
    var result = 10 * 10;
    console.log("Square is:", result);
}
square();
square();

console.log("========== squareNumber() ============");
// 2. Named function with argument and no return value
function squareNumber(num){
    console.log("Given number is:", num);
    var result = num * num;
    console.log("Square is:", result);
}
squareNumber(5);
squareNumber(25);

// 2. Named function with argument and return value

// WAF with name areaOfRectangle and it's two arguments namely as length and width  
function areaOfRectangle(length, width){// length=, width=
    console.log("Given Length and width is: ", length, width);
    var result =length * width;
    console.log("Area of rectangle is: ", result);
}
areaOfRectangle(30);

// 3. Named function with argument and return value
// WAF to find the cube of given number
console.log("========== cubeOfNum() ============");
function cubeOfNum(num){
    console.log("Given number is: ", num);
    var result = num * num * num;
    return result;
}
var cube = cubeOfNum(3);
console.log("Cube is: ", cube);

console.log("======step1======");
function details(){
    console.log(" My name is Rina..");
}
details();
 console.log("========step2=======");
 function personalDetails(firstName, lastNamem,collageNmae){
    var firstName="ranu";
    var lastName="gawanday";
    var collageName="ceeha gad";
    console.log("persionalDetails is :","firstName is :",firstName,"lastname is :",lastName,"collage is :",collageName);
    }
personalDetails("ranu","gawanday","ceeha gad");

console.log("========step3=======");
function addThreeValues(num,num,num,num){
    console.log("given three number are  : 10,23,600,40");
    var result=10+23+600+40;
    console.log("addition of three are :", result);
    console.log("add the three value are : hello good morning");

}
addThreeValues(10,23,600,40);
addThreeValues("hello","good","morning");
