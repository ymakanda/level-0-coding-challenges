/*global console*/
function getVowelsInTheString(str){
// eslint-disable-line no-console
   let strLower = str.toLowerCase(str.split(''));
   let vowels = 'aeiou'.split('');
   let commonVowels = [];
   for (let i = 0; i < strLower.length; i++) {
      for (let j = 0; j < vowels.length; j++) {
         if(strLower[i] === vowels[j]){
            if (commonVowels.indexOf(vowels[j]) < 0){
                commonVowels.push(vowels[j])
            }
         }
      }
   }
   console.log("Vowels: " + commonVowels);
}
getVowelsInTheString("Umuzi");