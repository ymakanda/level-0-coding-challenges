function getCommonCharactersOrLetters(strg1, strg2){
    
    let fullString = strg1 +" "+ strg2;
    let commonRegex = /[oues]/gi; 
    let result = fullString.match(commonRegex); 

    console.log("Output: Common letters: " + result);
    
}
getCommonCharactersOrLetters("house", "computers");
