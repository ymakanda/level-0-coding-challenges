/*global console*/
function convertAnyNumberIntoHoursAndMinutes(num){
    let hour = Math.floor(num / 60);  
    let minute = num % 60;
    if((hour == 0 ) && (minute == 0)){
      return  hour + " hours, " + minute + " minutes";
    }else if((hour == 1) && (minute == 0)){
      return  hour + " hour, " + minute + " minutes";
    }else if((hour == 1) && (minute == 1)){
      return  hour + " hour, " + minute + " minute";
    }else if((hour == 2) && (minute == 1)){ 
      return  hour + " hours, " + minute + " minute";
    }else{
      return  hour + " hours, " + minute + " minutes";
    }
}

console.log(convertAnyNumberIntoHoursAndMinutes(0));
console.log(convertAnyNumberIntoHoursAndMinutes(60));
console.log(convertAnyNumberIntoHoursAndMinutes(61));
console.log(convertAnyNumberIntoHoursAndMinutes(121));
