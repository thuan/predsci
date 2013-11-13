$(function () {

    var tweetStream = {
        dataURL: ajaxCalls.getTwitterStreamAPI,
        function: ps_graphDefinitions.buildTwitterStream,
        legend: false
    };

    new ps_utilities.loadJsonpData(tweetStream);

});