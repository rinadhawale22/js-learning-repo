var isEvenOdd= function (num){
    if (num%2==0) {
        console.log(`Even`);
    }else {
        console.log(`odd`);
    }

}
isEvenOdd(45)
isEvenOdd(70);
isEvenOdd(67);
isEvenOdd(98);

var voteEligibility=function (age){
    if (age<=18) {
console.log(`eligible for vote ${age}`);
    } else {
        if (age>=18) {
            console.log(`not eligible for vote ${age}`);
        }
    }

}
voteEligibility(18);
voteEligibility(20);
voteEligibility(17);
voteEligibility(40);

var startswith= function(string){
    if (string.length>=10) {
        console.log(`character are more then 10 :${string.length}`);
    } else {
        console.log(`charater are not more then 10:${string.length}`);
    }

}
 var checkString= function(arg){
    if (arg.startswith=="Java"){
        console.log(`starts with java ${arg}`);
    } else{
        console.log(`not start with java ${arg}`);
    }
    
}   
checkString("Javascript Language");
checkString("Programming Language");