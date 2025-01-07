/*
var greet = "Hello, ";
var place = "World"





greet.length; // 7
greet.charAt(0); // 'H'
"Wo".concat("rl").concat("d"); // 'World'

The indexOf returns the location of the first position that matches a character:
(lastIndexOf)

"ho-ho-ho".indexOf('h'); // 0
"ho-ho-ho".indexOf('o'); // 1
"ho-ho-ho".indexOf('-'); // 2


The split method chops up the string into an array of sub-strings:

"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']



There are also some methods to change the casing of strings. For example:  
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

*/


function makeUpperCase(str) {
    return str.toUpperCase();
  
  }

  makeUpperCase("hey")



  // --------------
  // Split

var a = [1, 2, 3, 4]
var b = [1]

  function arrayDiff(a, b) {
  
    return a.splice(b)
    
    
  }