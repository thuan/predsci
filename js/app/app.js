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
    data = $.getJSON('https://dataclips.heroku.com/fcroecrluhwltbjinstfqmwyneex.json');
    chart1.setDataSource(data);
    
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;