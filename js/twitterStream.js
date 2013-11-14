$(function () {
    var mentionsJsonData, usersJsonData; 
    mentionsJsonData = {
        dataURL: ajaxCalls.getMentionsJsonData,
        function: ps_twitterUtils.getMentionJsonData,
        legend: false
    };
    
    usersJsonData = {
        dataURL: ajaxCalls.getUsersJsonData,
        function: ps_twitterUtils.getUsersJsonData,
        legend: false
    };
    
    new ps_utilities.loadJsonpData(mentionsJsonData);
    new ps_utilities.loadJsonpData(usersJsonData);
});