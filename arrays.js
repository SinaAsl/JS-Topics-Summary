var numbers = []

numbers.push("3")
numbers.push("45","32","60")

console.log(numbers)

numbers.pop()

console.log(numbers)


// -----------------

function arrayTemplate(x, y, z){


var arr = [];
arr.push(x);
arr.push(y);
arr.push(z);

return arr;

};

var fruits = arrayTemplate("banana", "strawberry", "apple");

console.log(fruits)