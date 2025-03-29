import words from "an-array-of-english-words";

const countLetters = word => {
  const letters = word.split("");
  const letterCount = {};

  letters.forEach(letter => {
    if (!letterCount[letter]) {
      letterCount[letter] = 0;
    }
    letterCount[letter] += 1;
  });

  return letterCount;
};

const findAnagrams = (word, allWords) => {
  const wordCount = countLetters(word);

  const filteredWords = allWords.filter(
    w => w.length === word.length && w !== word
  );

  const res = [];
  filteredWords.forEach(fw => {
    const fwCount = countLetters(fw);
    let isAnagram = true;

    for (const letter in wordCount) {
      if (wordCount[letter] !== fwCount[letter]) {
        isAnagram = false;
        break;
      }
    }

    if (isAnagram) {
      res.push(fw);
    }
  });

  return res;
};

console.log(findAnagrams("cinema", words));

/*
    Expected output: ['iceman', 'anemic']
*/
