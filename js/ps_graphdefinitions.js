/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphdefinitions, $, undefined) {

    ps_graphdefinitions.jsonData = "";


    ps_graphdefinitions.buildTwitterStream = function (sElementName) {
        var mentionsData = {
            dataURL: ajaxCalls.getMentionsJsonData,
            function: ps_twitterUtils.buildMentionsData,
            legend: false
        };
        new ps_utilities.loadJsonpData(mentionsData);
    }


}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery));