
function factorial(n){
    let sub = 1;
    for(let i = 2; i <= n; i++ ){
        sub *= i;
    }
    return sub;
}
const result = factorial(5);
console.log(result);