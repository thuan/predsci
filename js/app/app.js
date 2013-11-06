/*global cfx:false, document:false, $:false, window:false*/
var chart1;

function carregarGraphico() {
    "use strict";
    var series1, series2, data, db, divHolder;
    
    
    chart1 = new cfx.Chart();
    chart1.getAnimations().getLoad().setEnabled(true);
    
    chart1.getAxisY().setMin(0);
    chart1.getAxisY().setMax(10);
    
    series1 = chart1.getSeries().getItem(0);
    series2 = chart1.getSeries().getItem(1);
    series1.setGallery(cfx.Gallery.Bar);
    series2.setGallery(cfx.Gallery.Bar);
    
    data = chart1.getData();
    data.setSeries(2);
    data.setPoints(10);
    
    data = [
        { "Mês": "Jan", "Andando": 1, "Correndo": 2 },
        { "Mês": "Feb", "Andando": 1, "Correndo": 3 },
        { "Mês": "Mar", "Andando": 2, "Correndo": 5 },
        { "Mês": "Apr", "Andando": 4, "Correndo": 6 },
        { "Mês": "May", "Andando": 5, "Correndo": 10 },
        { "Mês": "Jun", "Andando": 6, "Correndo": 10 }
    ];
    chart1.setDataSource(data);
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;