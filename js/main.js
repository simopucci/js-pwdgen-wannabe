const passGenerated = document.getElementById("pwgen");

// Chiedo il nome
const yourName = prompt('Qual è il tuo nome?');
console.log(yourName);

// Chiedo il cognome
const yourSurname = prompt('Qual è il tuo cognome?');
console.log(yourSurname);

// Chiedo il colore preferito
const yourColor = prompt('Qual è il tuo colore preferito?');
console.log(yourColor);

// Calcolo le 3 informazioni e le salvo
const yourPassword = yourName + yourSurname + yourColor + "24";
console.log(yourPassword);

// Stampo la variabile 
passGenerated.innerText = "La password che abbiamo generato per te è: " + yourPassword;