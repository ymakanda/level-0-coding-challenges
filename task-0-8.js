function convertAnyNumberIntoHoursAndMinutes(num){
    var hour = Math.floor(num / 60);  
    var minute = num % 60;
    var totalHours = (hour <= 1) ?  hour + " hour, " : hour + " hours, "
    var totalMinutes = (minute <= 1) ?  minute + " minute" : minute + " minutes"

    return totalHours + totalMinutes;
}
console.log(convertAnyNumberIntoHoursAndMinutes(71));
console.log(convertAnyNumberIntoHoursAndMinutes(133));