// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.


const longDivElement = document.querySelector("#long");
const shortDivElement = document.querySelector("#short");
const drawDivElement = document.querySelector("#draw");


// array  di string
let words=[];


// input
for(let i=0; i < 2; i++){
    words[i]=prompt("inserisci una parola");
}

if(words[0].length == words[1].length){

    drawDivElement.innerText = "le parole hanno la stessa lunghezza "

}else if(words[0].length > words[1].length){

    // output words[0]
    longDivElement.innerText += "La frase più lunga è: " + words[0];
   
    // output words[1]
    shortDivElement.innerText += "La parola più corta è: " + words[1];
    

}else{

    // output words[0]
    longDivElement.innerText += "La frase più lunga è: " + words[1];
    
    // output words[1]
    shortDivElement.innerText += "La parola più corta è: " + words[0];
   
}