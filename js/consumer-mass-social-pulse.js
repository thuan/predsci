/**
 *  
 * @version		1.0
 * @package		Predictive Science Dashboard
 * @subpackage	Consumer & Mass Business Social Pulse
 * @license		GPLv3
 * @author		Ifactory Solutions <informacao@ifactory.com.br>
 */

var PropertyID = "2";
var InsightID = "cmb";
var PropertyTitle = "Consumer & Mass Business Social Pulse";
var userID = "6";
var EndpointHostDS = "http://wcg-verizon-api-alpha.herokuapp.com";

//endpoints
var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
var APIsentimentsnapshot = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/sentiment/metricsperiod?period=week&period_count=2&formatter=normalized";
var APIconversationsnapshot = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/shareofvoice/metricsperiod?period=week&period_count=2";
var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/topics/multitime?period=week&limit=5";
var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=7&period=day&period_count=7&limit=204";
var APItwitterfollowers = "/livecache/cmb_twitter_followers_1d.json?";

//Insights
var APIgetInsightsVolume = "/livecache/cmb_twitter_topic_locations_volume_1d.json";
var APIgetInsightsVolumeTab = "/livecache/cmb_twitter_topic_volume_summary_1d.json";
var APIgetInsightsVolumeTitle = "Volume";
var APIgetInsightsVolumeSubtitle = "Volume on Twitter by City";
var APIgetInsightsVolumeDataCard = "A United States map showing cities with the most Twitter volume related to Verizon CMB.";
var APIgetInsightsSOV = "/livecache/cmb_twitter_topic_locations_share_of_voice_1d.json";
var APIgetInsightsSOVTab = "/livecache/cmb_twitter_topic_share_of_voice_summary_1d.json";
var APIgetInsightsSOVTitle = "Share Of Voice";
var APIgetInsightsSOVSubtitle = "Share of Voice on Twitter by City";
var APIgetInsightsSOVDataCard = "A United States map displaying Share of Voice by city for Verizon CMB and key competitors. The color of a circle indicates the leading competitor for that city.";
var APIgetInsightsFollowers = "/livecache/cmb_twitter_locations_followers_1d.json";
var APIgetInsightsFollowersTab = "/livecache/cmb_twitter_followers_summary_1d.json";
var APIgetInsightsFollowersTitle = "Followers";
var APIgetInsightsFollowersSubtitle = "Followers on Twitter by City";
var APIgetInsightsFollowersDataCard = "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b";

//Volume & Sentiment
var APIvolumeandsentiment = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/sentiment/multitime?period=week&limit=5";

//Tweets
var APIgettweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/user/statuses?group=7&include_replies=false&limit=10";
var APIgettweets2 = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=vz_fios&limit=25&min_followers=10&include_replies=false";
var APIgettweetsmentions = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=vz_fios&limit=25&min_followers=10&include_replies=false";

//Keyword Frequency
var APIkeywordfrequency1 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_content/aggregate?period=hour&period_count=24";
var APIKeywordTitle1 = "Content";
var APIkeywordfrequency2 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_product/aggregate?period=hour&period_count=24";
var APIKeywordTitle2 = "Product";
var APIkeywordfrequency3 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_service/aggregate?period=hour&period_count=24";
var APIKeywordTitle3 = "Service";

//Conversation Volume
var APIconversationvolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/conversationvolume/multitime?period=week";
var APIshareofvoice = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/shareofvoice/aggregate?period=week&limit=100";
var APIshareofvoiceCrosstab = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/shareofvoice/crosstab?period=week&limit=100";

// Sentiment
var APIsentimentcompetitors = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitorsentiment/crosstab?limit=5";
var APIsentimentcompetitors2 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitorsentiment/crosstab?limit=20";

// Trending Terms
var APItrendingterms = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/trending?limit=10&target=content&filters=sources.twitter";

// Selectable Topics
var APIselectabletopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/conversationvolume/multitime?limit=10";



/*Definitions*/

