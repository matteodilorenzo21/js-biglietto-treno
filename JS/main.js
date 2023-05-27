// JS RUN CHECK
console.log('JS OK!')

/*
0. Selezionare l'elemento dal DOM;

1. Chiedere all'utente il numero di chilometri da percorrere;

2. Chiedere all'utente l'età;

3. Calcolare il prezzo totale del viaggio arrotondato al centesimo;

4. Applicare lo sconto ove richiesto:

   - SE l'età inserita è <= 17 applicare uno sconto del 20% al risultato;

   - SE l'età inserita è >= 65 applicare uno sconto del 40% al risultato;

5. Stampare il risultato ottenuto nell'elemento del DOM.
*/


// #0
const priceResult = document.getElementById('result');
console.log(priceResult);

// #1 #2
const userDistance = parseInt(prompt('Inserire la distanza in chilometri', '525'));
const userAge = parseInt(prompt('Inserire l\'età del passeggero', '15'));

console.log(userDistance, typeof userDistance);
console.log(userAge, typeof userAge);

// ! VALIDATION ! //
if(isNaN(userDistance) || isNaN(userAge) || userDistance === 0 || userAge === 0) {
    alert('Inserisci dei valori validi');
    alert('Ricarica la pagina');
}

// #3
let ticketPrice = (userDistance * 0.21);
console.log(ticketPrice);

// #4
if ((userAge <= 17)) {
    ticketDiscount = ticketPrice - ((ticketPrice * 20) / 100);
} else if (userAge >= 65) {
    ticketDiscount = ticketPrice - ((ticketPrice * 40) / 100);
} else {
    ticketDiscount = ticketPrice;
}

console.log(ticketDiscount);

// #5
priceResult.innerText = '€' + ticketDiscount.toFixed(2);