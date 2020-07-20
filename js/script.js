// Button Genera.
document.getElementById('genera').addEventListener("click", function() {
    var nomeCognome = document.getElementById('nome-cognome').value;
    document.getElementById('nome-passeggero').innerHTML = nomeCognome;

    // Prendere un numero random da 1 a 10.
    var carrozza = Math.floor(Math.random() * 10) +1;
    document.getElementById('n-carrozza').innerHTML = carrozza;

    // Prendere un numero random da 90.000 a 999.999.
    var codiceCP = Math.floor(Math.random() * 10000) + 90000;
    document.getElementById('codice').innerHTML = codiceCP;

    // Calcolo prezzo del biglietto.
    var km = document.getElementById('km').value;
    var prezzo = km * 0.22;

    // Età del passeggero.
    var eta = document.getElementById('lista-eta').value;
    var offerta = "Tariffa Standard";

    // Funzione per calcolare il prezzo in base allo sconto.
    if (eta == "minorenne" ) {
        prezzo = prezzo - prezzo * 0.20;
        offerta = "Tariffa Minorenni";
        document.getElementById('costo').innerHTML = prezzo + " €";
        document.getElementById('offerta').innerHTML = offerta;
    } else if (eta == "over65") {
        prezzo = prezzo - prezzo * 0.40;
        offerta = "Tariffa Silver";
        document.getElementById('costo').innerHTML = prezzo + " €";
        document.getElementById('offerta').innerHTML = offerta;
    }

    document.getElementById('costo').innerHTML = prezzo.toFixed(2) + " €";
    document.getElementById('offerta').innerHTML = offerta;

    // Per poter vedere il biglietto quando si clicca su btn "genera".
    document.getElementById('biglietto').classList.add("show");
    document.getElementById('biglietto').classList.remove("hidden-b");
});

// Button Annulla.
document.getElementById('annulla').addEventListener("click", function() {
    // Per non vedere il biglietto quando si clicca su btn "annulla"
    document.getElementById('biglietto').classList.remove("show");
    document.getElementById('biglietto').classList.add("hidden-b");
})
