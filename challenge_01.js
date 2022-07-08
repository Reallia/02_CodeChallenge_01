
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/



/******* Methode 1 *******/

// let zahl1, zahl2;
// zahl1 = prompt("Bitte eine Zahl eingeben: ");
// zahl2 = prompt("Bitte noch eine Zahl eingeben: ");

// summe = parseInt(zahl1) + parseInt(zahl2);               // 1. Rechenmethode

// console.log(summe);



/******* Methode 2 *******/

// let zahl1, zahl2;
// zahl1 = prompt("Bitte eine Zahl eingeben: ");
// zahl2 = prompt("Bitte noch eine Zahl eingeben: ");

// summe = zahl1*1 + zahl2*1;                              // 2. Rechenmethode

// console.log(summe);



/******* Methode 3 *******/

let zahl1, zahl2;
zahl1 = prompt("Bitte eine Zahl eingeben: ");
zahl2 = prompt("Bitte noch eine Zahl eingeben: ");

summe = zahl1 - - zahl2;                                    // 3. Rechenmethode

console.log(summe);