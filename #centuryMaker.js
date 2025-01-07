function century(year) {
    // Finish this :)
var newYear = year.toString()

    if(newYear.length == 4){
      var cen = Number(newYear.slice(0, 2))
    return cen + 1;
  }else{
    return 1
  }
    }



    // ---------------




// function century(year) {
//     // Finish this :)


//     switch(year){
//         case year.length == 4:
//             return year.slice(0, 2);
//         default:
//         return 1
//     }
//     }

//     century(1999)

