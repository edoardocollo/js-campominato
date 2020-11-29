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



// RICHIEDO E GENERO VARIABILE DIFFICOLTA'
/////////////////////////////////////////////
var selezioneUtenteDifficolta = Number(prompt('inserisci la difficoltà con un numero da 1 a 3'));
var difficolta;

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



// GENERO ARRAY BOMBE
//////////////////////////
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
  console.log(numeriVietati.sort());












// GENERO CAMPO DA GIOCO
//////////////////////////////////
var playGround = $('#play_ground');

// GENERO CASELLE IN BASE ALLA DIFFICOLTA'
/////////////////////////////////////////////
for (var i = 0; i < difficolta; i++) {
  var contenutoPrecedente = playGround.html();
  playGround.html(contenutoPrecedente + '<div class="casella">'+(i + 1)+'</div>');
}
// RESTITUZIONE VALORE AL CLICK
//////////////////////////////////
var casella = $('.casella');
var punteggio = 0;
casella.click(function(){
  if(isInList(numeriVietati,$(this).text())){
    alert('hai perso');
  }else if(!(isInList(numeriVietati,$(this).text()))){
    $(this).addClass('hide_cell');
    punteggio++;
    if (punteggio == (difficolta - 16)) {
      alert('hai vinto');
    }
  }
  console.log(punteggio);
});