/*Definitions Conversation Volume*/
var widgetConversationVolume = {
    title: 'Conversation Volume',
    subtitle: 'by Media Type',
    dataURL: APIconversationvolume,
    function: ps_graphDefinitions.buildLineChart,
    div_location: 'lineChartDiv',
    legend: false,
    tooltip:'Volume of online conversation for all media types for Verizon CMB.',
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
        tooltip:'Volume of online conversation for all media types for Verizon CMB.',
        class: 'conversationVolume',
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
    subtitle: 'by Media Type',
    dataURL: APIconversationvolume,
    function: ps_graphDefinitions.buildLineChart,
    div_location: 'lineChartDiv',
    legend: false,
    tooltip:'Volume of online conversation for all media types for Verizon CMB.',
    id_div: 'conversationVolume',
    template: 'LineBasic',
    gallery: cfx.Gallery.Lines,
    modal: {
        title: 'Conversation Volume',
        subtitle: 'by Media Type',
        dataURL: APIconversationvolume,
        function: ps_graphDefinitions.buildLineChart,
        div_location: 'modal-widget-body',
        legend: true,
        tooltip:'Volume of online conversation for all media types for Verizon CMB.',
        class: 'conversationVolume',
        template: 'LineBasic',
        gallery: cfx.Gallery.Lines,
        showQueryForm: true,
        showToggle1: true
    }
}

$(function(){
    $('body').tooltip( { selector: "a"});
    new ps_utilities.loadData(widgetConversationVolume);
    new ps_utilities.loadData(widgetPredefinedTopicVolume)

    $("#conversation_volume_query").submit(function(e) {
        e.preventDefault();
        widgetConversationVolumeTemp.modal.dataURL = APIconversationvolume + '&query=' + $(this).find( "input" ).val();
        new ps_utilities.loadData(widgetConversationVolumeTemp.modal);
    });
});

var APIgetInsightsSOV = {name: "ShareOfVoice",
    url:"/livecache/cmb_twitter_topic_locations_share_of_voice_1d.json",
    insightUrl: "/livecache/cmb_twitter_topic_share_of_voice_summary_1d.json",
    insightTitle:"Share of Voice",
    insightSubtitle: "Share of Voice on Twitter by City",
    insightDataCard: "A United States map displaying Share of Voice by city for Verizon CMB and key competitors. The color of a circle indicates the leading competitor for that city."};

var APIgetInsightsFollowers = {name: "Followers",
    url: "/livecache/cmb_twitter_locations_followers_1d.json",
    insightUrl: "/livecache/cmb_twitter_followers_summary_1d.json",
    insightTitle:"Followers",
    insightSubtitle: "Followers on Twitter by City",
    insightDataCard: "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b"};

var APIgetInsightsVolume = {name: "Volume",
    url: "/livecache/cmb_twitter_topic_locations_volume_1d.json",
    insightUrl: "/livecache/cmb_twitter_topic_volume_summary_1d.json",
    insightTitle:"Volume",
    insightSubtitle: "Wireless Volume on Twitter by City",
    insightDataCard: "A United States map showing cities with the most Twitter volume related to Verizon CMB."};

APIgetInsightsSOV.url = "data/twitter_sov_cmb.json";
APIgetInsightsSOV.insightUrl = "data/twitter_sov_cmb_insight.json";
APIgetInsightsFollowers.url = "data/twitter_followers_cmb.json";
APIgetInsightsFollowers.insightUrl = "data/twitter_followers_cmb_insight.json";
APIgetInsightsVolume.url = "data/twitter_volume_cmb.json";
APIgetInsightsVolume.insightUrl = "data/twitter_volume_cmb_insight.json";


var arrayAPIActivityMap    = [APIgetInsightsSOV, APIgetInsightsFollowers, APIgetInsightsVolume];
//Data Manipulation

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

});//End Metric Ticker


/*
 * Top Tweets
 */

$(function () {
  $('body').tooltip( { selector: "a"});
  var widget = {
      dataURL: APIgettoptweets,
      function: ps_graphDefinitions.topTweets
  };
  new ps_utilities.loadJsonpData(widget);
}); //End Top Tweets


/*
 * Keyword Frequency
 */

$(function () {

    var KeywordWidget = {
        title: "Content",
        category: "twitter_content",
        dataURL: APIkeywordfrequency1,
        function: ps_graphDefinitions.buildKeywordTrending
    }

    new ps_utilities.loadData(KeywordWidget);

});

$(function () {

    var KeywordWidget = {
        title: "Product",
        category: "twitter_product",
        dataURL: APIkeywordfrequency2,
        function: ps_graphDefinitions.buildKeywordTrending
    }

    new ps_utilities.loadData(KeywordWidget);

});

