function factorial(n){
    let end = 1;
    if( n < 2 ){
        return end;
    }
    for(let i = 2; i <= n; i++ ){
        end *= i;
    }
    return end;
}
const result = factorial(100);
console.log(result);