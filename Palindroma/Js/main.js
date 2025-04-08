let userWord;
let reverseUserWord = "";

do {
  userWord = prompt("Inserisci una parola");
} while (userWord.length < 2);

console.log("User Word: " + userWord);

const isPalindroma = isWordPalindroma(userWord);
if (isPalindroma) console.log("La parola è palindroma");
else console.log("La parola non è palindroma");

function isWordPalindroma(userWord) {
  for (i = userWord.length - 1; i >= 0; i--) {
    const currentValue = userWord[i];
    reverseUserWord += currentValue;
  }
  console.log("Reverse User Word: " + reverseUserWord);
  const isPalindroma = userWord === reverseUserWord ? true : false;
  return isPalindroma;
}
