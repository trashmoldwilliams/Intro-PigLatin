var pigLatin = function(englishWord) {
  if (hasVowelAt(englishWord, 0)) {
    var translatedWord = englishWord;
  } else if (hasVowelAt(englishWord, 3)) {
    var translatedWord = englishWord.slice(3) + englishWord.slice(0, 3);
  } else if (hasVowelAt(englishWord, 2)) {
    var translatedWord = englishWord.slice(2) + englishWord.slice(0, 2);
  } else if (hasVowelAt(englishWord, 1)) {
    var translatedWord = englishWord.slice(1) + englishWord.slice(0, 1);
  }
    console.log(translatedWord);
    return translatedWord + 'ay';
  };

var hasVowelAt = function(word, position) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
    for (var i = 0; i < vowels.length; i++) {
    if (word[position] === "y") {
      if (position > 0) {
      return true;
    }

    } else if (word[position] === vowels[i]) {
      return true;
    }
  }
  return false;
};
