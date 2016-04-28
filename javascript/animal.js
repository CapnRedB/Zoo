function Animal(kind, sound, name, age){
  // write code here
  this.kind = kind;
  this.sound=sound;
  this.name=name;
  this.age=age;
  this.awake=false;
}

Animal.prototype.wakeUp = function(){
    this.awake=true;
} // write more code here
Animal.prototype.speak = function(){
  return this.sound;
}
Animal.prototype.feed = function(){
  if(this.awake===true)
    return "NOM NOM NOM";
  return undefined;
}
Animal.prototype.growUp = function(){
  this.age++;
}
Animal.prototype.sleep = function(){
  awake=false;
}


module.exports = Animal;
