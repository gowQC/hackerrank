let string = "he quick brown fox jumps over he lazy dog.";

function pangrams(s) {
  // represents all 26 letters in the alphabet
  // 0 means none exist in the string, 1 means the letter exists in the string
  const letters = new Array(26).fill(0);

  // populate arrays with 1 representing "true" for index respective to the letter it represents
  let counter = 0;
  while (counter < s.length) {
    // isolates the letter and makes it lowercase during comparison
    let letter = s.charAt(counter).toLowerCase();
    if (letter.charCodeAt(0) >= 97 && letter.charCodeAt(0) <= 122) {
      letters[letter.charCodeAt(0) - 97] = 1;
    }
    counter++;
  }

  if (letters.every((index) => index === 1)) {
    return "pangram";
  }
  return "not pangram";
}

console.log(pangrams(string));
