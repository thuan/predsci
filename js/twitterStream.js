$(function () {
    var twitterStream = {
        dataURL: ajaxCalls.getMentionsJsonData,
        function: ps_graphdefinitions.buildTwitterStream,
        legend: false
    };
    new ps_utilities.loadData(twitterStream);
});