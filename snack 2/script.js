// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.



let numbers=[];
let somma=0;

for(let i=0; i<10; i++){
    numbers[i]=Number(prompt("inserisci un numero"));
    somma+=numbers[i];

}

console.log("somma: ", somma);

