//ESERCIZIO 1 IF ELSE----
// let v= 22
// if (v >= 1 && v < 18) {
//     console.log("Insufficente")
// } else if (v >= 18 && v <= 21) {
//     console.log("Sufficente")
// } else if (v >= 21 && v <= 24) {
//     console.log("Buono")
// } else if (v >= 24 && v <= 27) {
//     console.log("Distinto")
// } else if (v >= 27 && v <= 29) {
//     console.log("Ottimo")
// } else if (v =30) {
//     console.log("Eccellente")
// }
// COMPLETATO----

//ESERCIZIO 1 SWITCH-CASE----
//let v= 29
// switch (true) {
//     case v >= 1 && v < 18:
//         console.log("Insufficente")
//          break;
//     case v >= 18 && v <= 21:
//         console.log("Sufficente")
//         break;
//     case v >= 21 && v <= 24:
//         console.log("Buono")
//         break;
//     case v >= 24 && v <= 27:
//         console.log("Distinto")
//         break;
//     case v >= 27 && v <= 29:
//         console.log("Ottimo")
//         break;
//     case v = 30:
//         console.log("Eccellente")
//         break;
//default:
//         break;
// }
// COMPLETATO ----

          
//ESERCIZIO 2 IF-ELSE----
// let temperatura= 29
// if (temperatura < -10) {
//     console.log(" copriti…ancora ti raffreddi ")
// }
// else if (temperatura < 0) {
//     console.log(" non e’ tanto il freddo quanto l’umidità ")
// }
// else if (temperatura<20) {
//     console.log(" non ci sono piu’ le mezze stagioni ")
// }
// else if (temperatura < 30) {
//     console.log(" mi dia una peroni sudata ")
// }
// else if (temperatura>=30) {
//     console.log(" lu mare, lu sole, lu ientu ")
// }
// COMPLETATO ----


//ESERCIZIO2 SWITCH-CASE
//let temperatura=29
// switch (true) {
//     case temperatura < -10:
//         console.log(" copriti…ancora ti raffreddi " )
//      break;
//     case temperatura < 0:
//         console.log(" non e’ tanto il freddo quanto l’umidità ")
//         break;
//     case temperatura < 20:
//         console.log(" non ci sono piu’ le mezze stagioni ")
//         break;
//         case temperatura < 30:
//         console.log(" mi dia una peroni sudata ")
//         break;
//     case temperatura >= 30:
//         console.log(" lu mare, lu sole, lu ientu  ")
//         break;
//     default:
//         break;
// }
// COMPLETATO----


//ESERCIZIO 3----
// let bevanda= +prompt ("inserisci un numero")
// switch (bevanda) {
//     case 1:
//         console.log (" è stata selezionata l'acqua")
//         break;
//     case 2:
//         console.log(" è stata selezionata coca-cola")
//         break;
//     case 3:
//         console.log(" è stata selezionata birra")
//         break;


//     default:
//         console.log("numero non trovato")
//         break;
// }
// COMPLETATO----

//ESERCIZIO DEI DADI----
let tiri= 5;
let player1= 0
let player2=0

for (let i = 0; i < tiri; i ++) {
    player1 = player1 + Math.floor(Math.random() * (6 - 1 + 1) + 1);
    player2 = player2 + Math.floor(Math.random() * (6 - 1 + 1) + 1);

}
console.log(player1)
console.log(player2)
if (player1>player2){
    console.log("Ha vinto il giocatore 1")
}
else if (player2>player1){
    console.log("Ha vinto il giocatore 2")
}
else {
    console.log(" La partita è finita in pareggio")
}
