$(function () {
    
    var twitterStream = {
        id: "pscroller",
        view: "",
        api: ajaxCalls.getTwitterStreamAPI,
        dataURL: ajaxCalls.getTwitterStreamAPI,
        function: ps_graphDefinitions.buildTwitterStream,
        legend: false
    };

    new ps_utilities.loadData(twitterStream);

});