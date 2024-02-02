// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero,
// Solo se è dispari inseriscilo nell’array.
// Stampa a schermo il contenuto dell'array


const inputOlElement= document.querySelector("#input");
const outputOlElement= document.querySelector("#output");
let numbers=[];

let liElement;

for(let j=0,i=0; i<6; i++){
    var n =Number(prompt("Inserisci un numero"));

    liElement = document.createElement("li");
    liElement.innerText = n;
    inputOlElement.append(liElement);

    if(n % 2 != 0){
        numbers[j]=n;
        liElement = document.createElement("li");
        liElement.innerText = numbers[j++];
        outputOlElement.append(liElement);
    }
}
