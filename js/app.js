


 /*
 *
 * Twitter Stream
 *
 *
 *
 */


var metric_ticker = function() {
    var PropertyID = "1";
    var InsightID = "vzw";
    var PropertyTitle = "Wireless Social Pulse";
    var userID = "6";
    var EndpointHostDS = "http://wcg-verizon-api-prod.herokuapp.com";

    var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
    var APIsentimentsnapshot = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/metricsperiod?period=week&period_count=2&formatter=normalized";
    var APIconversationsnapshot = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/metricsperiod?period=week&period_count=2";
    //Depreciated because we moved to new endpoint
    var APItrendingtopicskeywords = "";

    var APItrendingtopics = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/topics/multitime?period=week&limit=5";
    var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
    var APItwitterfollowers = "/livecache/vzw_twitter_followers_1d.json?key=5248ff1751c9d";
    
    var APIgetInsightsVolume = "/livecache/vzw_twitter_topic_locations_volume_1d.json?key=5248ff1751c9d";
    var APIgetInsightsVolumeTab = "/livecache/vzw_twitter_topic_volume_summary_1d.json?key=5248ff1751c9d";
    var APIgetInsightsVolumeTitle = "Volume";
    var APIgetInsightsVolumeSubtitle = "Wireless Volume on Twitter by City";
    var APIgetInsightsVolumeDataCard = "A United States map showing cities with the most Twitter volume related to Verizon Wireless.";
    
    var APIgetInsightsSOV = "/livecache/vzw_twitter_topic_locations_share_of_voice_1d.json?key=5248ff1751c9d";
    var APIgetInsightsSOVTab = "/livecache/vzw_twitter_topic_share_of_voice_summary_1d.json?key=5248ff1751c9d";
    var APIgetInsightsSOVTitle = "Share Of Voice";
    var APIgetInsightsSOVSubtitle = "Share of Voice on Twitter by City";
    var APIgetInsightsSOVDataCard = "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.";
    
    var APIgetInsightsSOVNew = "";

    var APIgetInsightsFollowers = "http://vzw.glassfish.w2oservices.com:8080/rest_api_html_3/twitter/follower/locations?account=59889953";
    var APIgetInsightsFollowersTab = "/livecache/vzw_twitter_followers_summary_1d.json?key=5248ff1751c9d";
    var APIgetInsightsFollowersTitle = "Followers";
    var APIgetInsightsFollowersSubtitle = "Followers on Twitter by City";
    var APIgetInsightsFollowersDataCard = "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b";
    
    var APIvolumeandsentiment = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/multitime?period=week&limit=5";
    var APIgettweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/user/statuses?group=1&include_replies=false&limit=10";
    var APIgettweets2 = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
    
    var APIgettweetsmentions = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
    var APIrealtime = "";

    var APIkeywordfrequency1 = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_smartphones/aggregate?period=hour&period_count=24";
    var APIKeywordTitle1 = "smartphones";
    var APIkeywordfrequency2 = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_tablets/aggregate?period=hour&period_count=24";
    var APIKeywordTitle2 = "tablets";
    var APIkeywordfrequency3 = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_features/aggregate?period=hour&period_count=24";
    var APIKeywordTitle3 = "features";
    
    var APIconversationvolume = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/conversationvolume/multitime?period=week";
    var APIshareofvoice = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/aggregate?period=week";
    var APIshareofvoiceCrosstab = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/crosstab?period=week";
    
    // Sentiment
    var APIsentimentcompetitors = "http://wcg-verizon-api-prod.herokuapp.com/rest/drillable/verizon/wireless/competitorsentiment/crosstab?limit=5";
    var APIsentimentcompetitors2 = "";
    
    metricTicker.init({
        api: {
            sentiment: APIsentimentsnapshot,
            conversation: APIconversationsnapshot,
            getAPItweets: APIgettweets,
            getAPItweets2: APIgettweets2,
        }
    });
}
// Metric Ticker Ends