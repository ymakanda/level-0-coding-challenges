function getCommonCharactersOrLetters(str1, str2) {
  const strcom1 = str1.split('');
  const strcom2 = str2.split('');
  const common = [];
  for (let i = 0; i < strcom1.length; i++) {
    for (let j = 0; j < strcom2.length; j++) {
      if (strcom1[i] === strcom2[j]) {
        common.push(strcom1[i]);
      }
    }
  }
  console.log(`Common letters: ${common}`);
}
getCommonCharactersOrLetters('computers', 'house');
