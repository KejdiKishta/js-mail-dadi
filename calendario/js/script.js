let giorniSett = ["Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato", "Domenica"];

for (let i = 1; i <= 31; i++) {
    let giornoDellaSettimana = giorniSett[(i - 1) % 7] ;
    let numeroGiorno = i + " " + giornoDellaSettimana;
    console.log(numeroGiorno);
}
