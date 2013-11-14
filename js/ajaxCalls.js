/**
 * Created by ernani.menezes on 11/11/13.
 */

console.log("Property ID: 1");
console.log("Property ID: Wireless Social Pulse");
console.log("Endpoint Host: http://wcg-verizon-api-alpha.herokuapp.com");

var PropertyID = "1";
var InsightID = "vzw";
var PropertyTitle = "Wireless Social Pulse";
var userID = "6";
var EndpointHostDS = "http://wcg-verizon-api-alpha.herokuapp.com";

var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
var APIsentimentsnapshot = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/metricsperiod?period=week&period_count=2&formatter=normalized";
var APIconversationsnapshot = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/metricsperiod?period=week&period_count=2";

console.log("API: Sentiment Snapshot: " + APIsentimentsnapshot);
console.log("API: Conversation Snapshot: " + APIconversationsnapshot);

//Depreciated because we moved to new endpoint
var APItrendingtopicskeywords = "";
//console.log("API: Trending Topics Keywords: " + APItrendingtopicskeywords);

var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/topics/multitime?period=week&limit=5";
console.log("API: Trending Topics: " + APItrendingtopics);

//var APIgettwittermedia = "";
//console.log("API: Latest Twitter Images: " + APIgettwittermedia);
var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20";
console.log("API: Top Tweets: " + APIgettoptweets);
var APItwitterfollowers = "/livecache/vzw_twitter_followers_1d.json";
console.log("API: Twitter Followers: " + APItwitterfollowers);

var APIgetInsightsVolume = "/livecache/vzw_twitter_topic_locations_volume_1d.json";
var APIgetInsightsVolumeTab = "/livecache/vzw_twitter_topic_volume_summary_1d.json";
var APIgetInsightsVolumeTitle = "Volume";
var APIgetInsightsVolumeSubtitle = "Wireless Volume on Twitter by City";
var APIgetInsightsVolumeDataCard = "A United States map showing cities with the most Twitter volume related to Verizon Wireless.";
console.log("API: Twitter Insights Volume: " + APIgetInsightsVolume);
console.log("API: Twitter Insights Volume Tab: " + APIgetInsightsVolumeTab);

var APIgetInsightsSOV = "/livecache/vzw_twitter_topic_locations_share_of_voice_1d.json";
var APIgetInsightsSOVTab = "/livecache/vzw_twitter_topic_share_of_voice_summary_1d.json";
var APIgetInsightsSOVTitle = "Share Of Voice";
var APIgetInsightsSOVSubtitle = "Share of Voice on Twitter by City";
var APIgetInsightsSOVDataCard = "A United States map displaying Share of Voice by city for Verizon Wireless and key competitors. The color of a circle indicates the leading competitor for that city.";
console.log("API: Twitter Insights Share Of Voice: " + APIgetInsightsSOV);
console.log("API: Twitter Insights Share Of Voice Tab: " + APIgetInsightsSOVTab);

var APIgetInsightsSOVNew = "";

var APIgetInsightsFollowers = "/livecache/vzw_twitter_locations_followers_1d.json?key=52812a364dd25";
var APIgetInsightsFollowersTab = "/livecache/vzw_twitter_followers_summary_1d.json";
var APIgetInsightsFollowersTitle = "Followers";
var APIgetInsightsFollowersSubtitle = "Followers on Twitter by City";
var APIgetInsightsFollowersDataCard = "A United States map displaying volume of new Twitter followers for all Verizon Wireless Twitter handles. @verizonwirelss @vznews @vzwsupport @vzwdeals @vzwb2b";
console.log("API: Twitter Insights Followers: " + APIgetInsightsFollowers);
console.log("API: Twitter Insights Followers Tab: " + APIgetInsightsFollowersTab);

var APIvolumeandsentiment = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/sentiment/multitime?period=week&limit=5";
console.log("API: Volume and Sentiment: " + APIvolumeandsentiment);

var ajaxCalls = {
    getMentionsJsonData: "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false",
    getUsersJsonData: "http://vzw.glassfish.w2oservices.com:8080/rest_api_9/twitter/group/statuses/top?groups=1&period=day&period_count=7&limit=20" 
};

var APIgettweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/user/statuses?group=1&include_replies=false&limit=10";
console.log("API: Twitter Stream (Verizon): " + APIgettweets);
var APIgettweets2 = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
console.log("API: Twitter Stream: " + APIgettweets2);

var APIgettweetsmentions = "http://vzw.glassfish.w2oservices.com:8080/rest_api_dev/twitter/topic/statuses?tags=verizon&limit=25&min_followers=10&include_replies=false";
console.log("API: Twitter Influencers wMentions: " + APIgettweetsmentions);
var APIrealtime = "";
//console.log("API: Real Time: " + APIrealtime);

var APIkeywordfrequency1 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_smartphones/aggregate?period=hour&period_count=24";
var APIKeywordTitle1 = "smartphones";
console.log("API: Keyword Frequency Column 1: " + APIkeywordfrequency1);
var APIkeywordfrequency2 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_tablets/aggregate?period=hour&period_count=24";
var APIKeywordTitle2 = "tablets";
console.log("API: Keyword Frequency Column 2: " + APIkeywordfrequency2);
var APIkeywordfrequency3 = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/cmb/competitors/verizon/twitter_features/aggregate?period=hour&period_count=24";
var APIKeywordTitle3 = "features";
console.log("API: Keyword Frequency Column 3: " + APIkeywordfrequency3);

var APIconversationvolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/conversationvolume/multitime?period=week";
console.log("API: Conversation Volume: " + APIconversationvolume);
var APIshareofvoice = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/aggregate?period=week";
console.log("API: Share Of Voice: " + APIshareofvoice);
var APIshareofvoiceCrosstab = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/shareofvoice/crosstab?period=week";
console.log("API: Share Of Voice Crosstab: " + APIshareofvoiceCrosstab);

// LinkedIn
var APIlinkedinfollowers = "";
console.log("API: LinkedIn Followers: " + APIlinkedinfollowers);
var APIlinkedinrecommendations = "";
console.log("API: LinkedIn Recommedations: " + APIlinkedinrecommendations);
var APIlinkedinlikes = "";
console.log("API: LinkedIn Likes: " + APIlinkedinlikes);

// Sentiment
var APIsentimentcompetitors = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitorsentiment/crosstab?limit=5";
console.log("API: Sentiment with Competitors: " + APIsentimentcompetitors);
var APIsentimentcompetitors2 = "";
console.log("API: Sentiment with Competitors Expanded: " + APIsentimentcompetitors2);

// Trending Terms
var APItrendingterms = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/trending?limit=10&target=content&filters=sources.twitter";
console.log("API: Trending Terms: " + APItrendingterms);

// Selectable Topics
var APIselectabletopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/wireless/competitors/verizon/conversationvolume/multitime?limit=10";
console.log("API: Selectable Topics: " + APIselectabletopics);