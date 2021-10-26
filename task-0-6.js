function getMaxNumber(...args) {
  const numericArray = [];
  let max = args[0];
  for (let i = 0; i < args.length; i++) {
    numericArray.push(args[i]);
  }
  for (let i = 0; i < numericArray.length; i++) {
    if (numericArray[i] > max) {
      max = numericArray[i];
    }
  }
  return max;
}
getMaxNumber(-90, -30, -4, -10);
