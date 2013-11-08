/*global cfx:false, document:false, $:false, window:false*/
var chart1;

function carregarGraphico() {
    "use strict";
    var series1, series2, series3, data, db, divHolder;   
    chart1 = new cfx.Chart();
    chart1.getAnimations().getLoad().setEnabled(true);
    
    chart1.getAxisY().setMin(0);
    chart1.getAxisY().setMax(14000);
    
    series1 = chart1.getSeries().getItem(0);
    series2 = chart1.getSeries().getItem(1);
    series3 = chart1.getSeries().getItem(2);
    series1.setGallery(cfx.Gallery.Bar);
    series2.setGallery(cfx.Gallery.Bar);
    series3.setGallery(cfx.Gallery.Bar);
    
    data = chart1.getData();
    data.setSeries(3);
    data.setPoints(10);

    data = $.getJSON(http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitorsentiment/crosstab?limit=5&period=week&callback=jQuery17206924738397356123_1383938511329&_=1383938532983
);
    
    chart1.setDataSource(data);
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;