// Chiedi un numero di 4 cifre all’utente
// e calcola la somma di tutte le cifre che compongono il numero.

const input = prompt("inserisci un numero");


if(isNaN(input)){
    alert("valore non numerico inserito...ricarica la pagina ed inserisci un numero!");
}else{
    
    let numeri=[];
    let somma=0;
    
    
    document.querySelector("#in-number").innerText = "Il numero che hai inserito è: " + input;
    
    for(let i=0; i<input.length; i++){
        numeri[i]=Number(input[i]);
        somma+=numeri[i];
    }
    
    
    document.querySelector("#result").innerText = "La somma delle cifre del numero inserito è: " + somma;

}

