/*global cfx:false, document:false, $:false, window:false*/
var chart1;

function carregarGraphico() {
    "use strict";
    var series1, series2, data, db, divHolder;
    
    
    chart1 = new cfx.Chart();
    chart1.getAnimations().getLoad().setEnabled(true);
    
    chart1.getAxisY().setMin(500);
    chart1.getAxisY().setMax(2000);
    
    series1 = chart1.getSeries().getItem(0);
    series2 = chart1.getSeries().getItem(1);
    series1.setGallery(cfx.Gallery.Bar);
    series2.setGallery(cfx.Gallery.Bar);
    
    data = chart1.getData();
    data.setSeries(2);
    data.setPoints(10);
    
    data = [
        { "Month": "Jan", "Bikes": 1800, "Parts": 1300 },
        { "Month": "Feb", "Bikes": 1760, "Parts": 900 },
        { "Month": "Mar", "Bikes": 1740, "Parts": 970 },
        { "Month": "Apr", "Bikes": 1750, "Parts": 1010},
        { "Month": "May", "Bikes": 1810, "Parts": 1070 },
        { "Month": "Jun", "Bikes": 1920, "Parts": 1180 }
    ];
    chart1.setDataSource(data);
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;