$(function () {

    var KeywordWidget = {
        title: "Service",
        category: "twitter_service",
        dataURL: APIkeywordfrequency3,
        function: ps_graphDefinitions.buildKeywordTrending
    }

    new ps_utilities.loadData(KeywordWidget);

}); // END Keyword Frequency


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
    legend: true,
    modal: {
        title: "Volume & Sentiment",
        subtitle: "Daily Volume & Sentiment",
        tooltip : "Sentiment of conversation for all Verizon CMB data. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
        div_location: "modal-widget-body",
        class: "barChartVS",
        dashboard: "verizon/cmb",
        showVolumeAndSentimentMenu: true,
        function: ps_graphDefinitions.buildBarChart,
        showInsightsDropdown: false,
        showMenuDropdown: true,
        legend: true,
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
    legend: true,
    dataURL: APIsentimentcompetitors,
    function: ps_graphDefinitions.buildSentimentCompetitors,
    div_location: "sentimentCompetitorsDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "With Key Competitors",
        tooltip : "Volume of positive, negative, and neutral sentiment for Verizon CMB and key competitors.",
        div_location: "modal-widget-body",
        class: "barChartVS",
        showInsightsDropdown: false,
        legend: true,
        function: ps_graphDefinitions.buildSentimentCompetitors,
        dataURL: APIsentimentcompetitors2
    }
}
$(function () {
    new ps_utilities.loadData(widget_volumeandsentiment);
    new ps_utilities.loadData(widget_sentimentCompetitors);
});

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
        insight_url: "http://vzw.glassfish.w2oservices.com:8080/rest_api_9a/analyst/insights?tag=twitter_insights_sov&business=cmb&limit=100",
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

/*
 * Predefined Topic Volume
 */
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
    new ps_utilities.loadData(widgetPredefinedTopicVolume)
    
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
        subtitle : "With key Competitors",
        tooltip : "Share of Voice by media type for Verizon Wireless and key competitors.",
        div_location: "modal-widget-body",
        function: ps_graphDefinitions.buildPieChart,
        dataURL: APIshareofvoiceCrosstab,
        insight_url : "",
        showMenu : true
    }
}

$(function(){
    new ps_utilities.loadData(widget_pie);
});

//Begin Twitter Stream Definitions
var widgetTwitterStream;
$(function () {
	widgetTwitterStream = {
		title: 'Twitter Stream',
    	subtitle: 'Tweets mentioning Verizon CMB',
		tooltip: 'A stream of tweets related to Verizon CMB.',
		dataURL: [APIgettoptweets, APIgettweetsmentions],
		function: ps_graphDefinitions.buildTwitterStream,
		div_location: 'div_tweeterStream_widget',
    	id_div: 'twitterStream',
		legend: false,
    	modal: {
			title: "Twitter Stream",
        	subtitle: "Tweets mentioning Verizon CMB",
			tooltip: "A stream of tweets related to Verizon CMB.",
        	function : "launch_twitter",
        	div_location: 'modal-widget-body',
			id_div_header: 'news_header',
			id_div_header_admin: 'news_header_admin',
			news_header: "Tweets mentioning Verizon cmb",
			news_header_admin: "Tweets from Consumer & Mass Business Handles",
        	legend: false
		}
};	
  	new ps_utilities.loadTwitterStream(widgetTwitterStream);
	var getTweetDataTimer = window.setInterval(function () {
        new ps_utilities.loadTwitterStream(widgetTwitterStream);      
    }, 60000);
});

//End Twitter Stream Definitions

var linkedinRecommendations = {
    view: "table",
    API: APIlinkedinrecommendations,
    id: "linkedinRecommendations",
    limit: 6,
    title: "LinkedIn Recommendations",
    subtitle: "Verizon Enterprise Solutions Company Page",
    tooltip : "Volume of recommendations for the services on the Verizon Enterprise Solutions company page on LinkedIn",
    dataURL: APIlinkedinrecommendations,
    function: ps_graphDefinitions.buildLinkedInRecommendations,
    id_div: 'linkedinRecommendations',
    modal: {
        title: "LinkedIn Recommendations",
        subtitle: "Verizon Enterprise Solutions Company Page",
        tooltip: "Volume of recommendations for the services on the Verizon Enterprise Solutions company page on LinkedIn"
    }
};

$(function(){
    new ps_utilities.loadData(linkedinRecommendations);
    //getlinkedinrecommendations("table", APIlinkedinrecommendations, "linkedin_recommendations",6);
		/*$('#expand_linkedin_recommendations').click(function() {
			$('#modal-linkedin_recommendations').on('shown', function() {
				getlinkedinrecommendations("table", APIlinkedinrecommendations, "linkedin_recommendations_lg",20);
			});
	   });*/
});