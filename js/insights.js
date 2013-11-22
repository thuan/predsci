Date.prototype.monthNames = ["January", "February", "March","April", "May", "June","July", "August", "September", "October", "November", "December"
];

Date.prototype.getMonthName = function() {
    return this.monthNames[this.getMonth()];
};

(function($) {
    $.fn.insights = function(dataSource) {

        function getData(dataSource) {
            return $.ajax({
                url: dataSource,
                dataType: "JSONP"
            });
        }

        function getInsights() {

            getData(dataSource).success(function(data) {
                var insightsDisplayed = 0;
                var weeks = 1;
                var amountOfInsights = data.insights.length;
                var modal = $('#insight_container');
                if (data.insights.length > 0 && data.insights[0].insight_text !== "There are no insights at this time.") {
                    var dropdown = ""+
                    "<a class='btn dropdown-toggle btn-inverse' data-toggle='dropdown' href='#' data-original-title='' title=''>"+
                    "Insight History"+
                    "<span class='caret'></span>"+
                    "</a>"+
                    "<div class='dropdown-menu'>";

                    $.each(data.insights, function(i, insight) {
                        var dateRangeInitial = new Date();
                        var dateRangeFinal = new Date();
                        dateRangeInitial.setDate(dateRangeInitial.getDate()- (weeks * 7));
                        var insightDate = new Date(insight.date_created);

                        /* Only display insight if it meets the date range */
                        if ((insightDate.getTime() < dateRangeFinal.getTime()) && (
                            insightDate.getTime() > dateRangeInitial.getTime())){
                            dropdown +=
                                "<p class='insight'>" +
                                    "<span class='date'>" + insightDate.getMonthName()+" "+insightDate.getUTCDate()+", "+insightDate.getFullYear() + "</span>" +
                                    insight.insight_text +
                                    "</p>";
                            insightsDisplayed++;
                        }
                    });

                    if (!insightsDisplayed) {
                        dropdown +=
                            "<p class='insight'>There are no insights for last week.</p>";
                    }

                    dropdown +=
                        "<button class='btn insights-history-see-more'>See more</button>" +
                            "</div>" +
                            "</div></div>";

                    $('#insight_container').html(dropdown);
                    console.log("DROPDOWN");
                    console.log(dropdown);

                    if (!modal.find(".insights-toggle").length) {
                        var content = modal.find(".modalcontent");
                        $(dropdown).insertBefore(content);
                    }

                    if (modal.find(".insights-toggle").find(".insight").length === amountOfInsights) {
                        modal.find(".insights-history-see-more").remove();
                    }

                    /* Display latest insight in Growl window */
                    var latestInsight = data.insights[0];
                    var latestInsightDate = new Date(latestInsight.date_created);
                    var insightSummary = latestInsight.insight_text.substr(0, 86);
                    var insightFull = latestInsight.insight_text.substr(86);

                    var growlOutput =
                        "" +
                            "<a href='#' id='latest_insights_toggle_view'>X</a>" +
                            "<strong>Latest Insight</strong>" +
                            "<p class='latest_insights_date'>" + latestInsightDate.getMonthName()+" "+latestInsightDate.getUTCDate()+", "+latestInsightDate.getFullYear()+"</p>" +
                            "<p class='latest_insights_content'>" + latestInsight.insight_text;

                    /* Use ellipsis if the insight is long */
                    /* if (latestInsight.insight_text.length > 87) {
                     growlOutput +=
                     "<span class='ellipsis'>...</span><span class='insight-full'>" + insightFull + "</span>";
                     }*/

                    growlOutput += "</p>";
                    $('#latest_insights_content_holder').html(growlOutput);
                    /*modal.find(".modalcontent").append(growlOutput);*/

                    console.log("GROWOUTPUT");
                    console.log(growlOutput);

                } // end if insights

                var lastInsightXbutton = $('#latest_insights_toggle_view');
                var lastIsightDiv = $('#latest_insights_content_holder');
                var originalHeight = lastIsightDiv.height();

                lastInsightXbutton.on("click", function(e) {
                    if($('#latest_insights_content_holder').width() != 10 ){
                        lastIsightDiv.animate({
                            padding: "2px 5px 2px 3px",
                            width: 10,
                            height: 10
                        }, function() {
                            lastIsightDiv.css({height: "auto"});
                        }).children("p, strong").hide();
                    }
                    else{
                        lastIsightDiv.animate({
                            padding: "10px 20px 5px 20px",
                            width: 260,
                            height: originalHeight
                        }, function() {
                            lastIsightDiv.css({height: "auto"});
                        }).children("p, strong").show();
                    }
                });
            });
        }
        getInsights();
    };
})(jQuery);
