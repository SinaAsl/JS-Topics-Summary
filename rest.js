const top7 = ["Colosseum", "Roman Forum", "Vatican", "Trevi Fountain", "Pantheon", "Piazza Venezia", "Palatine Hill"];
const [first, second, third, ...secondVisit] = top7;

console.log(first); // Colosseum
console.log(secondVisit); // ["Trevi Fountain", "Pantheon", "Piazza Venezia", "Palatine Hill"]




// example:

function addTaxToPrices(taxRate, ...prices) {
    return prices.map(price => price + price * taxRate);
}

const totalPrices = addTaxToPrices(0.1, 100, 200, 300);
console.log(totalPrices); // [110, 220, 330]




// example

function collectNames(greeting, ...names){
    var greeting = "Hey guys!"

    return names


}

const arrName = collectNames("Ying", "max", "joe");
console.log(arrName)