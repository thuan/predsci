/*global cfx:false, document:false, $:false, window:false*/
var chart1;

function carregarGraphico() {
    "use strict";
    var series1, series2, data, db, divHolder;   
    chart1 = new cfx.Chart();
    chart1.getAnimations().getLoad().setEnabled(true);
    
    chart1.getAxisY().setMin(0);
    chart1.getAxisY().setMax(20);
    
    series1 = chart1.getSeries().getItem(0);
    series2 = chart1.getSeries().getItem(1);
    series1.setGallery(cfx.Gallery.Bar);
    series2.setGallery(cfx.Gallery.Bar);
    
    data = chart1.getData();
    data.setSeries(2);
    data.setPoints(10);
    
    data = [
        { "Mês": "Jan", "Alcool (km/l)": 15.9, "Gasolina(km/l)": 10.2 },
        { "Mês": "Fev", "Alcool (km/l)": 12.3, "Gasolina(km/l)": 11.1 },
        { "Mês": "Mar", "Alcool (km/l)": 12.6, "Gasolina(km/l)": 10.2 },
        { "Mês": "Abr", "Alcool (km/l)": 11.9, "Gasolina(km/l)": 10 },
        { "Mês": "Mai", "Alcool (km/l)": 10.3, "Gasolina(km/l)": 10.6 },
        { "Mês": "Jun", "Alcool (km/l)": 10.8, "Gasolina(km/l)": 9.8 }
    ];
    chart1.setDataSource(data);
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;