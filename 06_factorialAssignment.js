function factorialOfNum(num){
    if (num==null||num==undefined) {
        console.log(`invalid factional-${num}`);
    }
    let fact = num
    for (let i = num; i >=1; i--) {
        fact = fact * i;
        
    }
    console.log(fact);
}
factorialOfNum(5);
factorialOfNum(3);
factorialOfNum(null);
factorialOfNum(8);
factorialOfNum(undefined);
factorialOfNum(9);
factorialOfNum(0);