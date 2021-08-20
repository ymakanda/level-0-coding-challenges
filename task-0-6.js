 function getMaximumNumber(){

    var numeric_array = [];
    var max = arguments[0];
    var i;

    for(var i = 0; i < arguments.length; i++){
      numeric_array.push( arguments[i]);
    }
    for (i = 0; i < numeric_array.length ; i++) {
      if (numeric_array[i] > max) {
          max = numeric_array[i];
      }
    }
    return max;
}
getMaximumNumber(-90, -30, -4, -10);