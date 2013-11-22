/**
 *
 * @version		1.0
 * @package		Predictive Science Dashboard
 * @subpackage	Wireless Social Pulse
 * @license		GPLv3
 * @author		Ifactory Solutions <informacao@ifactory.com.br>
 */

//Define all the endpoint as Variables
var PropertyID = "1";
var InsightID = "vzw";
var PropertyTitle = "Wireless Social Pulse";
var userID = "6";
var EndpointHostDS = "http://wcg-verizon-api-alpha.herokuapp.com";

var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
var APIsentimentsnapshot = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/metricsperiod?period=week&period_count=2&formatter=normalized";
var APIconversationsnapshot = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/metricsperiod?period=week&period_count=2";

//TrendTopics
var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/topics/multitime?period=week&limit=5";

//topTwitters
var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
var APItwitterfollowers = "/livecache/vzw_twitter_followers_1d.json";

var APIgetInsightsSOV = {name: "ShareOfVoice",
    tag: "twitter_insights_sov",
    url: "/livecache/vzw_twitter_topic_locations_share_of_voice_1d.json",
    insightUrl: "/livecache/vzw_twitter_topic_share_of_voice_summary_1d.json",
    insightTitle:"Share of Voice",
    insightSubtitle: "Share of Voice on Twitter by City",
    insightDataCard: "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city."};

var APIgetInsightsFollowers = {name: "Followers",
    url: "/livecache/vzw_twitter_locations_followers_1d.json?key=52812a364dd25",
    insightUrl: "/livecache/vzw_twitter_followers_summary_1d.json",
    insightTitle:"Followers",
    insightSubtitle: "Followers on Twitter by City",
    insightDataCard: "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b"};

var APIgetInsightsVolume = {name: "Volume",
    url: "/livecache/vzw_twitter_topic_locations_volume_1d.json",
    insightUrl: "/livecache/vzw_twitter_topic_volume_summary_1d.json",
    insightTitle:"Volume",
    insightSubtitle: "Wireless Volume on Twitter by City",
    insightDataCard: "A United States map showing cities with the most Twitter volume related to Verizon Wireless."};

APIgetInsightsSOV.url = "data/twitter.json";
APIgetInsightsSOV.insightUrl = "data/insight.json";
APIgetInsightsFollowers.url = "data/twitter2.json";
APIgetInsightsFollowers.insightUrl = "data/insight2.json";
APIgetInsightsVolume.url = "data/twitter3.json";
APIgetInsightsVolume.insightUrl = "data/insight3.json";

var arrayAPIActivityMap    = [APIgetInsightsSOV, APIgetInsightsFollowers, APIgetInsightsVolume];

//Volume & Sentiment
var APIvolumeandsentiment = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/multitime?period=week&limit=5";

//TwitterFeed
var APIgettweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/user/statuses?group=1&include_replies=false&limit=10";
var APIgettweets2 = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
var APIgettweetsmentions = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";

//KeywordFrequency
var APIkeywordfrequency1 =  "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_smartphones/aggregate?period=hour&period_count=24";
var APIkeywordfrequency2 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_tablets/aggregate?period=hour&period_count=24";
var APIkeywordfrequency3 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_features/aggregate?period=hour&period_count=24";

var APIconversationvolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/conversationvolume/multitime?period=week";
var APIshareofvoice = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/aggregate?period=week";
var APIshareofvoiceCrosstab = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/crosstab?period=week";
var APIinsedeShareofVoice  = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9a/analyst/insights?tag=sov&business=ves_security&limit=100";
// LinkedIn


// Sentiment
var APIsentimentcompetitors = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitorsentiment/crosstab?limit=5";

// Trending Terms
var APItrendingterms = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/trending?limit=10&target=content&filters=sources.twitter";

// Selectable Topics
var APIselectabletopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/conversationvolume/multitime?limit=10";

/*Definitions Conversation Volume*/
var widgetConversationVolume = {
    title: 'Conversation Volume',
    subtitle: 'Subtitle of conversation volume',
    dataURL: APIconversationvolume,
    function: ps_graphDefinitions.buildLineChart,
    div_location: 'lineChartDiv',
    legend: false,
    tooltip:'Conversation Volume Tooltip Dashboard!',
    id_div: 'conversationVolume',
    template: 'LineBasic',
    gallery: cfx.Gallery.Lines,
    modal: {
        title: 'Conversation Volume',
        subtitle: 'Subtitle of conversation volume',
        dataURL: APIconversationvolume,
        function: ps_graphDefinitions.buildLineChart,
        div_location: 'modal-widget-body',
        legend: true,
        tooltip:'Conversation Volume Tooltip Dashboard!',
        template: 'LineBasic',
        gallery: cfx.Gallery.Lines,
        showQueryForm: true,
        showToggle1: true,
        showInsightsDropdown: true,
        showInsights: true,
        insight_url: 'http://vzw.glassfish.w2oservices.com:8080/rest_api_9a/analyst/insights?tag=conversation_volume&business=vzw&limit=100'
    }
}

