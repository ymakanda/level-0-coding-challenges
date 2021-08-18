function getCommonCharactersOrLetters(str1, str2){
   
   str1 = str1.split('');
   str2 = str2.split('');
   var common = [];;
   var i, j;
   for (i = 0; i < str1.length; i++) {
      for (j = i + 0; j < str2.length; j++) {
         if(str1[i] == str2[j]){
            common.push( str1[i]);
         }
      }
   }
   console.log("Common letters: " + common);
}
getCommonCharactersOrLetters("house", "computers");
