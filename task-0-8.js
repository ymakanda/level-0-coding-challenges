function convertAnyNumberIntoHoursAndMinutes(num) {
  const hour = Math.floor(num / 60);
  const minute = num % 60;
  if ((hour === 0) && (minute === 0)) {
    return `${hour} hours, ${minute} minutes`;
  } if ((hour === 1) && (minute === 0 || minute > 1)) {
    return `${hour} hour, ${minute} minutes`;
  } if ((hour === 1) && (minute === 1)) {
    return `${hour} hour, ${minute} minute`;
  } if ((hour === 2) && (minute === 1)) {
    return `${hour} hours, ${minute} minute`;
  }
  return `${hour} hours, ${minute} minutes`;
}

console.log(convertAnyNumberIntoHoursAndMinutes(0));
console.log(convertAnyNumberIntoHoursAndMinutes(71));
console.log(convertAnyNumberIntoHoursAndMinutes(60));
console.log(convertAnyNumberIntoHoursAndMinutes(61));
console.log(convertAnyNumberIntoHoursAndMinutes(121));
