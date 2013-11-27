(function () {
    $(window).load(function () {
        $("#date-range-selector").find("a").on("click", function (e) {
            e.preventDefault();

            var topic = $(".current-selected-topic").text();
            var period = $(this).data("period");
            var periodCount = $(this).data("period-count");
            var dateRangeReadable = periodCount + " " + period + "s";

            var apiWithQuery = APIselectabletopics + "&query=" + topic + "&period=" + period + "&period_count=" + periodCount;

            if (periodCount === "24") {
                apiWithQuery = apiWithQuery + "&granularity=hour";
            }
            $("#date-range-selector").find(".dropdown-toggle").html(dateRangeReadable + "<span class='caret'></span>").attr("data-period", period).attr("data-period-count", periodCount);
            var modal_prop = {
                title: "Trending Terms: " + topic,
                subtitle: "Terms Trending On Twitter This Hour",
                dataURL: apiWithQuery,
                function: ps_graphDefinitions.buildLineChart,
                div_location: 'modal-widget-body',
                legend: true,
                tooltip: 'The terms that are trending on Twitter this hour in conversation related to Verizon Wireless.',
                class: 'conversationVolume',
                template: 'LineBasic',
                gallery: cfx.Gallery.Lines,
                showQueryForm: false,
                showToggle1: false,
                showInsightsDropdown: false,
                showInsights: false,
                trending: true,
                showDataSelector: true

            }
            $("#modal_widget #modal-widget-body").css('height', '270px');

            new ps_utilities.loadData(modal_prop);
        });
    });
})();