function factorial(n){
    return n === 0 ? 1 : n * factorial(n - 1);
}
const result = factorial(4);
console.log(result);