// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.


const olElement = document.querySelector("ol");
let liElement;
let numbers=[];
let somma=0;

for(let i=0; i<10; i++){
    
    numbers[i]=Number(prompt("inserisci un numero"));

    liElement= document.createElement("li");

    liElement.innerText= numbers[i];

    olElement.append(liElement);

    somma+=numbers[i];

}

document.querySelector("#somma").innerText = "la somma dei numeri è: " + somma;

