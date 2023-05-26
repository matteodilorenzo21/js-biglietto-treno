# CALCOLO BIGLIETTO
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
<br>
<br>
- il prezzo del biglietto è definito in base ai km (0.21 € al km);
<br>
- va applicato uno sconto del 20% per i minorenni;
<br>
- va applicato uno sconto del 40% per gli over 65.
<br>
<br>
# STEPS

0. Selezionare l'elemento dal DOM;
1. Chiedere all'utente il numero di chilometri da percorrere;
2. Chiedere all'utente l'età
3. Calcolare il prezzo totale del viaggio arrotondato al centesimo;
4. Applicare lo sconto ove richiesto:<br>
   - **SE** l'età inserita è <= 17 applicare uno sconto del 20% al risultato;<br>
   - **SE** l'età inserita è >= 65 applicare uno sconto del 40% al risultato;
5. Stampare il risultato ottenuto nell'elemento del DOM.