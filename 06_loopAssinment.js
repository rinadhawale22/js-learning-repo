const { log } = require("util");

var str = "I am very good IT developer";
var vowles = "a,e,i,o,u";
counter=0;
for (let index = 0; index < str.length; index++) {
   var str = str.toLowerCase();
   var str =str.toUpperCase();
   if (str=="aeiou") {
    counter ++
   }
    
}
console.log(`total number of small and capital vowels is :${str}`);
function sumOfCube(){
    var sum=0;
    for (let i = 1; i <=5; i++) {
        console.log(i);
        var cube = i*i*i;
        var sum = 1*1*1 + 2*2*2 +4*4*4 + 5*5*5 ;
        sum = cube + i ;
        
    }
    console.log(`sum of cube is :${sum}`);
}
sumOfCube();

function oddPositioned(string){
    var  sumodd = 0;
    for (let i = 1; i <=11; i=i+1) {
        console.log(i);
        var sumodd = 0;
        sumodd = sumodd + i ;

     
        
    }
    console.log(`${sumodd}`);
    
}
oddPositioned("Hard work always pays back");
oddPositioned("I will be UI IT champ");



