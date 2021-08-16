function getMaximumNumber(num1, num2, num3, ...args){
     
   return (num1 > num2 && num1 > num3 && num1 > args) ? num1
        : (num2 > num1 && num2 > num3 && num2 > args) ? num2
        : (num3 > num1 && num3 > num2 && num3 > args) ? num3
        : args;
}
console.log(getMaximumNumber(90,30,4,10));