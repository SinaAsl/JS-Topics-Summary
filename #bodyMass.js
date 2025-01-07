function bmi(weight, height) {
    let bodyMass = weight/(Math.pow(height, 2))
    if(bodyMass <= 18.5){
      return "Underweight";
    }else if(bodyMass <= 25.0 ){
      return "Overweight"
    }else if(bodyMass > 30){
      return "Obese"
    }
  }
 bmi(80, 1.80);
 


 function bmi(weight, height) {
    let bodyMass = weight/(Math.pow(height, 2))

        switch(true){
            case bodyMass <= 18.5:
                return "Underweight";
             case bodyMass <= 25:
                return "Normal";
            case bodyMass <= 30:
                return "Overweight";
            case bodyMass > 30:
                return "Obese"}}