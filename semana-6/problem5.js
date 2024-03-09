function findNaughtyStep(original, modified) {
  if (original === modified) return "";

  const word = original.length > modified.length ? original : modified;
  const word2 = original.length < modified.length ? original : modified;

  for (let i in word) {
    if (word[i] !== word2[i]) {
      return word[i];
    }
  }
}

const original = "abcd";
const modified = "abcde";
console.log(findNaughtyStep(original, modified)); // 'e'

const original2 = "stepfor";
const modified2 = "steppfor";
console.log(findNaughtyStep(original2, modified2)); // 'f'

const original3 = "abcde";
const modified3 = "abcde";
console.log(findNaughtyStep(original3, modified3)); // ''
