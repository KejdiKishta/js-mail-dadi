"use strict"

//* array con le mail valide
let validMails = ["Pincopallo@gmail.com", "Pippo25@gmail.com", "Pluto.e.non.plutone@planet.it"];
console.log(validMails);

//* input richiesta mail all'user
let mailPrompt = prompt("Inserisci una mail valida per l'accesso");
console.log(mailPrompt);

//* variabile falsa in partenza che diventa vera quando la mail inserita dall'user è uguale a una di quelle presenti nell'array
let correctMail = false

//* ciclo for per conforntare la mail inserita con l'array
for (let i = 0; i < validMails.length; i++) {

    if(mailPrompt === validMails[i]) {
        correctMail = true
    }
}

//* condizione se la variabile diventa true puoi entrare
if (correctMail === true) {
    console.log("puoi entrare");
} else {
    console.log("non puoi entrare");
}