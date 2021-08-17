function getVowelsInTheString(strg){
 
    let starRegex = /[aeiou]/ig; 
    let result = strg.match(starRegex);

    console.log("vowels in the string: " + result);
}
console.log(getVowelsInTheString("Umuzi"));

