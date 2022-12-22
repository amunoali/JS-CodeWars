// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)!

function max(str){
    const characters = {};
  
    for (let character of str)
      characters[character] = characters[character] + 1 || 1;
  
    let maxCount = 0;
    let maxCharacter = null;
  
    for (let character in characters) {
      if (characters[character] > maxCount) {
        maxCount = characters[character];
        maxCharacter = character;
      }
    }
  
    return maxCharacter;
}

console.log(max("Hello World!"), "l")