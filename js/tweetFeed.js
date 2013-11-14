$(function () {

    var tweetStream = {
        dataURL: ajaxCalls.getMentionsJsonData,
        function: ps_graphDefinitions.buildTwitterStream,
        legend: false
    };
    new ps_utilities.loadJsonpData(tweetStream);

});