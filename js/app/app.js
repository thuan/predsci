/*global cfx:false, document:false, $:false, window:false*/
var chart1;

function carregarGraphico() {
    "use strict";
    var data, divHolder;
    chart1 = new cfx.Chart();
    chart1.getAnimations().getLoad().setEnabled(true);
    
    chart1.getAxisY().setMin(0);
    chart1.getAxisY().setMax(14000);
    chart1.getLegendBox().setVisible(true);
    chart1.getAllSeries.setStackedStyle(cfx.Stacked.Normal);
    chart1.setGallery(cfx.Gallery.Bar);
    
    data = chart1.getData();
    data.setSeries(3);
    data.setPoints(10);
    data = [{ "Month": "AT&T", "Positive": 542, "Neutral": 88, "Negative": 20 },
            { "Month": "IBM", "Positive": 348, "Neutral": 71, "Negative": 11 },
            { "Month": "Kore", "Positive": 35, "Neutral": 0, "Negative": 0 },
            { "Month": "Verizon", "Positive": 621, "Neutral": 88, "Negative": 26}
        ];
    
    chart1.setDataSource(data);
    divHolder = document.getElementById('grafico');
    chart1.create(divHolder);
}

window.onload = carregarGraphico;