// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array

let numbers=[];

for(let j=0,i=0; i<6; i++){
    var n =Number(prompt("Inserisci un numero"));
    console.log(n);

    if(n % 2 != 0){
        numbers[j++]=n;
    }
}

console.log(numbers);