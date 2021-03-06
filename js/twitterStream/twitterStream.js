$(function () {
    //Temporario tooltip
    $('body').tooltip({
            selector: "a"
    });
    
    var usersJsonData, mentionsJsonData; 
    
    usersJsonData = {
        dataURL: ajaxCalls.getUsersJsonData,
        function: ps_twitterUtils.getUsersJsonData,
        legend: false
    };
    new ps_utilities.loadJsonpData(usersJsonData);
    
    mentionsJsonData = {
        dataURL: ajaxCalls.getMentionsJsonData,
        function: ps_twitterUtils.getMentionJsonData,
        legend: false
    };
    new ps_utilities.loadJsonpData(mentionsJsonData);
});