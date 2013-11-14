/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphDefinitions, $, undefined) {
    ps_graphDefinitions.jsonData = "";

    ps_graphDefinitions.buildChart = function (sElementName) {}

    ps_graphDefinitions.buildPieChart = function (sElementName) {}

    ps_graphDefinitions.buildBarChart = function (sElementName) {}

    ps_graphDefinitions.buildLineChart = function (sElementName) {}

    ps_graphDefinitions.buildTwitterActivityMap = function (sElementName) {}

    ps_graphDefinitions.buildTwitterStream = function (sElementName) {
        var mentionsData, usersData;
        
        mentionsData = {
            dataURL: metric_ticker.APIgettweets,
            function: ps_twitterUtils.buildMentionsData,
            legend: false
        };
        
        usersData = {
            dataURL: metric_ticker.APIgettweets2,
            function: ps_twitterUtils.buildUsersJsonData,
            legend: false
        };

        new ps_utilities.loadJsonpData(mentionsData);
        new ps_utilities.loadJsonpData(usersData);
    }

    ps_graphDefinitions.buildKeywordTrending = function (sElementName) {}

}(window.ps_graphDefinitions = window.ps_graphDefinitions || {}, jQuery));