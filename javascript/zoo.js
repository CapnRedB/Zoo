var Animal = require('./animal');

function Zoo(location, name) {
 // write code here
 this.location=location;
 this.name=name;
 this.animals= [];
 this.status="closed";
}


Zoo.prototype.isOpen = function(){
  if(this.status==="closed")
    return false;
  if(this.status==="open")
    return true;
  return false;
} // write more code here
Zoo.prototype.open = function(){
  this.status="open";
}
Zoo.prototype.addAnimal = function(animal){
  if(animal instanceof Animal){
  if(this.isOpen()){
    for(var i=0;i<this.animals.length; i++){
      if(animal.name===this.animals[i].name){
        return "Animal is already in.";
      }
    }
    this.animals.push(animal);
  }
}
}
Zoo.prototype.removeAnimal = function(animal){
  if(this.isOpen()){
  for(var i=0; i<this.animals.length; i++){
    if(animal.name===this.animals[i].name){
      this.animals.splice(i, 1)
    }
  }
}
}
Zoo.prototype.changeLocation = function(location){
  this.location=location;
}
Zoo.prototype.close = function(){
  this.status="closed";
}
module.exports = Zoo;
