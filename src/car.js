function Car(make, model, color){
  this.make = make;
  this.model = model;
  this.year = new Date().getFullYear();
  this.state = false;
  this.color = color;
  this.previousOwners = [];
  this.currentOwner = "manufacturer";
  this.passengers = [];
}

Car.prototype.sale = function(newOwner){
  this.previous_owners.push(this.current_owner);
  this.current_owner = newOwner;
};

Car.prototype.paint = function(newColor){
  this.color = newColor;
};

Car.prototype.start = function(){
  this.state = true;
};

Car.prototype.off = function(){
  this.state = false;
};

Car.prototype.driveTo = function(destination){
  if (this.state === true){
  console.log("driving to " + destination);
  }
};

Car.prototype.park = function(){
  if (this.state === false){
    console.log ("parked!!");
    return true;
  } else {
    console.log("failed to park.");
    return false;
  }
};

Car.prototype.pickUp = function(passenger){
  if (this.state === true){
  this.passengers.push(passenger);
  }
};

Car.prototype.dropOff = function(name){

  if (this.state === true){
  var index = this.passengers.indexOf(name);
  this.passengers.splice(index,1);
  }
};

module.exports=Car;