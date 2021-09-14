 function getMaxNumber(){

    let numericArray = [];
    let max = arguments[0];
    

    for(let i = 0; i < arguments.length; i++){
      numericArray.push( arguments[i]);
    }
    for (let i = 0; i < numericArray.length ; i++) {
      if (numericArray[i] > max) {
          max = numericArray[i];
      }
    }
    return max;
}
getMaxNumber(-90, -30, -4, -10);