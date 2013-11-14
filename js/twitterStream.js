$(function () {
    var mentionsJsonData, usersJsonData; 
    mentionsJsonData = {
        dataURL: ajaxCalls.getMentionsJsonData,
        function: ps_twitterUtils.getMentionJsonData,
        legend: false
    };
    
    
    
    new ps_utilities.loadJsonpData(mentionsJsonData);
    //new ps_utilities.loadJsonpData(usersJsonData);
});