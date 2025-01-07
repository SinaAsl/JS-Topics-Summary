
// object.keys()

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
// So, when I run Object.keys() and pass it my car2 object,
//  the returned value is an array of strings,
//  where each string is a property key of the 
// properties contained in my car2 object.


// object.value()

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

// Object.entries() 

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); // [ ['speed', 400], ['color', 'magenta'] ]

// -----------------------

// example

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

// ------------------------


function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();


//   ---------------------

var people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

for (var person of people) {
    for (var key in person) {
        console.log(key + ": " + person[key]);
    }
}