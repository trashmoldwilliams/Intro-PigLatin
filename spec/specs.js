describe('hasVowelAt', function() {
  it("returns position of vowel in specified spot", function() {
    expect(hasVowelAt('snack', 2)).to.equal(2);
  });

  it('returns false if a word does not have a vowel at specified spot', function (){
    expect(hasVowelAt('right', 1)).to.equal(1);
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


describe("hasQUin", function() {
  it("returns true if word has 'qu' in (1, 3) position", function() {
    expect(hasQUin('squitter')).to.equal(true);
  });
});

describe("startsWithQU", function () {
  it("returns true if first two letters are 'qu'", function () {
    expect(startsWithQU('quitter')).to.equal(true);
  });
});

describe("whereYAt", function() {
  it("find the position of 'y' when deeper than first position", function () {
    expect(whereYAt('thyme')).to.equal(2);
  })
})
