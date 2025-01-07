// Task 1
var dairy = [
  "cheese",
  "sour cream",
  "milk",
  "yogurt",
  "ice cream",
  "milkshake",
];

function logDairy() {
  for (let i of dairy) console.log(i);
}
logDairy(dairy);

// Task 2

const animal = {
  canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan() {
  for (const [key, value] of Object.entries(bird)) {
    console.log(`${key}: ${value}`);
  }
}

birdCan();

// Task 3


function animalCan() {
  for (const prop in bird) {
    console.log(`${prop}: ${bird[prop]}`);
  }
}

animalCan();
animalCan(bird);


  
  
  
  /* Passed: Console logged expected values for logDairy
  FAILED: Console logged expected values for birdCa
   - returned TypeError: Cannot convert undefined or null to object but expected canFly: truehasFeathers: true
  FAILED: Console logged expected values for animalCan
   - returned [object Object][object Object][object Object] but expected canFly: truehasFeathers: truecanJump: true