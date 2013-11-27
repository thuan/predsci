/**
 *  
 * @version		1.0
 * @package		Predictive Science Dashboard
 * @subpackage	Telematics Social Pulse
 * @license		GPLv3
 * @author		Ifactory Solutions <informacao@ifactory.com.br>
 */

//global API calls converted to JS variables for use in transform functions (endpoints)

var PropertyID = "6";
var InsightID = "ves3";
var PropertyTitle = "Enterprise Solutions - Telematics Social Pulse";
var userID = "6";
var EndpointHostDS = "http://wcg-verizon-api-alpha.herokuapp.com";

var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";

//Predefined Trending Topics
var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/competitors/verizon/topics/multitime?period=day&period_count=7&limit=5";

//Tweets
var APIgettoptweets = "http://vzw.glassfish.w2oservices.com:8080/rest_api_html_4/twitter/group/statuses/top?groups=7&period=week&period_count=1&limit=4";
var APItwitterfollowers = "http://vzw.glassfish.w2oservices.com:8080/rest_api_html_4/twitter/group/history?groups=7";

//Insights
var APIgetInsightsVolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/verizon/conversationvolume/multitime?period=week&limit=1";
var APIgetInsightsSOV = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/shareofvoice/multitime?period=week";
var APIgetInsightsSOVTab = "/livecache/twitter-tag-volume-group-one.json";
var APIgetInsightsFollowers = "/livecache/cmb-twitter-follower-locations.json";
var APIgetInsightsFollowersTab = "/livecache/cmb-twitter-follower-history.json";

//Volume & Sentiment
var APIvolumeandsentiment = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/competitors/verizon/sentiment/multitime?period=day&period_count=7&limit=5";

//Tweets
var APIgettweets = "/livecache/twitter_statuses_last_60_seconds_group_14.json";
var APIgettweets2 = "/livecache/twitter_statuses_last_60_seconds_group_7.json";
var APIgettweetsmentions = "/livecache/twitter_statuses_last_60_seconds_group_7.json";

//Keyword Frequency
var APIkeywordfrequency1 = "http://50.18.192.200:8080/cbapi/webresources/tagfrequency?period=DAY&field=carriers&filter=verizon&frequency=content&limit=6";
var APIkeywordfrequency2 = "http://50.18.192.200:8080/cbapi/webresources/tagfrequency?period=DAY&field=carriers&filter=verizon&frequency=product&limit=6";
var APIkeywordfrequency3 = "http://50.18.192.200:8080/cbapi/webresources/tagfrequency?period=DAY&field=carriers&filter=verizon&frequency=service&limit=6";

//Conversation Volume
var APIconversationvolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/competitors/verizon/conversationvolume/multitime?period=day&period_count=7&limit=5";

//Share of Voice
var APIshareofvoice = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/shareofvoice/aggregate?period=week";
var APIshareofvoiceCrosstab = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/shareofvoice/crosstab?period=week";


// LinkedIn
var APIlinkedinfollowers = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/history?company=1094&period=day&period_count=7&timezone=-5&boundary=day&include_top=false";
var APIlinkedinrecommendations = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/products?company=1094&period=day&period_count=7&timezone=-5&boundary=day";
var APIlinkedinlikes = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/update/engagement/history?company=1094&period=day&period_count=7&timezone=0&boundary=day";

// Sentiment
var APIsentimentcompetitors = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/competitorsentiment/crosstab?limit=5&period=day&period_count=7";

// Trending Terms
var APItrendingterms = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/competitors/verizon/trending?limit=10&target=content&filters=sources.twitter";

// Selectable Topics
var APIselectabletopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/telematics/competitors/verizon/conversationvolume/multitime?limit=10";

//END: Variable Definition
	
//START: Function Def

/*Definitions*/

/*LinkedIn Likes*/
var widgetLinkedinLikes = {
    title: 'LinkedIn Likes',
    subtitle: 'Verizon Enterprise Solutions Company Page',
    dataURL: APIlinkedinlikes,
    function: ps_graphDefinitions.buildLinkedinLikes,
    div_location: 'linkedInLikesDiv',
    legend: false,
    tooltip:'Volume of status update Likes over time for the Verizon Enterprise Solutions company page on LinkedIn.',
    id_div: 'linkedInLikes',
    template: 'LineBasic',
    gallery: cfx.Gallery.Lines,
    dataType: 'jsonp',
    modal: {
        title: 'LinkedIn Likes',
        subtitle: 'Verizon Enterprise Solutions Company Page',
        dataURL: APIlinkedinlikes,
        function: ps_graphDefinitions.buildLinkedinLikes,
        div_location: 'modal-widget-body',
        legend: false,
        tooltip:'Volume of status update Likes over time for the Verizon Enterprise Solutions company page on LinkedIn.',
        class: 'linkedInLikes',
        dataType: 'jsonp',
        template: 'LineBasic',
        gallery: cfx.Gallery.Lines,
        showToggle4: true
    }
}
	
