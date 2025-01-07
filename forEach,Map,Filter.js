// The forEach() method

const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

/*
0. kiwi
1. mango
2. apple
3. pear
*/

// ---------------
const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggie}`);
});



// The filter() method


const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// [30,40,50]



// The map method

[0,10,20,30,40,50].map( function(num) {
    return num / 10
})


// [0,1,2,3,4,5]




// examples


const result = [];
const drone = {
    speed: 100,
    color: 'yellow'
}
const droneKeys = Object.keys(drone);
droneKeys.forEach( function(key) {
    result.push(key, drone[key])
})
console.log(result)

// ['speed',100,'color','yellow']
