/**
 *  
 * @version		1.0
 * @package		Predictive Science Dashboard
 * @subpackage	Security Social Pulse
 * @license		GPLv3
 * @author		Ifactory Solutions <informacao@ifactory.com.br>
 */

//global API calls converted to JS variables for use in transform functions (endpoints)
	var PropertyID = "4";
	var InsightID = "ves2";
	var PropertyTitle = "Enterprise Solutions - Security Social Pulse";
	var userID = "6";
	var EndpointHostDS = "http://wcg-verizon-api-alpha.herokuapp.com";
	
	var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
	
	//Trending Volume
	var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/competitors/verizon/topics/multitime?period=day&period_count=7&limit=5";
	
	//Volume & Sentiment
	var APIvolumeandsentiment = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/competitors/verizon/sentiment/multitime?period=day&period_count=7&limit=5";
	
	//Conversation
	var APIconversationvolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/competitors/verizon/conversationvolume/multitime?period=day&period_count=7&limit=5";
	
	//Share of Voice
	var APIshareofvoice = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/shareofvoice/aggregate?period=week";
	var APIshareofvoiceCrosstab = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/shareofvoice/crosstab?period=week";
	
	// LinkedIn
	var APIlinkedinfollowers = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/history?company=1094&period=day&period_count=7&timezone=-5&boundary=day&include_top=false";
	var APIlinkedinrecommendations = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/products?company=1094&period=day&period_count=7&timezone=-5&boundary=day";
	var APIlinkedinlikes = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/update/engagement/history?company=1094&period=day&period_count=7&timezone=0&boundary=day";
	
	// Sentiment
	var APIsentimentcompetitors = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/competitorsentiment/crosstab?limit=5";
	
	// Trending Terms
	var APItrendingterms = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/competitors/verizon/trending?limit=10&target=content&filters=sources.twitter";
	
	// Selectable Topics
	var APIselectabletopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/security/competitors/verizon/conversationvolume/multitime?limit=10";
//END: Variable Definition
	
//START: Function Def

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

/*
 * Volume & Sentiment
 */
var widget_volumeandsentiment = {
    title: "Volume & Sentiment",
    subtitle: "Daily Volume & Sentiment",
    timelabel: "7 days",
    tooltip : "Conversation volume and sentiment for Verizon VES Security and key competitors. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
    legend: true,
    expandedView: true,
    dataURL: APIvolumeandsentiment,
    function: ps_graphDefinitions.buildBarChart,
    div_location: "barChartDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "Daily Volume & Sentiment",
        tooltip : "Conversation volume and sentiment for Verizon VES Security and key competitors. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
        div_location: "modal-widget-body",
        class: "barChartVS",
        dashboard: "verizon/ves/security",
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
    tooltip : "Volume of positive, negative, and neutral sentiment for Verizon VES - Security and key competitors.",
    timelabel: "7 days",
    legend: true,
    expandedView: true,
    dataURL: APIsentimentcompetitors,
    function: ps_graphDefinitions.buildSentimentCompetitors,
    div_location: "sentimentCompetitorsDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "With Key Competitors",
        tooltip : "Volume of positive, negative, and neutral sentiment for Verizon VES - Security and key competitors.",
        timelabel: "7 days",
        legend: true,
        div_location: "modal-widget-body",
        class: "barChartVS",
        showInsightsDropdown: false,
        function: ps_graphDefinitions.buildSentimentCompetitors,
        dataURL: APIsentimentcompetitors
    }
};

$(function(){
    $('body').tooltip( { selector: "a"});
    new ps_utilities.loadData(widgetConversationVolume);

    $("#conversation_volume_query").submit(function(e) {
        e.preventDefault();
        widgetConversationVolumeTemp.modal.dataURL = APIconversationvolume + '&query=' + $(this).find( "input" ).val();
        new ps_utilities.loadData(widgetConversationVolumeTemp.modal);
    });
    
    // VOLUME AND SENTIMENT - begin
    new ps_utilities.loadData(widget_volumeandsentiment);
    new ps_utilities.loadData(widget_sentimentCompetitors);
    // VOLUME AND SENTIMENT - end
});
	
//END: Function Def
	