var widgetConversationVolumeTemp = {
    title: 'Conversation Volume',
    subtitle: 'Subtitle of conversation volume',
    dataURL: APIconversationvolume,
    function: ps_graphDefinitions.buildLineChart,
    div_location: 'lineChartDiv',
    legend: false,
    tooltip:'Conversation Volume Tooltip Dashboard!',
    id_div: 'conversationVolume',
    template: 'LineBasic',
    gallery: cfx.Gallery.Lines,
    modal: {
        title: 'Conversation Volume',
        subtitle: 'Subtitle of conversation volume',
        dataURL: APIconversationvolume,
        function: ps_graphDefinitions.buildLineChart,
        div_location: 'modal-widget-body',
        legend: true,
        tooltip:'Conversation Volume Tooltip Dashboard!',
        template: 'LineBasic',
        gallery: cfx.Gallery.Lines,
        showQueryForm: true,
        showToggle1: true
    }
}

var widgetPredefinedTopicVolume = {
    title: 'Predefined Topic Volume',
    subtitle: 'by Volume',
    dataURL: APItrendingtopics,
    function: ps_graphDefinitions.buildLineChart,
    div_location: 'lineChartDiv2',
    legend: false,
    tooltip:'Predefined Topic Volume',
    id_div: 'predefinedTopicVolume',
    template: 'LineBasic',
    gallery: cfx.Gallery.Lines,
    modal: {
        title: 'Predefined Topic Volume',
        subtitle: 'Subtitle of conversation volume',
        dataURL: APItrendingtopics,
        function: ps_graphDefinitions.buildLineChart,
        div_location: 'modal-widget-body',
        legend: true,
        tooltip:'Conversation Volume Tooltip Dashboard!',
        template: 'LineBasic',
        gallery: cfx.Gallery.Lines,
        showInsights: true,
        showToggle2: true
    }
}

$(function () {
    $('body').tooltip( { selector: "a"});
    new ps_utilities.loadData(widgetConversationVolume);
    new ps_utilities.loadData(widgetPredefinedTopicVolume)

    $("#conversation_volume_query").submit(function(e) {
        e.preventDefault();
        widgetConversationVolumeTemp.modal.dataURL = APIconversationvolume + '&query=' + $(this).find( "input" ).val();
        new ps_utilities.loadData(widgetConversationVolumeTemp.modal);
    });
    
    
    
    $("#predefinedTopicVolumeLegend, #conversationVolumeLegend").unbind().on("click", function(e) {
        e.preventDefault();
              
              var arrData;  
              if(this.id == 'predefinedTopicVolumeLegend'){
                  arrData = widgetPredefinedTopicVolume; 
              }else if(this.id == 'conversationVolumeLegend'){
                  arrData = widgetConversationVolume;
              } 
               var text = this.text;
                    // Show the chart
                    if (text == "Show legend") {
                        arrData.legend = true;
			$(this).text("Hide legend");
			$('#' + this.id).hide();
                        $('#' + this.id).show();
                    }
                    // Hide the chart
                    else {
                        arrData.legend = false;
			$(this).text("Show legend");
                        $('#' + this.id).hide();
                        $('#' + this.id).show();
                       
                    }
              arrData.function(arrData);
    });
});

/*
 * Keyword Frequency
 */

$(function () {

    var KeywordWidget = {
        title: "Smartphones",
        category: "twitter_smartphones",
        dataURL: APIkeywordfrequency1,
        function: ps_graphDefinitions.buildKeywordTrending
    }

    new ps_utilities.loadData(KeywordWidget);

});

$(function () {

    var KeywordWidget = {
        title: "Tablets",
        category: "twitter_tablets",
        dataURL: APIkeywordfrequency2,
        function: ps_graphDefinitions.buildKeywordTrending
    }

    new ps_utilities.loadData(KeywordWidget);

});

$(function () {

    var KeywordWidget = {
        title: "Features",
        category: "twitter_features",
        dataURL: APIkeywordfrequency3,
        function: ps_graphDefinitions.buildKeywordTrending
    }

    new ps_utilities.loadData(KeywordWidget);

}); //END Keyword Frequency

//Begin Twitter Activity Map Definitions

var widgetActivityMap = {
    title: "Twitter Activity Map",
    subTitle: "Share of Voice on Twitter by City",
    dataURL: arrayAPIActivityMap,
    function: ps_graphDefinitions.buildChart,
    div_location: "maps_widget",
    legend: false,
    showInsights : true,
    zoom_amount: 3,

    modal_propeties: {
        div_location :  "modal-widget-body",
        header : "Twitter Activity Map - Share of Voice",
        subheader : "Share of Voice on Twitter by City",
        function : "launch_maps",
        showInsights : true,
        zoom_amount: 4,
        showInsightsDropdown: true,
        insight_url: "http://vzw.glassfish.w2oservices.com:8080/rest_api_9a/analyst/insights?tag=twitter_insights_sov&business=vzw&limit=100",
        tooltip : "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.",
        generalMap: new google.maps.LatLng(42,-97.7445),
        markerLocation: new google.maps.LatLng(30.2665,-97.743)
    },
    generalMap: new google.maps.LatLng(42,-97.7445),
    markerLocation: new google.maps.LatLng(30.2665,-97.743)
};
$(function () {
    ps_googlemaps.Initialize(widgetActivityMap,0);

});

