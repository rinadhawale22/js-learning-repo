// IIFE -- Immediately invoked function expression
// Self invoked Function Expression

( function(){
    console.log("IIFE");
} )();

()=>{

}

// Arrow Function 
let multiply = (n1, n2) => {
    const result =n1*n2;
    return result;
}
const value = multiply(2, 9);
console.log(value);