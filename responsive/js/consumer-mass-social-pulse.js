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
        dataURL: APIsentimentcompetitors2
    }
}
$(function () {
    new ps_utilities.loadData(widget_volumeandsentiment);
    new ps_utilities.loadData(widget_sentimentCompetitors);
});