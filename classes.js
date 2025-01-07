class Car {
  constructor(color, speed) {
    (this.color = color);
     (this.speed = speed);
  }
  turboOn() {
    console.log("engine is running");
  }
}
const car1 = new Car("red", "120MPH")
car1.turboOn();




// -------------------


class Train{
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn

    }

}

var myNewTrain = new Train("red", false);

console.log(myNewTrain)



// ---------------------

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //



// ----------------------


class Car {
    constructor(color, weight) {
        this.color = color;
        this.weight = weight;
    }

    drive(mileage, fuelConsumption) {
        var fuelCon = mileage * fuelConsumption;
        return fuelCon;
    }
}

// Example of creating an instance and using the drive method
const myCar = new Car('red', 1500);
const fuelUsed = myCar.drive(100, 0.05); // Example mileage and fuel consumption
console.log(fuelUsed);

// example of using 4xw for car

class FourWheelCar extends Car {
    constructor(color, weight, fourWheel) {
        super(color, weight); // Call the parent class constructor
        this.fourWheel = fourWheel; // New property for four-wheel drive
    }

    // You could also add a method specific to four-wheel cars if needed
    isFourWheel() {
        return this.fourWheel;
    }
}

// Example of creating an instance of FourWheelCar
const myFourWheelCar = new FourWheelCar('blue', 1800, true);
console.log(myFourWheelCar.isFourWheel()); // Outputs: true



// example of creating an autopilot functionality
class AutoPilotCar extends FourWheelCar {
    constructor(color, weight, fourWheel, autoPilot) {
        super(color, weight, fourWheel);
        this.autoPilot = autoPilot;
    }

    isAutoPilot() {
        return this.autoPilot;
    }
}

// Example of creating an instance of AutoPilotCar
const myAutoPilotCar = new AutoPilotCar('black', 2000, true, true);
console.log(myAutoPilotCar.isAutoPilot()); // Outputs: true