//End Twitter Activity Map Definitions

//Begin Twitter Stream Definitions
var widgetTwitterStream;
$(function () {
	var widgetTwitterStream = {
		title: 'Twitter Stream',
    	subtitle: 'Tweets mentioning Verizon Wireless',
		tooltip: 'A stream of tweets related to Verizon Wireless.',
		dataURL: [APIgettoptweets, APIgettweetsmentions],
		function: ps_graphDefinitions.buildTwitterStream,
		div_location: 'div_tweeterStream_widget',
    	id_div: 'twitterStream',
		legend: false,
    	modal: {
			title: "Twitter Stream",
        	subtitle: "Tweets mentioning Verizon Wireless",
			tooltip: "A stream of tweets related to Verizon Wireless.",
        	function : "launch_twitter",
        	div_location: 'modal-widget-body',
			id_div_header: 'news_header',
			id_div_header_admin: 'news_header_admin',
			news_header: "Tweets mentioning Verizon Wireless",
			news_header_admin: "Tweets from Verizon Wireless Handles",
        	legend: false,
		}
};	
  	new ps_utilities.loadTwitterStream(widgetTwitterStream);
	
	var getTweetDataTimer = window.setTimeout(function () {
        new ps_utilities.loadTwitterStream(widgetTwitterStream);      
    }, 60000);
});
//End Twitter Stream Definitions


/*
 * Volume & Sentiment
 */
var widget_volumeandsentiment = {
    title: "Volume & Sentiment",
    subtitle: "",
    timelabel: "7 days",
    dataURL: APIvolumeandsentiment,
    function: ps_graphDefinitions.buildBarChart,
    div_location: "barChartDiv",
    legend: false,
    modal: {
        title: "Volume & Sentiment",
        subtitle: "Daily Volume & Sentiment",
        tooltip : "Sentiment of conversation for all Verizon Wireless data. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
        div_location: "modal-widget-body",
        showVolumeAndSentimentMenu: true,
        function: ps_graphDefinitions.buildBarChart,
        showInsightsDropdown: false,
        showMenuDropdown: true,
        insight_url: "http://vzw.glassfish.w2oservices.com:8080/rest_api_9a/analyst/insights?tag=volume_sentiment&business=ves_security&limit=100",
        dataURL: APIvolumeandsentiment
    }
}

/*
 * Sentiment Competitors
 */
var widget_sentimentCompetitors = {
    title: "Volume & Sentiment",
    subtitle: "",
    timelabel: "7 days",
    dataURL: APIsentimentcompetitors,
    function: ps_graphDefinitions.buildSentimentCompetitors,
    div_location: "sentimentCompetitorsDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "With Key Competitors",
        tooltip : "Volume of positive, negative, and neutral sentiment for Verizon Wireless and key competitors.",
        div_location: "modal-widget-body",
        showInsightsDropdown: false,
        function: ps_graphDefinitions.buildSentimentCompetitors,
        dataURL: APIsentimentcompetitors
    }
}
$(function () {
    new ps_utilities.loadData(widget_volumeandsentiment);
    new ps_utilities.loadData(widget_sentimentCompetitors);
});

/*
 * Metric Ticker
 */

$(function () {

    var widget = {
        title: "",
        subTitle: "",

        dataURLSentiment: APIsentimentsnapshot,
        dataURLConversation: APIconversationsnapshot,
        function: ps_graphDefinitions.metricTicker
    }

    new ps_utilities.multipleLoadData(widget);

}); //End Metric Ticker


/*
 * Top Tweets
 */

$(function () {
    var widget = {
        dataURL: APIgettoptweets,
        function: ps_graphDefinitions.topTweets
    };
    new ps_utilities.loadJsonpData(widget);
}); //End Top Tweets




/*
 * PIECHART
 * */


var widget_pie = {
    title: "",
    subTitle: "",
    dataURL: APIshareofvoiceCrosstab,
    function: ps_graphDefinitions.buildPieChart,
    div_location: "div_pie_chart",
    legend: false,
    modal: {
        source : "",
        title: "Share of Voice",
        header : "Share of Voice",
        subheader : "With key Competitors",
        tooltip : "Share of Voice by media type for Verizon Wireless and key competitors.",
        div_location: "modal-widget-body",
        function: ps_graphDefinitions.buildPieChart,
        dataURL: APIshareofvoiceCrosstab,
        insight_url : APIinsedeShareofVoice,
        showMenu : true
    }
}

$(function(){
    new ps_utilities.loadData(widget_pie);
});