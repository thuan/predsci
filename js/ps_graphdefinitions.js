/*
*
* Defines all graphs
*
*/

(function (ps_graphdefinitions, $, undefined) {

    ps_graphdefinitions.jsonData = "";


    psgraphdefinitions.buildChart = function(sElementName)
    {

        var objChart;

        objChart = new cfx.Chart();objChart.getAnimations().getLoad().setEnabled(true);

        objChart.setGallery(cfx.Gallery.Bar);
        var data = objChart.getData();
        data.setSeries(3);
        data.setPoints(10);
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        //UILayout.CreateTitle(objChart, "Volume & Sentiment");

        var data = psgraphdefinitions.jsonData;

        /*

        var data = [
            { "Month": "AT&T", "Positive": 542, "Neutral": 88, "Negative": 20 },
            { "Month": "IBM", "Positive": 348, "Neutral": 71, "Negative": 11 },
            { "Month": "Kore", "Positive": 35, "Neutral": 0, "Negative": 0 },
            { "Month": "Verizon", "Positive": 621, "Neutral": 88, "Negative": 26}
        ];

        */




        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName);
        objChart.create(divHolder);

        UILayout.RemoveWidgetGradient();
    }


}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery ));