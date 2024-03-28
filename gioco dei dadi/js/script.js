"use strict"

//* prelevo il button dall'html
const buttonGenerate = document.querySelector("#generate")
console.log(buttonGenerate);

//* aggiungo un event listener che al click del button crea due numeri casuali
buttonGenerate.addEventListener("click", function () {
    //? numeri casuali
    const randomNumberUser = Math.floor(Math.random() * 6) + 1;
    const randomNumberCpu = Math.floor(Math.random() * 6) + 1;
    console.log(randomNumberUser, randomNumberCpu);

    //? consizioni di vincita perdita e pareggio
    if (randomNumberUser > randomNumberCpu) {
        console.log("user vince");
    } else if (randomNumberUser < randomNumberCpu) {
        console.log("cpu vince");
    } else {
        console.log("pareggio");
    }
})
