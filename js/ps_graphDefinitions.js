/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {

    ps_graphDefinitions.jsonData = "";
    
    ps_graphDefinitions.jsonpData = "";

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
    
    /*
	* Builds the Metric Ticker Widget
	*/
    
    ps_graphDefinitions.metricTicker = function(responseSentiment, responseConversation)
    {
    	var data = [];
    	
    	 data.push(
        {
            category: "Positive Sentiment",
            thisWeek: responseSentiment.data[0].positive.end.value,
            lastWeek: responseSentiment.data[0].positive.start.value,
            wowChange: responseSentiment.data[0].positive.end.value_velocity,
            wowChangePercentage: responseSentiment.data[0].positive.end.value_velocity_as_percent,
        },
        {
            category: "Negative Sentiment",
            thisWeek: responseSentiment.data[0].negative.end.value,
            lastWeek: responseSentiment.data[0].negative.start.value,
            wowChange: responseSentiment.data[0].negative.end.value_velocity,
            wowChangePercentage: responseSentiment.data[0].negative.end.value_velocity_as_percent,
        },
        {
            category: "Neutral Sentiment",
            thisWeek: responseSentiment.data[0].neutral.end.value,
            lastWeek: responseSentiment.data[0].neutral.start.value,
            wowChange: responseSentiment.data[0].neutral.end.value_velocity,
            wowChangePercentage: responseSentiment.data[0].neutral.end.value_velocity_as_percent,
        }
        );

		

		  var conversationVolume = [];
		  //alert(responseConversation.data.length);

            for (var i=0; i < responseConversation.data.length; i++) {
                var item = responseConversation.data[i];

                if (item.id === "verizon") {
                    conversationVolume.push(item);
                }
            }

           

            // Transform the data
            data.push(
            {
                category: "Conversation Volume",
                thisWeek: conversationVolume[1].value,
                lastWeek: conversationVolume[0].value,
                wowChange: conversationVolume[1].value_velocity,
                wowChangePercentage: conversationVolume[1].value_velocity_as_percent,
            }
            );

            

   
    var ticker = $(".metric-ticker").find(".widget");
    var output = "<ul>";

    for (var i=0; i < data.length; i++) {
        var item = data[i];

        if (i == 0) {
            var firstChild = "class='metric-active'";
            var categoryActive = "class='category-active'";
        }
        else {
            var firstChild = "";
            var categoryActive = "";
        }

        output += "<li " + firstChild + " data-original='true'>" +
        "<h2 " +categoryActive+ "><span>" +item.category+ "</span></h2><span class='arrow'></span>" +
        "<span class='metric first-child'>This Week: " +(item.thisWeek.addCommas() || "N/A")+ "</span>" +
        "<span class='metric'>Last Week: " +(item.lastWeek.addCommas() || "N/A")+ "</span>" +
        "<span class='metric'>WOW Change: " +(item.wowChange.addCommas() || "N/A")+ " (" +(item.wowChangePercentage.toPercent() || "N/A")+ "%)";

        if (item.wowChange > 0) {
            output += "<span class='wow-change positive'></span>";
        }
        else if (item.wowChange < 0) {
            output += "<span class='wow-change negative'></span>";
        }

        output +=
        "</span>" +
        "</li>";
    }

    output += "</ul>" +
    "<div class='controls'>" +
    "<span class='control' data-direction='back'>&laquo;</span>" +
    "<span class='control mid' data-direction='play'> <img class='play' src='images/pause.png' height='18' width='18'> </span>" +
    "<span class='control' data-direction='forward'>&raquo;</span>" +
    "</div>";

    ticker.append(output).find("ul").fadeIn(800);

   


    $(".metric-ticker").find("li[data-original='true']").each(function() {
        $(this).clone()
        .removeAttr("style")
        .removeAttr("data-original")
        .removeClass("metric-active")
        .attr("data-cloned", true)
        .appendTo(".metric-ticker ul")
        .find("h2")
        .removeClass("category-active");
    });

    // Automatically go through ticker items
    var timer = setInterval(function() {
        ps_utilities.go();
    }, 10000);

    // Manually go through ticker items
    $(".metric-ticker").find(".control").on("click", function() {

        // Pause the ticker
        if ($(this).data("direction") == 'play') {

            clearTimeout(timer);
            $(this).data('direction', 'pause');
            $('img.play').attr('src', 'images/play.png');

        // Play the ticker (if paused)
        } else if ($(this).data("direction") == 'pause') {

            $(this).data('direction', 'play');
            $('img.play').attr('src', 'images/pause.png');

            ps_utilities.go();

            timer = setInterval(function() {
                ps_utilities.go();
            }, 10000);

        // If arrows are clicked, move the ticker in said direction
        } else {

        	ps_utilities.go($(this).data("direction"));
            clearTimeout(timer);

            $('img.play').attr('src', 'images/pause.png');
            $('.control.mid').data('direction', 'play');

            timer = setInterval(function() {
                ps_utilities.go();
            }, 10000);
        }

    });
 
    } // end metricTicker

    
    ps_graphDefinitions.processDataAllPie = function (data) {
        //PROCESSA TODOS OS DADOS
       var process = [];
        data.forEach(function(val){
          if( _.where(process, {id : val.id}).length === 0 ){
                process.push({
                    display : val.display,
                    id      : val.id,
                    value   :  ps_utilities.sumValues(_.where(data, {id : val.id}))
                });
          }
        });
        return process;
    }

    /**
     *  PIECHART FROM MODAL
     */
    ps_graphDefinitions.processDataSourcePie = function (source, data) {
        //PROCESSA OS DADOS QUE FOREM IGUAIS AO SOURCE
        //CAMPO ID_2

        var nData = _.where(data, {id_2 : source});
        var values = new Array();

        for (var i = 0; i < nData.length; i++){
            values.push({
                display : nData[i].display,
                value   : nData[i].value
            });
        }
        return values;
    }
    
    ps_graphDefinitions.buildPieChart = function (sElementName) {
		//Code goes here
    	
    	var objChart;
        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.setGallery(cfx.Gallery.Pie);
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        var data = ps_graphDefinitions.jsonData.data;
        var source = sElementName.source;

        if(source === ""){
           var nData = ps_graphDefinitions.processDataAllPie(data);
        }else{
            var nData = ps_graphDefinitions.processDataSourcePie(source, data);
        }

        objChart.setDataSource(nData );
        var divHolder = document.getElementById(sElementName.div_location);
        objChart.create(divHolder);
    }

    ps_graphDefinitions.buildBarChart = function (sElementName) {
        var objChart;

        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.setGallery(cfx.Gallery.Bar); // BAR Chart
        
        var data = objChart.getData();
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        var data = ps_graphDefinitions.jsonData.data;
        data = ps_utilities.processData(data);

        objChart.setDataSource(data);
        var divHolder = document.getElementById( sElementName.div_location );
        objChart.create(divHolder);
        
        ps_utilities.RemoveWidgetGradient();
    }

    ps_graphDefinitions.buildLineChart = function (sElementName) {
        var objChart;
        var td;
        td = new cfx.TitleDockable();
        td.setText(sElementName.title);
        td.setDock(cfx.DockArea.Top);

        objChart = new cfx.Chart();

        objChart.setGallery(cfx.Gallery.Lines);
        objChart.getGalleryAttributes().setTemplate('LineBasic');
        objChart.getLegendBox().setVisible(sElementName.legend);
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.getTitles().add(td);

        var data = ps_utilities.processData(sElementName.jsonData.data);

        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName.div_location);
        objChart.create(divHolder);

        $("body stop").attr("stop-color","#000000");
        $("#" + sElementName.id_div + " .pull-right a:first").attr("data-original-title",sElementName.tooltip);
        $("#" + sElementName.id_div + " .pull-left span").text(sElementName.title);
        $("#" + sElementName.id_div + " .pull-left small").text(sElementName.subtitle);

    }

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {
		//Code goes here
    }

    ps_graphDefinitions.buildUsersTwitterStream = function (sElementName) {
		ps_twitterUtils.getUsersJsonData();
    }
    
    ps_graphDefinitions.buildMentionsTwitterStream = function (sElementName) {
		ps_twitterUtils.getMentionsJsonData();
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