function getVowelsInTheString(str) {
  const strLower = str.toLowerCase(str.split(''));
  const vowels = 'aeiou'.split('');
  const commonVowels = [];
  for (let i = 0; i < strLower.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (strLower[i] === vowels[j]) {
        if (commonVowels.indexOf(vowels[j]) < 0) {
          commonVowels.push(vowels[j]);
        }
      }
    }
  }
  console.log(`Vowels: ${commonVowels.join(', ')}`);
}
getVowelsInTheString('Umuzi');
