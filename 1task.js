const sentence = prompt("Enter a sentence: ");

let wordCount = 0;
let vowelCount = 0;
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === ' ') {
    wordCount++;
  } else if (vowels.includes(sentence[i])) {
    vowelCount++;
  }
}

wordCount++; // add one to account for the last word in the sentence

console.log(`The number of words in the sentence is: ${wordCount}`);
console.log(`The number of vowels in the sentence is: ${vowelCount}`);
