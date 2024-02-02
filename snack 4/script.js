// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

const input = prompt("inserisci un numero");

console.log(input);

let numeri=[];
let somma=0;

// numeri[0]=Number(input[0]);
// console.log(numeri[0]);

for(let i=0; i<input.length; i++){
    numeri[i]=Number(input[i]);
    somma+=numeri[i];
}


console.log(somma);