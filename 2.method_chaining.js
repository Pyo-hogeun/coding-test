
class calc {
  constructor(){
    this.result = 0;
  }
  add(value){
    this.result += value;
    return this;
  }
  subtract(value){
    this.result -= value;
    return this;
  }
  out(){
    return this.result;
  }
}
  
  
let main = new calc();
const result = main.add(4).add(5).subtract(3).out();
window.onload = () => {
  document.querySelector('body').innerHTML = result;
  console.log(result);
}