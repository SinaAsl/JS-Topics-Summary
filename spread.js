const activitiesGroup1 = ['Visit Museum', 'Go Hiking', 'Have Picnic'];
const activitiesGroup2 = ['Go to Concert', 'Visit Amusement Park', 'Explore Local Market'];

// Using the spread operator to combine activities
const allActivities = [...activitiesGroup1, ...activitiesGroup2];

console.log(allActivities);
// Output: ['Visit Museum', 'Go Hiking', 'Have Picnic', 'Go to Concert', 'Visit Amusement Park', 'Explore Local Market']



const fruits = ['apple', 'banana', 'orange'];
const allFruits = ['grape', ...fruits];

// Output : ['apple', 'banana', 'orange', 'grape']



const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };


const mergedObj = {...obj1, ...obj2};



// Add new members to arrays without using the push() method

let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);


// Convert a string to an array using the spread operator

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']