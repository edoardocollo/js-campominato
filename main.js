// 1
///////////

// Il computer deve generare 16 numeri casuali tra 1 e 100.
// I numeri non possono essere duplicati.
//
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
  console.log(control);
  return control;
}
var numeriVietati = [];
var contatoreVietati = 0;
while (contatoreVietati !== 16) {
  var randomNumber = Math.floor(Math.random() * (16 - 1 + 1) ) + 1;
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



// 4
////////

// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha inserito un numero consentito.
