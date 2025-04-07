let userNumber;
let userChoice;

do {
  userChoice = prompt("Scegli se pari o dispari", "pari");
} while (userChoice !== "pari" && userChoice !== "dispari");

do {
  userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
} while (isNaN(userNumber) || userNumber < 1 || userNumber > 5);

//Funzione che genera il numero random
// const pcNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
const pcNumber = randomNumber(5);

console.log("User Chioce: " + userChoice);
console.log("User Number: " + userNumber);
console.log("PC Number: " + pcNumber);

const sumNumbers = userNumber + pcNumber;

console.log("Sum: " + sumNumbers);

// Funzione che definisce se il numero passato è pari
const evenWin = userWin(sumNumbers);

console.log("pari? " + evenWin);

if ((userChoice === "pari") & evenWin) {
  console.log("Ha vinto l'utente");
} else if ((userChoice === "dispari") & !evenWin) {
  console.log("Ha vinto l'utente");
} else {
  console.log("Ha vinto il pc");
}

/**
 * Questa funzione genera un numero casuale tra minimo e massimo che vengono passati
 * @param {number} max numero massimo del range
 * @param {number} min numero minimo del range
 * @returns {number} numero che viene generato
 */
function randomNumber(max, min = 1) {
  const number = Math.floor(Math.random() * (max - min)) + min;
  return number;
}

/**
 * Questa funzione verifica se il numero è pari
 * @param {number} num la somma del numero dell'utente e del computer
 * @returns {boolean} isEvenWin ritorna True se il numero è pari e false se è dispari
 */
function userWin(num) {
  const isEvenWin = num % 2 === 0 ? true : false;
  return isEvenWin;
}
