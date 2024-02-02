// Stampa il cubo dei primi N numeri,
// (partendo da 1, il numero N indicato dall'utente è compreso)
// dove N è un numero indicato dall’utente.



const n = Number(prompt("inserisci un numero"));
const olElement= document.querySelector("#output");
let liElement;

for(let i=1; i<=n; i++){
    liElement= document.createElement("li");

    var cube = i*i*i;

    liElement.innerText=cube;

    olElement.append(liElement);

}