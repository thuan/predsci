/**
 *  
 * @version		1.0
 * @package		Predictive Science Dashboard
 * @subpackage	Consumer & Mass Business Social Pulse
 * @license		GPLv3
 * @author		Ifactory Solutions <informacao@ifactory.com.br>
 */

//global API calls converted to JS variables for use in transform functions (endpoints)
	var PropertyID = "3";
	var InsightID = "ves1";
	var PropertyTitle = "Enterprise Solutions - Cloud Social Pulse";
	var userID = "6";
	var EndpointHostDS = "http://wcg-verizon-api-alpha.herokuapp.com";
	
	var APINotifications = "http://dashboard-api.herokuapp.com/rest/Topics/All/Recent/Alerts";
	
	//Trending Topics
	var APItrendingtopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/competitors/verizon/topics/multitime?period=day&period_count=7&limit=5";
	
	//Volume & Sentiment
	var APIvolumeandsentiment = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/competitors/verizon/sentiment/multitime?period=day&period_count=7&limit=5";
	//
	var APIconversationvolume = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/competitors/verizon/conversationvolume/multitime?period=day&period_count=7&limit=5";
	//Share of Voice
	var APIshareofvoice = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/shareofvoice/aggregate?period=week";
	var APIshareofvoiceCrosstab = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/shareofvoice/crosstab?period=week";
	
	// LinkedIn
	var APIlinkedinfollowers = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/history?company=1094&period=day&period_count=7&timezone=-5&boundary=day&include_top=false";
	var APIlinkedinrecommendations = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/products?company=1094&period=day&period_count=7&timezone=-5&boundary=day";
	var APIlinkedinlikes = "http://vzw.glassfish.w2oservices.com:8080/kendo_api/linkedin/company/update/engagement/history?company=1094&period=day&period_count=7&timezone=0&boundary=day";
	
	// Sentiment
	var APIsentimentcompetitors = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/competitorsentiment/crosstab?limit=5";
	
	// Trending Terms
	var APItrendingterms = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/competitors/verizon/trending?limit=10&target=content&filters=sources.twitter";
	
	// Selectable Topics
	var APIselectabletopics = "http://wcg-verizon-api-alpha.herokuapp.com/rest/drillable/verizon/ves/cloud/competitors/verizon/conversationvolume/multitime?limit=10";
	
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
    tooltip : "Conversation volume and sentiment for Verizon VES Cloud and key competitors. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
    legend: true,
    expandedView: true,
    dataURL: APIvolumeandsentiment,
    function: ps_graphDefinitions.buildBarChart,
    div_location: "barChartDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "Daily Volume & Sentiment",
        tooltip : "Conversation volume and sentiment for Verizon VES Cloud and key competitors. Sentiment analysis conducted by Clarabridge with a score between -5 and +5.",
        div_location: "modal-widget-body",
        class: "barChartVS",
        dashboard: "verizon/ves/cloud",
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
    tooltip : "Volume of positive, negative, and neutral sentiment for Verizon VES - Cloud and key competitors.",
    timelabel: "7 days",
    legend: true,
    expandedView: true,
    dataURL: APIsentimentcompetitors,
    function: ps_graphDefinitions.buildSentimentCompetitors,
    div_location: "sentimentCompetitorsDiv",
    modal: {
        title: "Volume & Sentiment",
        subtitle: "With Key Competitors",
        tooltip : "Volume of positive, negative, and neutral sentiment for Verizon VES - Cloud and key competitors.",
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

var linkedinRecommendations = {
    view: "table",
    API: APIlinkedinrecommendations,
    id: "linkedin_recommendations",
    limit: 6,
    title: "LinkedIn Recommendations",
    subtitle: "Verizon Enterprise Solutions Company Page",
    tooltip : "Volume of recommendations for the services on the Verizon Enterprise Solutions company page on LinkedIn",
    dataURL: APIlinkedinrecommendations,
    function: ps_graphDefinitions.buildLinkedInRecommendations,
        modal: {
    }
};

$(function(){
    new ps_utilities.loadData(linkedinRecommendations);
    getlinkedinrecommendations("table", APIlinkedinrecommendations, "linkedin_recommendations",6);
		$('#expand_linkedin_recommendations').click(function() {
			$('#modal-linkedin_recommendations').on('shown', function() {
				getlinkedinrecommendations("table", APIlinkedinrecommendations, "linkedin_recommendations_lg",20);
			});
	});
});



	
//END: Function Def
	