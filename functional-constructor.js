const player = function(name, age, match, run){
   this.name = name;
   this.age = age;
   this.match = match;
   this.run = run;
   
}
const tamim = new player("tamim", 34,220,9000);
const shakib = new player("shakib", 34,220,9000);
const musfiq = new player("musfiq", 34,220,9000);
console.log(tamim,shakib,musfiq);