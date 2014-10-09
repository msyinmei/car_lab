// this syntax (seperate variables with comma and remove the following var
//is common when you have more than one variable being declared at a time
var Car = require('../src/car.js'),
expect = require('chai').expect;

describe('Car', function(){

  var newCar;

  beforeEach(function(){
    // create a new myCar object each time
    newCar = new Car("Tesla", "Model S", "Zebra Stripe" );
  });

  describe('#year', function(){
    //think about using the new Date() and getFullYear functions
    it('should be the current year', function(){
      expect(newCar.year).to.equal(2014);
    });
  });

  describe('#state', function(){
    it('should initially be off', function(){
      expect(newCar.state).to.equal(false);
    });
  });

  describe('#previousOwners', function(){
    it('should initially be empty', function(){
      expect(newCar.previousOwners).to.eql([]);
    });
  });

  describe('#currentOwner', function(){
    it('should initially be manufacturer', function(){
      expect(newCar.currentOwner).to.equal("manufacturer");
    });
  });

  describe('#passengers', function(){
    it('should initially be empty', function(){
      expect(newCar.passengers).to.eql([]);
    });
  });

  // describe('#sale', function(){
  //   // newCar = new Car("Tesla", "Model S", "Zebra Stripe" );

  //   newCar.sale("Yin");
  //   it('should move currentOwner to previousOwners array', function(){
  //     expect(newCar.previousOwners).to.equal(["manufacturer"]);
  //   });
  //   it('should update currentOwner with the new owner', function(){
  //     expect(newCar.currentOwner).to.equal("Yin");
  //   });
  // });

  describe('#paint', function(){
    it('should update the color of myCar', function(){
      newCar.paint("Black");
      expect(newCar.color).to.equal("Black");
    });
  });

  describe('#start', function(){
    it('should update the state to on', function(){
      newCar.start();
      expect(newCar.state).to.equal(true);
    });
  });

  describe('#off', function(){
    it('should update the state to off', function(){
      newCar.off();
      expect(newCar.state).to.equal(false);
    });
  });

  describe('#park', function(){
    it('should make sure to work when the car is off', function(){
      newCar.off();
      expect(newCar.park()).to.equal(true);
    });
    it('should make sure to not work when the car is on', function(){
      newCar.start();
      expect(newCar.park()).to.equal(false);
    });
  });

  describe('#pickUp', function(){
    it('should add the passenger to the passengers array if car is on', function(){
      newCar.start();
      newCar.pickUp("Jesse");
      expect(newCar.passengers).to.eql(["Jesse"]);
    });

    it('should not modify the passengers array if car is off', function(){
      newCar.off();
      newCar.pickUp("Jesse");
      expect(newCar.passengers).to.eql([]);
    });
  });

  describe('#dropOff', function(){
    it('should remove passenger from the passengers array if car is on', function(){
      newCar.start();
      newCar.pickUp("Jesse");
      newCar.dropOff("Jesse");
      expect(newCar.passengers).to.eql([]);
    });

    it('should leave passenger in the passengers array if car is off', function(){
      newCar.start();
      newCar.pickUp("Jesse");
      newCar.off();
      newCar.dropOff("Jesse");
      expect(newCar.passengers).to.eql(["Jesse"]);
    });
  });

});


