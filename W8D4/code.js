function titleize(arr, callback){
  let res = arr.map(arr => `Mx. ${arr} Jingleheimer Schmidt`);
  callback(res);
};

titleize(["Mary", "Brian", "Leo"], (arr) =>{
  arr.forEach(arr => console.log(arr));
});

function Elephant(name, height, tricks){
  this.name = name;
  this.height = height;
  this.tricks = tricks;
};

Elephant.prototype.trumpet = function () {

  console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function () {
  //this.height += 12;
  this.height = this.height + 12;
};

Elephant.prototype.addTrick(trick) = function(){
  this.tricks.push(trick)
};

Elephant.prototype.play = function () {
  trick = 
  console.log(`${this.name} is ${trick}!`)
  
}; 


let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

const random = Math.floor(Math.random() * months.length);