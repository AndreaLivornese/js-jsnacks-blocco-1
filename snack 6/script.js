// Calcola la somma e la media dei primi 10 numeri.

let somma=0;

for(let i=0; i<10; i++){

    somma+= i;

}


document.querySelector("#somma").innerText = "La somma dei primi 10 numeri (partendo da 0) è: " + somma;

let media= somma / 10;

document.querySelector("#media").innerText = "La media dei primi 10 numeri (partendo da 0) è: " + media;
