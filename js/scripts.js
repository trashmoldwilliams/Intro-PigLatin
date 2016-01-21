var pigLatin = function(englishWord) {
  var splitAt = hasVowelAt(englishWord);
  var qu = startsWithQU(englishWord);
  var isY = whereYAt(englishWord);

  if (qu === true) {
    return englishWord.slice(2) + englishWord.slice(0, 2) + 'ay';
  } else if (isY > 0) {
    return englishWord.slice(isY) + englishWord.slice(0, isY) + 'ay';
  } else
    return englishWord.slice(splitAt) + englishWord.slice(0, splitAt) + 'ay';
  };



var hasVowelAt = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var letters = word.split("");
  for (var i = 0; i < letters.length; i++) {
    for (var j = 0; j < vowels.length; j++){
      if (letters[i] === vowels[j]) {
        return i;
      }
    }
  }
};

var startsWithQU = function(word) {
  if (word.substring(0, 2) === "qu") {
  return true;
}
}

var hasQUin = function(word) {
  if (word.substring(1, 3) === "qu") {
    return true;
  }
}

var whereYAt = function(word) {
  var letters = word.split("");
  for (var i = 0; i < letters.length; i++) {
    if (letters[i] === 'y') {
      return i;
    }
  }
}
