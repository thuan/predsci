(function () {
    $(window).load(function () {
        var widget = $(".has-selectable-topics");
        var modal = $('#modal_widget');

        function handleKeywordClickInModal() {
            $('#modal_widget').find("ul.keywordlist").find("li:not(.title)").unbind().on("click", function () {
                var period = $("#date-range-selector").find(".dropdown-toggle").attr("data-period");
                var periodCount = $("#date-range-selector").find(".dropdown-toggle").attr("data-period-count");
                var timescale = "";
                var topic = $(this).attr("tag");

                $("#modal_widget .modal-header h3").hide().text("Trending Terms: "+topic).fadeIn(300);

                var apiWithQuery = APIselectabletopics + "&query=" + topic + "&period=" + period + "&period_count=" + periodCount;

                if (periodCount === "24") {
                    apiWithQuery = apiWithQuery + "&granularity=hour";
                }

                modal_prop.dataURL = apiWithQuery;
                updateChart(chart, apiWithQuery, timescale);
            });
        }

        function updateChart(chart, api, timescale) {
            var dateRange = $("#date-range-selector").find(".dropdown-toggle").attr("data-period-count");
            new ps_utilities.loadData(modal_prop);
        }

        var modal_prop = "";

        widget.find("ul.keywordlist").find("li:not(.title)").unbind().on("click", function () {
            var topic = $(this).attr("tag");

            modal_prop = {
                title: "Trending Terms: " + topic,
                subtitle: "Terms Trending On Twitter This Hour",
                dataURL: APIselectabletopics + "&query=" + topic + "&period=hour&period_count=24&granularity=hour",
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

            ps_modals.launch(modal_prop);

            var widget_trending_inside = {
                title: "Trending Terms",
                subtitle: "Terms Trending On Twitter This Hour",
                url_trending_terms: APItrendingterms,
                url_selectable_topics: APIselectabletopics,
                id: 'trending_terms_selectable_topics',
                category: '',
                type: '',
                callback: handleKeywordClickInModal,
                view: 'datagrid'
            }
            new ps_trendingterms.loadData(widget_trending_inside);
        });
    });
})();