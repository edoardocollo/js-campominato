var mainContent = document.getElementById('body');
// mainContent.innerHTML = '  <button id="biglietto-treno" type="button" name="button">biglietto treno</button><button id="biglietto_treno_form" type="button" name="button">biglietto treno form</button><button id="campominato" type="button" name="button">campominato</button><button id="fizzbuzz" type="button" name="button">fizzbuzz</button><button id="lista_cognomi" type="button" name="button">lista cognomi</button><button id="mail_dadi" type="button" name="button">mail dadi</button><button id="paliedispari" type="button" name="button">paliedispari</button><button id="wannabe" type="button" name="button">wannabe</button>';
var bigliettoTrenoButton = document.getElementById('biglietto_treno');
bigliettoTrenoButton.addEventListener('click',
  function(){
    mainContent.innerHTML = '<div id="main_wrap"><div class="wrap"><h1>Il biglietto che vuoi acquistare prevede una tratta di <span id="numero_km"></span> km</h1><h2>Il costo del biglietto è di <span id="costo_biglietto"></span> euro</h2><h2 id="sconto_minorenni"></h2><h2 id="sconto_over"></h2></div></div><script type="text/javascript" src="/content/js-biglietto-treno/assets/js/main.js">';
  }
);
