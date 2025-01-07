for (var i = 2010 ; i < 2020 ; i++){
    console.log(i)
    console.log("A new year")
    for(var j = 1 ; j < 13 ; j++){
        console.log(j)
        console.log("A new month")
        for(var n = 1 ; n < 31 ; n++){
            console.log(n)
        }
    }
}
// _______________________

for(var firstNum = 0 ; firstNum < 2 ; firstNum++){

    for( var secNum = 1 ; secNum < 10 ; secNum++){
        console.log( firstNum + "," + secNum)

    }
}

// ________________________

for(var firstNum = 0 ; firstNum < 2 ; firstNum++){

    for( var secNum = 1 ; secNum < 10 ; secNum++){
        console.log( firstNum, "times", secNum, " equal to", firstNum * secNum)
        
    }
}

// ________________________


for(var i = 100 ; i > 10 ; i = i - 10){

    for( var j = 10 ; j > 4 ; j = j - 5){
        console.log( i, "divide by ", j, " equal to", i / j)
        
    }
}

// ____________________