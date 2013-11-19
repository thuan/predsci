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
        //Process all data
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
    } //end pie chart
    
    /*
	* Builds the Bar Chart Widget
	*/
    ps_graphDefinitions.barChartReload = function(attr) {
        var txt = $("#menuBarChart li a[data-attr='"+attr+"']").text();
        var prop = $("#menuBarChart li a[data-attr='"+attr+"']").attr('data-prop');
        var attr = $("#menuBarChart li a[data-attr='"+attr+"']").attr('data-attr');
        var series = $("#menuBarChart li a[data-attr='"+attr+"']").attr('data-series');
        
        $('#dropdownMenuBarChart').html(txt + ' <span class="caret"></span>');
        $('#'+widget_volumeandsentiment.modal.div_location).html("Carregando...");
        widget_volumeandsentiment.modal.dataURL = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/"+prop+"/competitors/"+attr+"/sentiment/"+series+"?period=week&limit=5";
        widget_volumeandsentiment.modal.div_modal = false;
        ps_utilities.loadData(widget_volumeandsentiment.modal);
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
        objChart.create(divHolder);
        
        if(sElementName.showVolumeAndSentimentMenu == undefined)
        {
            $( "#volumeAndSentiment div[class='widget_stealth']" ).html('<div class="timelabel">'+sElementName.timelabel+'</div>');
        }
        
        ps_utilities.RemoveWidgetGradient();
    } //end bar chart

    /*
	* Builds the Line Chart Widget
	*/
    ps_graphDefinitions.buildLineChart = function (sElementName) {
        var objChart;
        var td;
        td = new cfx.TitleDockable();
        td.setText(sElementName.title);
        td.setDock(cfx.DockArea.Top);

        objChart = new cfx.Chart();

        objChart.setGallery(sElementName.gallery);
        objChart.getGalleryAttributes().setTemplate(sElementName.template);
        objChart.getLegendBox().setVisible(sElementName.legend);
        objChart.getAnimations().getLoad().setEnabled(true);
        objChart.getTitles().add(td);

        var data = ps_utilities.processData(sElementName.jsonData.data);

        objChart.setDataSource(data);
        var divHolder = document.getElementById(sElementName.div_location);
        divHolder.innerHTML = '';
        objChart.create(divHolder);

        ps_utilities.RemoveWidgetGradient();
        $("#" + sElementName.id_div + " .pull-right #tooltipp").attr("data-original-title",sElementName.tooltip);
        $("#" + sElementName.id_div + " .pull-left span").text(sElementName.title);
        $("#" + sElementName.id_div + " .pull-left small").text(sElementName.subtitle);
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
    	
    	var date            = new Date();
    	var response = ps_graphDefinitions.jsonpData;
        var tweetStreamHtml = "";
        var topTweets       = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
        var topTweetsModal  = '<table class="table table-bordered"><thead><tr><th>Rank</th><th>Tweet</th><th>Handle</th><th>Reply</th><th>Retweets</th><th>Date</th></tr></thead><tbody>';
        var period          = response.period;
        var periodCount     = response.period_count;
        var userName        = response.groups[0].userName;
        var tweetData       = response.groups[0].statuses;
        var statusCount     = response.groups[0].statuses.length;
        var rank,screen_name,status_text,reply_count,status_time_str;
        for ( i = 0; i < 5; i++) {
            rank            = tweetData[i].rank;
            screen_name     = tweetData[i].screen_name;
            status_text     = tweetData[i].status_text;
            reply_count     = tweetData[i].reply_count;
            retweet_count   = tweetData[i].retweet_count;
            status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);

            topTweets += '<tr>';
            topTweets += '<td>'+rank+'</td>';
            topTweets += '<td>'+ps_twitterUtils.addlinks(status_text)+'</td>';
            topTweets += '<td>@'+screen_name+'</td>';
            topTweets += '<td>'+reply_count+'</td>';
            topTweets += '<td>'+retweet_count+'</td>';
            topTweets += '<td>'+status_time_str+'</td>';
            topTweets += '</tr>';
        }
        var divIndex=0;
        var adminHtml="";
        for ( i = 0; i < statusCount; i++) {
            rank            = tweetData[i].rank;
            screen_name     = tweetData[i].screen_name;
            status_text     = tweetData[i].status_text;
            reply_count     = tweetData[i].reply_count;
            retweet_count   = tweetData[i].retweet_count;
            img_url         = tweetData[i].img_url;
            tweetTime       = tweetData[i].status_time_str;
            status_time_str = date.getDate(tweetData[i].status_time_str)+"/"+date.getMonth(tweetData[i].status_time_str)+"/"+date.getFullYear(tweetData[i].status_time_str);


            topTweetsModal  += '<tr>';
            topTweetsModal  += '<td>'+rank+'</td>';
            topTweetsModal  += '<td>'+ps_twitterUtils.addlinks(status_text)+'</td>';
            topTweetsModal  += '<td>@'+screen_name+'</td>';
            topTweetsModal  += '<td>'+reply_count+'</td>';
            topTweetsModal  += '<td>'+retweet_count+'</td>';
            topTweetsModal  += '<td>'+status_time_str+'</td>';
            topTweetsModal  += '</tr>';
            if ( divIndex === 0 ) {
                sessionStorage.presentTopTweetIndex = 0;
                sessionStorage.presentTopTweetIndex_admin=0;
            }
            adminHtml       += '<div index_admin="' + divIndex + '" class="div_tweet" style="top:' + (parseInt(divIndex * 1, 10)).toString() + 'px"><div class="div_tweetImage"><a target="_blank" href="https://twitter.com/' + screen_name + '"><img class="img_dp" src="' + img_url + '"></a></div><div class="div_tweetDescription"><h4><a target="_blank" href="https://twitter.com/' + screen_name + '"> ' + screen_name + '</a></h4><div class="div_tweetTime">' + ps_twitterUtils.timeDifference(tweetTime) + '</div><div class="div_tweetText">' + ps_twitterUtils.addlinks(status_text) + '</div></div></div>';
            divIndex+=1;
        }
        
        
        topTweets += '</tbody></table>';
        $('#topTweets').html(topTweets);
        $('#twitter-feed-modal').html(topTweetsModal);
        $("#div_tweeterStream_admin .div_tweetsMain").html(adminHtml);
    } // end topTweets
        
   
	
	/*
	* Builds the Keyword Trending Widget
	*/
    ps_graphDefinitions.buildKeywordTrending = function(sElementName) {
        $('#list').append("<ul class='keywordlist  klist-fe' id="+sElementName.category+"></ul>");
        $("#"+sElementName.category).append("<li class='title'>" + sElementName.title + "</li>");

        $.each(ps_graphDefinitions.jsonData.data, function(i,v){
           $("#"+sElementName.category).append("<li  tag=" +v.display+">"  + v.display+"<span>"+ v.value + "</span>"+ "</li>");
		});
    } // end buildKeywordTrending
	
}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));