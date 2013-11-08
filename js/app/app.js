/*global cfx:false, document:false, $:false, window:false*/
var chart1;

function carregarGraphico() {
    "use strict";
    var data, divHolder;
    chart1 = new cfx.Chart();
    chart1.getAnimations().getLoad().setEnabled(true);
    
    chart1.getAxisY().setMin(0);
    chart1.getAxisY().setMax(14000);
    chart1.setGallery(cfx.Gallery.Bar);
    data = [{ "Answer": "Yes", "Female": 22000, "Male": 23356 }, { "Answer": "No", "Female": 27000, "Male": 21351 }, { "Answer": "Undecided", "Female": 4823, "Male": 8314}];
    chart1.setDataSource(data);
    
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;