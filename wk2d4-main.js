function countVowels(str) {
  let vowelCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u"
    ) {
      console.log(str[i]);
      vowelCount += 1;
    }
  }
  console.log(vowelCount);
  return vowelCount;
}

console.assert(countVowels("you") === 2);
console.assert(countVowels("got") === 1);
console.assert(countVowels("this") === 1);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
