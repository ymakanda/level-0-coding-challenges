function getVowelsInTheString(strg){
 
    let starRegex = /[ui]/gi; 
    let result = strg.match(starRegex);

    console.log("vowels in the string: " +result);
}
getVowelsInTheString("Umuzi");