/*
 *
 * Defines all graphs
 *
 */

(function (ps_graphdefinitions, $, undefined) {

    ps_graphdefinitions.jsonData = "";
    
    ps_graphdefinitions.jsonpData = "";

    ps_graphdefinitions.buildTwitterStream = function (sElementName) 
    {
        ps_twitterUtils.getMentionJsonData();
    }

}(window.ps_graphdefinitions = window.ps_graphdefinitions || {}, jQuery));