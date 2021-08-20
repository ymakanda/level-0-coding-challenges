 function getMaxNumber(){

    var numericArray = [];
    var max = arguments[0];
    var i;

    for(var i = 0; i < arguments.length; i++){
      numericArray.push( arguments[i]);
    }
    for (i = 0; i < numericArray.length ; i++) {
      if (numericArray[i] > max) {
          max = numericArray[i];
      }
    }
    return max;
}
getMaxNumber(-90, -30, -4, -10);