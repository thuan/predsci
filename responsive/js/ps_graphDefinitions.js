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

	/*
	* Builds the Pie Chart Widget - Process Data
	*/
    ps_graphDefinitions.processDataAllPie = function (data) {

        if(!data["source"]){
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
        }else{
            alert("process");
            var nData = _.where(data, {id_2 : $(this).attr("rel")});
            var values = new Array();
            for (var i = 0; i < nData.length; i++){
                values.push({
                    display : nData[i].display,
                    value   : nData[i].value
                });
            }
            return values;
        }
    }

	/*
	 * Builds the Pie Chart Widget - Modal View
	 */ 
    ps_graphDefinitions.processDataSourcePie = function (source, data) {
        //Process all data equals to source
        //Atribute ID_2
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

   /*
	* Builds the Pie Chart Widget
	*/
    ps_graphDefinitions.buildPieChart = function (sElementName) {

        var data = ps_graphDefinitions.jsonData.data;
        var nData = ps_graphDefinitions.processDataAllPie(data);


        objPieChart = new cfx.Chart();
        objPieChart.getAnimations().getLoad().setEnabled(true);

        objPieChart.setGallery(cfx.Gallery.Pie);
        objPieChart.getDataGrid().setBorder(cfx.DockBorder.Internal);
        var data = objPieChart.getData();

        objPieChart.setGallery(cfx.Gallery.Pie);
        objPieChart.getAllSeries().getPointLabels().setVisible(true);
        objPieChart.getLegendBox().setDock(cfx.DockArea.Right);
        objPieChart.getLegendBox().setVisible(false);
        //objPieChart.getAllSeries().set

        objPieChart.setDataSource(nData);
        var divHolder = document.getElementById(sElementName.div_location);
        objPieChart.create(divHolder);

    }
    
    /*
	* Builds the Bar Chart Widget
	*/
    ps_graphDefinitions.barChartReload = function(attr) {
        var txt = $("#menuBarChart li a[data-attr='"+attr+"']").text();
        var prop = $("#menuBarChart li a[data-attr='"+attr+"']").attr('data-prop');
        var attr = $("#menuBarChart li a[data-attr='"+attr+"']").attr('data-attr');
        var series = $("#menuBarChart li a[data-attr='"+attr+"']").attr('data-series');
        
        $('#dropdownMenuBarChart').html(txt + ' <span class="caret"></span>');
        $('#'+widget_volumeandsentiment.modal.div_location).html("Loading...");
        widget_volumeandsentiment.modal.dataURL = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/"+prop+"/competitors/"+attr+"/sentiment/"+series+"?period=week&limit=5";
        widget_volumeandsentiment.modal.div_modal = false;
        ps_utilities.loadData(widget_volumeandsentiment.modal);
    };
    
    ps_graphDefinitions.getCompetitors = function(url) {
        var competitors = {};
        $.ajax({
            type: 'GET',
            cache: true,
            url: url,
            dataType: 'json',
            json: 'json',
            async:false,
            success: function(dataResponse) {
                var dataR = dataResponse.data;
                if(dataR.length){
                    $.each(dataR, function(index, value) {
                        if(!competitors[value.id]) {
                            competitors[value.id] = value.display;
                        }
                    });
                }
            },
            error: function() { console.log('Error making request'); }
        });
        return competitors;
    };
        
    ps_graphDefinitions.buildBarChart = function (sElementName) {
        
        var objChart;

        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.setGallery(cfx.Gallery.Bar); // BAR Chart
        
        var data = objChart.getData();
        objChart.getGalleryAttributes().setTemplate("BarBasic");
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        var data = ps_graphDefinitions.jsonData.data;
        data = ps_utilities.processData(data);

        objChart.setDataSource(data);
        var divHolder = document.getElementById( sElementName.div_location );
        divHolder.innerHTML = "";
        
        if(sElementName.showMenuDropdown == undefined)
        {
            $( "#volumeAndSentiment" ).append('<div class="timelabel">'+sElementName.timelabel+'</div>');
        } else {
            var comps = ps_graphDefinitions.getCompetitors(widget_sentimentCompetitors.dataURL);
            var init = $("#dropdownMenuBarChart").text();
            if(!init) {
                $( "#insight_container" ).html(''+
                    '<button class="btn dropdown-toggle btn-inverse" id="dropdownMenuBarChart" data-toggle="dropdown">Verizon <span class="caret"></span></button>'+
                    '<ul id="menuBarChart" class="dropdown-menu" role="menu" aria-labelledby="dropdownMenuBarChart"></ul>'+
                '');

                $.each(comps, function(k, v) {
                    $( "ul[id='menuBarChart']" ).append(''+
                        '<li><a onClick="ps_graphDefinitions.barChartReload(this.dataset.attr);" data-prop="verizon/wireless" data-attr="'+k+'" data-series="multitime">'+v+'</a></li>'+
                    '');
                });
            }
        }
        
        objChart.create(divHolder);
        
        ps_utilities.RemoveWidgetGradient();
        ps_utilities.RemoveLogo();
    };
    
    ps_graphDefinitions.buildSentimentCompetitors = function (sElementName) {
        
        var objChart;

        objChart = new cfx.Chart();
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.setGallery(cfx.Gallery.Bar); // BAR Chart
        
        var data = objChart.getData();
        objChart.getGalleryAttributes().setTemplate("BarBasic");
        objChart.getAllSeries().setStackedStyle(cfx.Stacked.Normal);
        objChart.getLegendBox().setVisible(true);

        var data = ps_graphDefinitions.jsonData.data;
        data = ps_utilities.dataSentimentCompetitors(data);

        objChart.setDataSource(data);
        var divHolder = document.getElementById( sElementName.div_location );
        divHolder.innerHTML = "";
        objChart.create(divHolder);
        
        if(sElementName.showVolumeAndSentimentMenu == undefined)
        {
            $( "#sentimentCompetitors" ).append('<div class="timelabel">'+sElementName.timelabel+'</div>');
        }
        
        ps_utilities.RemoveWidgetGradient();
        ps_utilities.RemoveLogo();
    };
    //end bar chart

    /*
	* Builds the Line Chart Widget
	*/
    ps_graphDefinitions.buildLineChart = function (sElementName) {
        //Inserindo o botao
        //$("#"+sElementName.id_div+" div.pull-right").prepend("<a id='launch-app' href='javascript:ps_utilities.changeGraph(widgetPredefinedTopicVolume)'><i class='icon-resize-full icon-white'></i></a>");
        
        
        var objChart;
        var td;
        td = new cfx.TitleDockable();
        td.setText(sElementName.title);
        td.setDock(cfx.DockArea.Top);

        objChart = new cfx.Chart();

        objChart.setGallery(sElementName.gallery);
        objChart.getGalleryAttributes().setTemplate(sElementName.template);
        objChart.getLegendBox().setVisible(sElementName.legend);
        //objChart.getLegendBox().setVisible(true);
        objChart.getLegendBox().setHeight(300);
        objChart.getLegendBox().setWidth(100);
        objChart.getLegendBox().sizeToFit();
        
        
        objChart.getLegendBox().setDock(cfx.DockArea.Right);
        //objChart.getLegendBox().setContentLayout(cfx.ContentLayout.Spread);
       
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.getTitles().add(td);

        var data = ps_utilities.processData(sElementName.jsonData.data);
        
        objChart.setDataSource(data);
        var divHolder;
        
        if(document.getElementById(sElementName.div_location)){
            divHolder = document.getElementById(sElementName.div_location);
        }else {
            if(sElementName.div_location == 'modal-widget-body'){
               $("<div id='modal-widget-body'></div>").appendTo("#"+sElementName.id_div);
               divHolder = document.getElementById(sElementName.modal.div_location);
            }else{
                $("#"+sElementName.id_div + " div.widget_label").after("<div class='widget_holder' id='lineChartDiv2'></div>");
                divHolder = document.getElementById(sElementName.div_location);
            }
            
            
        }
       
        divHolder.innerHTML = '';
        objChart.create(divHolder);
        
        
        ps_utilities.RemoveWidgetGradient();
        ps_utilities.RemoveLogo();
        ps_utilities.AddTitle(sElementName.id_div, sElementName.title);
        ps_utilities.AddSubTitle(sElementName.id_div, sElementName.subtitle);
        ps_utilities.AddTooltip(sElementName.id_div, sElementName.tooltip);
        
    } //end line chart

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {
		//Code goes here
    }

    ps_graphDefinitions.buildMentionsTwitterStream = function (sElementName) {
		ps_twitterUtils.getMentionsJsonData();
    }
    
    ps_graphDefinitions.buildUsersTwitterStream = function (sElementName) {
		ps_twitterUtils.getUsersJsonData();
    }
    

	/*
	* Top Tweets
	*/
    ps_graphDefinitions.topTweets = function(response) {
    	ps_twitterUtils.topTweets(response);
    } // end topTweets
        
   
	
	/*
	* Builds the Keyword Trending Widget
	*/
    ps_graphDefinitions.buildKeywordTrending = function(sElementName) {
        $('#klist').append("<ul class='keywordlist  klist-fe' id="+sElementName.category+"></ul>");
        $("#"+sElementName.category).append("<li class='title'>" + sElementName.title + "</li>");

        $.each(ps_graphDefinitions.jsonData.data, function(i,v){
           $("#"+sElementName.category).append("<li  tag=" +v.display+">"  + v.display+"<span>"+ v.value + "</span>"+ "</li>");
		});
    } // end buildKeywordTrending
	
}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));
