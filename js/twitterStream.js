$(function () {
    var twitterStream = {
        dataURL: ajaxCalls.getMentionsJsonData,
        function: ps_twitterUtils.getMentionJsonData,
        legend: false
    };
    new ps_utilities.loadJsonpData(twitterStream);
});