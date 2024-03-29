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

    if (randomNumberUser === 1) {
        document.querySelector(".user-img").innerHTML = `<img src="./dice faces/dice-six-faces-one.svg">`
    } else if (randomNumberUser === 2) {
        document.querySelector(".user-img").innerHTML = `<img src="./dice faces/dice-six-faces-two.svg">`
    } else if (randomNumberUser === 3) {
        document.querySelector(".user-img").innerHTML = `<img src="./dice faces/dice-six-faces-three.svg">`
    } else if (randomNumberUser === 4) {
        document.querySelector(".user-img").innerHTML = `<img src="./dice faces/dice-six-faces-four.svg">`
    } else if (randomNumberUser === 5) {
        document.querySelector(".user-img").innerHTML = `<img src="./dice faces/dice-six-faces-five.svg">`
    } else if (randomNumberUser === 6) {
        document.querySelector(".user-img").innerHTML = `<img src="./dice faces/dice-six-faces-six.svg">`
    }

    if (randomNumberCpu === 1) {
        document.querySelector(".cpu-img").innerHTML = `<img src="./dice faces/dice-six-faces-one.svg">`
    } else if (randomNumberCpu === 2) {
        document.querySelector(".cpu-img").innerHTML = `<img src="./dice faces/dice-six-faces-two.svg">`
    } else if (randomNumberCpu === 3) {
        document.querySelector(".cpu-img").innerHTML = `<img src="./dice faces/dice-six-faces-three.svg">`
    } else if (randomNumberCpu === 4) {
        document.querySelector(".cpu-img").innerHTML = `<img src="./dice faces/dice-six-faces-four.svg">`
    } else if (randomNumberCpu === 5) {
        document.querySelector(".cpu-img").innerHTML = `<img src="./dice faces/dice-six-faces-five.svg">`
    } else if (randomNumberCpu === 6) {
        document.querySelector(".cpu-img").innerHTML = `<img src="./dice faces/dice-six-faces-six.svg">`
    }


    //? consizioni di vincita perdita e pareggio
    if (randomNumberUser > randomNumberCpu) {
        document.querySelector("#winner").innerHTML= `<p class="red">PIPPO VINCE!</p>`
    } else if (randomNumberUser < randomNumberCpu) {
        document.querySelector("#winner").innerHTML= `<p class="blue">COMPUTER VINCE!</p>`
    } else {
        document.querySelector("#winner").innerHTML= `<p>PAREGGIO</p>`
    }
})
