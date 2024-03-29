"use strict"

//* array con le mail valide
let validMails = ["Pincopallo@gmail.com", "Pippo25@gmail.com", "Pluto.e.non.plutone@planet.it"];
console.log(validMails);


const sndBtn = document.querySelector(".invite-btn");

sndBtn.addEventListener("click", function() {
    //* input richiesta mail all'user
    let mailPrompt = document.getElementById("mail").value;
    console.log(mailPrompt);
    
    //* variabile falsa in partenza che diventa vera quando la mail inserita dall'user è uguale a una di quelle presenti nell'array
    let correctMail = false;
    
    //* ciclo for per conforntare la mail inserita con l'array
    for (let i = 0; i < validMails.length; i++) {
    
        if(mailPrompt === validMails[i]) {
            correctMail = true;
        }
    }
    
    //* condizione se la variabile diventa true puoi entrare
    if (correctMail === true) {
        window.location.href = "../../gioco dei dadi/index.html";
    } else {
        alert("Mail errata. Riprova!");
    }
})
