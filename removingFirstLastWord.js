function removeChar(str) {
  //You got this!
  var newStr = "";
  for (i = 0; i < str.length; i++) {
    newStr += str[i + 1];
    if (i === str.length - 3) {
      return newStr;
    }
  }
}
removeChar("japan");



// ------------------------


function removeChar(str) {
    //You got this!
  return str.slice(1, -1)
  }
  