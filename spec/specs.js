describe('hasVowelAt', function() {
  it("returns position of vowel in specified spot", function() {
    expect(hasVowelAt('snack', 2)).to.equal(true);
  });

  it('returns false if a word does not have a vowel at specified spot', function (){
    expect(hasVowelAt('right', 0)).to.equal(false);
  });
});

describe('pigLatin', function() {
  it("adds 'ay' to the end of a word that starts with a", function() {
    expect(pigLatin("apple")).to.equal("appleay");
  });

  it("adds 'ay' to the end of any word with a vowel", function() {
    expect(pigLatin('order')).to.equal('orderay');
  });  
});

describe('consonantsCheck', function() {
  it("is true for a word that starts with a consonant", function() {
    expect(consonantsCheck('snack')).to.equal(true);
  });

  it("returns positions of initial consonants", function() {
    expect(consonantsCheck('told')).to.equal(0);
  });
});
