


/**
 * verifica se elemento è presente nella lista.
 *
 * @param {array}  numero da verificare.
 * @return {boolean}
 */
function isInList (lista, target){
  var lista;
  // console.log(lista);
  var target;
  // console.log(target);
  var control = false;
  for (var i = 0; i < lista.length; i++) {
    if (target == lista[i]){
      control= true;
    }
    // console.log(control, lista[i]);
  }
  // console.log(control);
  return control;
}

// BONUS
///////////////
// all’inizio il software richiede anche una difficoltà all’utente che cambia il range di numeri casuali:
// con difficoltà 0 => tra 1 e 100
// con difficoltà 1 =>  tra 1 e 80
// con difficoltà 2 => tra 1 e 50
var selezioneUtenteDifficolta = Number(prompt('inserisci la difficoltà con un numero da 1 a 3'));
var difficolta;
// if (selezioneUtenteDifficolta == 1) {
//   difficolta = 100;
// }else if(selezioneUtenteDifficolta == 2){
//   difficolta = 80;
// }else if(selezioneUtenteDifficolta == 3){
//   difficolta = 50;
// }
var selezioneError = true;

  switch (selezioneUtenteDifficolta) {
    case 1:
    difficolta = 100;

    break;
    case 2:
    difficolta = 80;

    break;
    case 3:
    difficolta = 50;

    break;
    default:
    difficolta = 100;
    alert('la selezione che hai compiuto non è valida! Il livello di difficoltà verrà settato a 1. Buona partita')
    break;
  }

// 1
///////////
// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
//

var numeriVietati = [];
var contatoreVietati = 0;
while (contatoreVietati !== 16) {
  var randomNumber = Math.floor(Math.random() * (difficolta - 1 + 1) ) + 1;
  if (isInList(numeriVietati, randomNumber) == false) {
    numeriVietati.push(randomNumber);
    contatoreVietati++;
  }

  console.log()


}
console.log(numeriVietati);


// 2
///////
// In seguito deve chiedere all’utente (100 - 16) volte di inserire un numero alla volta, sempre compreso tra 1 e 100.
// L’utente non può inserire più volte lo stesso numero.
// 3
///////

// Se il numero è presente nella lista dei numeri generati, la partita termina, altrimenti si continua chiedendo all’utente un altro numero.
// La partita termina quando il giocatore inserisce un numero “vietato” o raggiunge il numero massimo possibile di numeri consentiti.
var contatoreGioco = 0;
var listaNumeriUtente = [];
var exit = true;

while (contatoreGioco < (difficolta - 16) && exit == true) {
  var numeroUtente = prompt('inserisci un numero')
  if (isInList(numeriVietati, numeroUtente)) {
    console.log('hai parso con un punteggio di ' + contatoreGioco);
    exit = false;
  }else if(isInList(listaNumeriUtente, numeroUtente)) {
    alert('hai gia inserito questo numero, inserisci un numero che non hai già inserito');
  }else if(numeroUtente == '' || null){
    alert('il carattere che hai inserito non è un carattere valido, inserisci un numero');
  }else if(numeroUtente > difficolta){
    alert('il numero che hai inserito non è valido');
  }
  else{
    listaNumeriUtente.push(numeroUtente);
    contatoreGioco++;
  }
  console.log(numeroUtente,listaNumeriUtente,contatoreGioco)
}
// 4
////////

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
if (contatoreGioco  == (difficolta - 16)) {
  console.log('hai vinto con un punteggio di ' + contatoreGioco);
}