/*LinkedIn Followers*/
var widgetLinkedinFollowers = {
    title: 'LinkedIn Followers',
    subtitle: 'Verizon Enterprise Solutions Company Page',
    dataURL: APIlinkedinfollowers,
    function: ps_graphDefinitions.buildLinkedinFollowers,
    div_location: 'lineChartDivLinkedin',
    legend: false,
    tooltip:'Volume of followers over time for the Verizon Enterprise Solutions company page on LinkedIn.',
    id_div: 'linkedinFollowers',
    template: 'LineBasic',
    gallery: cfx.Gallery.Lines,
    dataType: 'jsonp',
    modal: {
        title: 'LinkedIn Followers',
        subtitle: 'Verizon Enterprise Solutions Company Page',
        dataURL: APIlinkedinfollowers,
        function: ps_graphDefinitions.buildLinkedinFollowers,
        div_location: 'modal-widget-body',
        legend: false,
        tooltip:'Volume of followers over time for the Verizon Enterprise Solutions company page on LinkedIn.',
        class: 'linkedinFollowers',
        dataType: 'jsonp',
        template: 'LineBasic',
        gallery: cfx.Gallery.Lines,
        showQueryForm: false,
        showToggle3: true,
        showInsightsDropdown: false,
        showInsights: false


    }
}

/*
 * Volume & Sentiment
 */
var widget_volumeandsentiment = {
    title: "Volume & Sentiment",
    subtitle: "Daily Volume & Sentiment",
    timelabel: "7 days",
    tooltip : "Conversation volume and sentiment for Verizon VES Telematics and key competitors. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
    legend: true,
    expandedView: true,
    dataURL: APIvolumeandsentiment,
    function: ps_graphDefinitions.buildBarChart,
    div_location: "barChartDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "Daily Volume & Sentiment",
        tooltip : "Conversation volume and sentiment for Verizon VES Telematics and key competitors. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
        div_location: "modal-widget-body",
        class: "barChartVS",
        dashboard: "verizon/ves/telematics",
        showVolumeAndSentimentMenu: true,
        function: ps_graphDefinitions.buildBarChart,
        showInsightsDropdown: false,
        showMenuDropdown: true,
        insight_url: "http://vzw.glassfish.w2oservices.com:8080/rest_api_9a/analyst/insights?tag=volume_sentiment&business=ves_security&limit=100",
        legend: true,
        dataURL: APIvolumeandsentiment
    }
}

/*
 * Sentiment Competitors
 */
var widget_sentimentCompetitors = {
    title: "Volume & Sentiment",
    subtitle: "With Key Competitors",
    tooltip : "Volume of positive, negative, and neutral sentiment for Verizon VES - Telematics and key competitors.",
    timelabel: "7 days",
    legend: true,
    expandedView: true,
    dataURL: APIsentimentcompetitors,
    function: ps_graphDefinitions.buildSentimentCompetitors,
    div_location: "sentimentCompetitorsDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "With Key Competitors",
        tooltip : "Volume of positive, negative, and neutral sentiment for Verizon VES - Telematics and key competitors.",
        timelabel: "7 days",
        legend: true,
        div_location: "modal-widget-body",
        class: "barChartVS",
        showInsightsDropdown: false,
        function: ps_graphDefinitions.buildSentimentCompetitors,
        dataURL: APIsentimentcompetitors
    }
};

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

    // VOLUME AND SENTIMENT (Daily and Competitors)
    new ps_utilities.loadData(widget_volumeandsentiment);
    new ps_utilities.loadData(widget_sentimentCompetitors);

    //CONVERSATION VOLUME
    new ps_utilities.loadData(widgetConversationVolume);
    
    //LINKEDIN FOLLOWERS
    new ps_utilities.loadData(widgetLinkedinFollowers);

    //LINKEDIN LIKES
    new ps_utilities.loadData(widgetLinkedinLikes);

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

//END: Function Def
	
