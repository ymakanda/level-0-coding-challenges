function getVowelsInTheString(str){

   var str = str.toLowerCase(str.split(''));
   var vowels = 'aeiou'.split('');
   var commonVowels = [];
   var i, j;
   for (i = 0; i < str.length; i++) {
      for (j = 0; j < vowels.length; j++) {
         if(str[i] === vowels[j]){
            if (commonVowels.indexOf(vowels[j]) < 0){
                commonVowels.push(vowels[j])
            }
         }
      }
   }
   console.log("Vowels: " + commonVowels);
}
getVowelsInTheString("Umuzi");