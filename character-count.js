const countCharacter = (words, character) => {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    if (words[i].toLowerCase() === character.toLowerCase()) {
      count++;
    }
  }
  console.log(`The ${character} repeat ` + count + " times");
};
countCharacter("books", "O");
