// 5. Write a JavaScript function that takes a paragraph and a character as input and returns an object containing the count of that character in uppercase, lowercase, and total (combined case-insensitive) within the paragraph. The object should be in the format: { capital: 5, small: 2, total: 7 }.

// For example, if the input paragraph is "The quick brown fox jumps over the lazy dog." and the character is "o", the function should return { capital: 0, small: 4, total: 4 }.

// Ensure your code is case-insensitive and handles both uppercase and lowercase instances of the character.
let uppercase = 0,
  lowercase = 0,
  total = 0,
  charLower,
  charUpper;
function fun(paragraph, character) {
  charLower = character.toLowerCase();
  charUpper = charLower.toUpperCase();
  let object = paragraph.split("");
  object.map(mapFun);
  return object;
}
function mapFun(chr) {
  if (chr === charLower) {
    total++;
    lowercase++;
  }

  if (chr === charUpper) {
    total++;
    uppercase++;
  }
}
fun("Hello my Name is Saad. A", "a");
console.log(`{ capital: ${uppercase}, small: ${lowercase}, total: ${total}}.`);
