/*
*
* Defines all graphs
*
*/
/*global cfx:false, document:false, UILayout:false, window:false, jQuery:false*/

(function (ps_graphDefinitions, $, undefined) {

    ps_graphDefinitions.jsonData = [
        { "Month": "AT&T", "Positive": 542, "Neutral": 88, "Negative": 20 },
        { "Month": "IBM", "Positive": 348, "Neutral": 71, "Negative": 11 },
        { "Month": "Kore", "Positive": 35, "Neutral": 0, "Negative": 0 },
        { "Month": "Verizon", "Positive": 621, "Neutral": 88, "Negative": 26}
    ];

    ps_graphDefinitions.buildChart = function(sElementName)
    {

        var objChart, data, divHolder;

        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);

        objChart.setGallery(cfx.Gallery.Bar);
        
        data = objChart.getData();
        data.setSeries(3);
        data.setPoints(10);
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        //UILayout.CreateTitle(objChart, "Volume & Sentiment");

        data = ps_graphDefinitions.jsonData;
        
        objChart.setDataSource(data);
        divHolder = document.getElementById(sElementName);
        objChart.create(divHolder);

        UILayout.RemoveWidgetGradient();
    };


}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery ));