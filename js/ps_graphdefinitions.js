/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphdefinitions, $, undefined) {
    ps_graphdefinitions.jsonData = "";

    ps_graphdefinitions.buildTwitterStream = function (sElementName) 
    {
        var mentionsData, usersData;
        
        mentionsData = {
            dataURL: ajaxCalls.getMentionsJsonData,
            function: ps_twitterUtils.buildMentionsData,
            legend: false
        };
        
        usersData = {
            dataURL: ajaxCalls.getUsersJsonData,
            function: ps_twitterUtils.buildUsersJsonData,
            legend: false
        };

        new ps_utilities.loadJsonpData(mentionsData);
        new ps_utilities.loadJsonpData(usersData);
    }

}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery));