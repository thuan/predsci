/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {

    ps_graphDefinitions.jsonData = "";

    ps_graphDefinitions.buildChart = function (sElementName) {

     var objChart;

     objChart = new cfx.Chart();
     objChart.getAnimations().getLoad().setEnabled(true);

     objChart.setGallery(cfx.Gallery.Bar);
     var data = objChart.getData();
     data.setSeries(3);
     data.setPoints(10);
     objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
     objChart.getLegendBox().setVisible(true);

     //UILayout.CreateTitle(objChart, "Volume & Sentiment");

     var data = ps_graphDefinitions.jsonData;

     objChart.setDataSource(data);
     var divHolder = document.getElementById(sElementName.div_location);
     objChart.create(divHolder);

     // UILayout.RemoveWidgetGradient();
     }

    ps_graphDefinitions.buildPieChart = function (sElementName) {

    }

    ps_graphDefinitions.buildBarChart = function (sElementName) {

    }

    ps_graphDefinitions.buildLineChart = function (sElementName) {
    }

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {
    }

    ps_graphDefinitions.buildTwitterStream = function (sElementName) {
        var speed, id, view, API;
        id = sElementName.id;
        view = sElementName.view;
        API = sElementName.api;
        speed = 1000 + (Math.random()*100);
        $('#'+ id).pscroller({speed: speed, tweetfeed: API, stay: 2500, unique: id});
    }

    ps_graphDefinitions.buildKeywordTrending = function (sElementName) {
    }

}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));