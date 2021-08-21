function convertAnyNumberIntoHoursAndMinutes(num){
    var hour = Math.floor(num / 60);  
    var minute = num % 60;
    return  hour + " hours, " + minute + " minutes";
}
console.log(convertAnyNumberIntoHoursAndMinutes(60));
console.log(convertAnyNumberIntoHoursAndMinutes(133));