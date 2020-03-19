
  
let breads = [];
const breadMaker = (function (){
  return {
    createBread: (breadType, flour, water, cream) => {
      let bread = {
        "breadType" : breadType,
        "recipe": {
          "flour": flour,
          "water": water,
          "cream": cream
        }
      }
      return bread;
    }
  }
})();

breads.push(breadMaker.createBread("cream", 100, 100, 200));
breads.push(breadMaker.createBread("sugar", 100, 50, 200));
breads.push(breadMaker.createBread("butter", 100, 100, 50));

const breadInfo = (data) => {
  let el = "";
  Object.keys(data).map((key)=>{
    let b = data[key];
    for( var n in b){
      if(typeof b[n] === 'object'){
        el += n;
        let next = b[n];
        for( var i in next ){
          el +='<div>' + i + " : " + next[i] + '</div>';
        }
      } else {
        el +='<div>' + n + " : " + b[n] + '</div>';
      }
    }
    el += "<br>";
  })
  document.querySelector('#print').innerHTML = el;
}

window.onload = () => {
  breadInfo(breads)
};
  