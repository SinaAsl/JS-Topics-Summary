var age = 36;
if(age > 65){

    console.log("you get income from pension");

}else if(age < 65 && age >= 18){

    console.log("each month you get the salary")
}else if (age < 18){
    console.log("You get the allowance")
}else{
    console.log("The value of the age variable is not numerical")
}

var day = "Monday";

switch (day) {
  case "Monday":
    console.log("Do something");
    break;
  case "Tuesday":
    console.log("Do something");
    break;
  case "Wednesday":
    console.log("Do something");
    break;
  case "Thursday":
    console.log("Do something");
    break;
  case "Friday":
    console.log("Do something");
    break;
  case "Saturday":
    console.log("Do something");
    break;
    case "Sunday":
        console.log("Do something");
        break;
  default:
    console.log("There is no such day");
    break;
}


for(var i = 1; i <= 10 ; i++){
  switch(i){
      case  1:
      console.log("Gold medal");
      break;
      case  2:
      console.log("Silver medal");
      break;
      case 3:
      console.log("Bronze medal");
      break;
      default:
      console.log(i)
  }
  }