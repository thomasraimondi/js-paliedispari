const userWord = prompt("Inserisci una parola");
let reverseUserWord = "";
console.log("User Word: " + userWord);

for (i = userWord.length - 1; i >= 0; i--) {
  const currentValue = userWord[i];
  reverseUserWord += currentValue;
}

console.log("Reverse User Word: " + reverseUserWord);

const isPalindroma = userWord === reverseUserWord ? true : false;

console.log("La parola è palindroma: " + isPalindroma);
