function convertAnyNumberIntoHoursAndMinutes(num){
    var hours = Math.floor(num / 60);  
    var minutes = num % 60;
    return hours + " hours, " + minutes + " minutes"; 
}
console.log(convertAnyNumberIntoHoursAndMinutes(71));
console.log(convertAnyNumberIntoHoursAndMinutes(133));