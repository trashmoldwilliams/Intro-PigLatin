var vowelCheck = function(word) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var firstLetter = word.charAt(0);
    for (var i = 0; i < vowels.length; i++) {
      if (firstLetter === vowels[i]) {
        return true;
      }
    }
}
