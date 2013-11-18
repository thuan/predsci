/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {

    ps_graphDefinitions.jsonData = "";

	/*
	* Builds the Keyword Trending Widget
	*/
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

		var data = ps_graphDefinitions.jsonData;
		objChart.setDataSource(data);
		var divHolder = document.getElementById(sElementName.div_location);
		objChart.create(divHolder);
    }

    ps_graphDefinitions.buildPieChart = function (sElementName) {
		//Code goes here
    }

    ps_graphDefinitions.buildBarChart = function (sElementName) {
		//Code goes here
    }

    ps_graphDefinitions.buildLineChart = function (sElementName) {
		//Code goes here	
    }

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {
		//Code goes here
    }

    ps_graphDefinitions.buildMentionsTwitterStream = function (sElementName) {
    	ps_twitterUtils.getMentionsJsonData();
		//Code goes here	
    }
    
    ps_graphDefinitions.buildUsersTwitterStream = function (sElementName) {
    	ps_twitterUtils.getUsersJsonData();
		//Code goes here	
    }
	
	/*
	* Builds the Keyword Trending Widget
	*/
    ps_graphDefinitions.buildKeywordTrending = function(sElementName) {
        $('#list').append("<ul class='keywordlist  klist-fe' id="+sElementName.title+"></ul>");
        $("#"+sElementName.title).append("<li class='title'>" + sElementName.title + "</li>");

        $.each(ps_graphDefinitions.jsonData.data, function(i,v){
           $("#"+sElementName.title).append("<li  tag=" +v.display+">"  + v.display+"<span>"+ v.value + "</span>"+ "</li>");
		});
    } // end buildKeywordTrending
	
}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));