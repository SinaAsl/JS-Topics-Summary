function abbrevName(name){
  
    //   uppercase the input
      var sepName = name.toUpperCase()
    //   split the name by its space between, and create an array
       sepName = sepName.split(" ")
    
    // taking the index of the array and seperate them by a dot
    return `${sepName[0][0]}.${sepName[1][0]}`
    
    
    
    }